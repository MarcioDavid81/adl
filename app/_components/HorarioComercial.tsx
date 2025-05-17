import { useState, useEffect } from 'react';

export default function HorarioComercialAvancado({
  horarioAbertura = 8,
  horarioFechamento = 18,
  diasFuncionamento = [1, 2, 3, 4, 5],
  mensagemAberto = 'Estamos abertos! 🟢',
  mensagemFechado = 'Estamos fechados. 🔴 Volte amanhã.',
  mensagemForaDoDia = 'Fechado hoje. Volte em nossos dias de funcionamento.'
}) {
  const [status, setStatus] = useState('Carregando...');
  const [proximaAbertura, setProximaAbertura] = useState('');
  const [estaAberto, setEstaAberto] = useState(false);

  useEffect(() => {
    const updateStatus = () => {
      const agora = new Date();
      const diaSemana = agora.getDay();
      const hora = agora.getHours();
      
      const estaNoDiaFuncionamento = diasFuncionamento.includes(diaSemana);
      
      if (!estaNoDiaFuncionamento) {
        setStatus(mensagemForaDoDia);
        setEstaAberto(false);
        calcularProximaAbertura(agora, diaSemana);
        return;
      }
      
      const estaAberto = hora >= horarioAbertura && hora < horarioFechamento;
      setEstaAberto(estaAberto);
      
      if (estaAberto) {
        const fechaAs = `${horarioFechamento}:00`;
        setStatus(`${mensagemAberto} Fechamos às ${fechaAs}`);
      } else {
        setStatus(mensagemFechado);
        calcularProximaAbertura(agora, diaSemana);
      }
    };
    
    const calcularProximaAbertura = (dataAtual: any, diaAtual: any) => {
      let diasParaProximoDia = 1;
      let proximoDia = (diaAtual + 1) % 7;
      
      while (!diasFuncionamento.includes(proximoDia)) {
        diasParaProximoDia++;
        proximoDia = (proximoDia + 1) % 7;
      }
      
      const proximaData = new Date(dataAtual);
      proximaData.setDate(dataAtual.getDate() + diasParaProximoDia);
      proximaData.setHours(horarioAbertura, 0, 0, 0);
      
      setProximaAbertura(`Próxima abertura: ${proximaData.toLocaleDateString()} às ${horarioAbertura}:00`);
    };
    
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    
    return () => clearInterval(interval);
  }, [horarioAbertura, horarioFechamento, diasFuncionamento, mensagemAberto, mensagemFechado, mensagemForaDoDia]);

  return (
    <div className={`p-6 rounded-xl border `}>
      <div className="flex items-start">
        <div className={`flex-shrink-0 h-6 w-6 rounded-full ${estaAberto ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <div className="ml-3">
          <p className={`text-lg font-medium text-white`}>
            {status}
          </p>
          {proximaAbertura && (
            <p className="mt-2 text-sm text-gray-600">
              {proximaAbertura}
            </p>
          )}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-white">Horário de funcionamento:</h3>
        <ul className="mt-1 text-sm text-[#7EBFB3]">
          <li>Segunda a Sexta: {horarioAbertura}h - {horarioFechamento}h</li>
        </ul>
      </div>
    </div>
  );
}