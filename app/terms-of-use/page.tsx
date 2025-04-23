import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#1E3B39] text-white flex flex-col items-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
        <p>
          1. Termos Ao acessar ao site ADL - Comércio de Cereais LTDA, concorda
          em cumprir estes termos de serviço, todas as leis e regulamentos
          aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as
          leis locais aplicáveis. Se você não concordar com algum desses termos,
          está proibido de usar ou acessar este site. Os materiais contidos
          neste site são protegidos pelas leis de direitos autorais e marcas
          comerciais aplicáveis. 2. Uso de Licença É concedida permissão para
          baixar temporariamente uma cópia dos materiais (informações ou
          software) no site ADL - Comércio de Cereais LTDA , apenas para
          visualização transitória pessoal e não comercial. Esta é a concessão
          de uma licença, não uma transferência de título e, sob esta licença,
          você não pode: modificar ou copiar os materiais; usar os materiais
          para qualquer finalidade comercial ou para exibição pública (comercial
          ou não comercial); tentar descompilar ou fazer engenharia reversa de
          qualquer software contido no site ADL - Comércio de Cereais LTDA;
          remover quaisquer direitos autorais ou outras notações de propriedade
          dos materiais; ou transferir os materiais para outra pessoa ou
          'espelhe' os materiais em qualquer outro servidor. Esta licença será
          automaticamente rescindida se você violar alguma dessas restrições e
          poderá ser rescindida por ADL - Comércio de Cereais LTDA a qualquer
          momento. Ao encerrar a visualização desses materiais ou após o término
          desta licença, você deve apagar todos os materiais baixados em sua
          posse, seja em formato eletrónico ou impresso. 3. Isenção de
          responsabilidade Os materiais no site da ADL - Comércio de Cereais
          LTDA são fornecidos 'como estão'. ADL - Comércio de Cereais LTDA não
          oferece garantias, expressas ou implícitas, e, por este meio, isenta e
          nega todas as outras garantias, incluindo, sem limitação, garantias
          implícitas ou condições de comercialização, adequação a um fim
          específico ou não violação de propriedade intelectual ou outra
          violação de direitos. Além disso, o ADL - Comércio de Cereais LTDA não
          garante ou faz qualquer representação relativa à precisão, aos
          resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu
          site ou de outra forma relacionado a esses materiais ou em sites
          vinculados a este site. 4. Limitações Em nenhum caso o ADL - Comércio
          de Cereais LTDA ou seus fornecedores serão responsáveis ​​por
          quaisquer danos (incluindo, sem limitação, danos por perda de dados ou
          lucro ou devido a interrupção dos negócios) decorrentes do uso ou da
          incapacidade de usar os materiais em ADL - Comércio de Cereais LTDA,
          mesmo que ADL - Comércio de Cereais LTDA ou um representante
          autorizado da ADL - Comércio de Cereais LTDA tenha sido notificado
          oralmente ou por escrito da possibilidade de tais danos. Como algumas
          jurisdições não permitem limitações em garantias implícitas, ou
          limitações de responsabilidade por danos conseqüentes ou incidentais,
          essas limitações podem não se aplicar a você. 5. Precisão dos
          materiais Os materiais exibidos no site da ADL - Comércio de Cereais
          LTDA podem incluir erros técnicos, tipográficos ou fotográficos. ADL -
          Comércio de Cereais LTDA não garante que qualquer material em seu site
          seja preciso, completo ou atual. ADL - Comércio de Cereais LTDA pode
          fazer alterações nos materiais contidos em seu site a qualquer
          momento, sem aviso prévio. No entanto, ADL - Comércio de Cereais LTDA
          não se compromete a atualizar os materiais. 6. Links O ADL - Comércio
          de Cereais LTDA não analisou todos os sites vinculados ao seu site e
          não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
          de qualquer link não implica endosso por ADL - Comércio de Cereais
          LTDA do site. O uso de qualquer site vinculado é por conta e risco do
          usuário. Modificações O ADL - Comércio de Cereais LTDA pode revisar
          estes termos de serviço do site a qualquer momento, sem aviso prévio.
          Ao usar este site, você concorda em ficar vinculado à versão atual
          desses termos de serviço. Lei aplicável Estes termos e condições são
          regidos e interpretados de acordo com as leis do ADL - Comércio de
          Cereais LTDA e você se submete irrevogavelmente à jurisdição exclusiva
          dos tribunais naquele estado ou localidade.
        </p>
      </div>
      <Link href="/">
        <Button className="mt-4 bg-[#E6B325] text-gray-800 hover:bg-[#E6B325]/90">
          Voltar
        </Button>
      </Link>
    </div>
  );
}
