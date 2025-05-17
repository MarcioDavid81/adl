import { useState, useEffect } from 'react';

export default function HorarioComercial() {
  const [statusComercio, setStatusComercio] = useState('Carregando...');
  const [horaAtual, setHoraAtual] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      const hora = agora.getHours();
      const minutos = agora.getMinutes();
      
      setHoraAtual(`${hora}:${minutos < 10 ? '0' + minutos : minutos}`);
      
      const estaAberto = hora >= 18 && hora < 6;
      
      setStatusComercio(estaAberto ? 'Aberto agora' : 'Fechado');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-xs">
      <p className="text-gray-600 text-sm">Horário atual: 
        <span className="font-medium ml-1">{horaAtual}</span>
      </p>
      <p className="mt-2 text-lg font-semibold">
        Status: 
        <span className={`ml-2 ${statusComercio === 'Aberto agora' ? 'text-green-600' : 'text-red-600'}`}>
          {statusComercio}
        </span>
      </p>
    </div>
  );
}