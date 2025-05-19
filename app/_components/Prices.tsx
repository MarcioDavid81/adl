"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface CommodityData {
  name: string;
  price: string;
  unit?: string;
  change?: string;
}

const COMMODITY_SYMBOLS = [
  { symbol: "ZC1", name: "Milho (Futuro)", unit: "USD/bushel" }, // CBOT
  { symbol: "ZS1", name: "Soja (Futuro)", unit: "USD/bushel" }, // CBOT
  { symbol: "KE1", name: "Trigo (Futuro)", unit: "USD/bushel" }, // KCBT
  { symbol: "KC1", name: "Café Arábica (Futuro)", unit: "USD/libra" }, // ICE
  { symbol: "SB1", name: "Açúcar (Futuro)", unit: "USD/libra" }, // ICE
];

const API_KEY = process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY;

const CommoditiesQuote: React.FC = () => {
  const [commodities, setCommodities] = useState<CommodityData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommodities = async () => {
      try {
        const requests = COMMODITY_SYMBOLS.map(async (item) => {
          const response = await axios.get(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${item.symbol}&apikey=${API_KEY}`
          );
          const data = response.data["Global Quote"];
          return {
            name: item.name,
            price: parseFloat(data["05. price"]).toFixed(2),
            unit: item.unit,
            change: data["10. change percent"],
          };
        });

        const results = await Promise.all(requests);
        setCommodities(results.filter(Boolean));
      } catch (err) {
        setError(
          "Erro ao carregar cotações. Atualize a página ou tente mais tarde."
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommodities();
  }, []);

  // Skeleton Loading (para melhor UX)
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid grid-cols-4 gap-4">
              <div className="h-6 bg-gray-100 rounded col-span-1"></div>
              <div className="h-6 bg-gray-100 rounded col-span-1"></div>
              <div className="h-6 bg-gray-100 rounded col-span-1"></div>
              <div className="h-6 bg-gray-100 rounded col-span-1"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section id="cotations" className="py-20 bg-[#f8f9fa] text-[#1E3B39] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Cotações de Commodities Agrícolas
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Commodity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Variação (%)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unidade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {commodities.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.price}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        item.change?.startsWith("-")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {item.change}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-gray-500 italic">
            Dados fornecidos por Alpha Vantage. Atualizados em tempo real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommoditiesQuote;
