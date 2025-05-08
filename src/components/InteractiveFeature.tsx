
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const farmAreas = [
  {
    id: "maternidade",
    name: "Maternidade",
    description: "Área dedicada às fêmeas em gestação avançada e ao parto. Aqui os leitões recém-nascidos permanecem com a mãe durante a fase de amamentação.",
    features: ["Gaiolas especiais para parto", "Aquecimento para leitões", "Monitoramento constante", "Solo antiderrapante"]
  },
  {
    id: "creche",
    name: "Creche",
    description: "Local onde os leitões são colocados após o desmame, geralmente com 21 a 28 dias de vida, até aproximadamente 65 dias.",
    features: ["Temperatura controlada", "Divisões por lote", "Comedouros automatizados", "Bebedouros ajustáveis à altura"]
  },
  {
    id: "crescimento",
    name: "Crescimento e Terminação",
    description: "Área onde os suínos permanecem desde o fim da fase de creche até atingirem o peso ideal para o abate, aproximadamente 100-120kg.",
    features: ["Espaço adequado por animal", "Ventilação automatizada", "Sistema de remoção de dejetos", "Alimentação programada"]
  },
  {
    id: "reproducao",
    name: "Setor de Reprodução",
    description: "Local destinado à cobertura e aos primeiros meses de gestação das matrizes, incluindo os machos reprodutores.",
    features: ["Baias individuais e coletivas", "Laboratório para inseminação artificial", "Sistemas de detecção de cio", "Registros individuais"]
  }
];

const InteractiveFeature = () => {
  const [activeArea, setActiveArea] = useState("maternidade");
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Tabs defaultValue="maternidade" className="w-full" onValueChange={setActiveArea}>
        <div className="bg-farm-green p-2">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-farm-lightGreen">
            {farmAreas.map((area) => (
              <TabsTrigger 
                key={area.id} 
                value={area.id}
                className={`data-[state=active]:bg-farm-brown data-[state=active]:text-white`}
              >
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {farmAreas.map((area) => (
          <TabsContent key={area.id} value={area.id} className="p-6">
            <div className="flex flex-col md:flex-row md:gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-farm-brown">{area.name}</h3>
                <p className="text-gray-700 mb-6">{area.description}</p>
                <div>
                  <h4 className="font-bold mb-2">Características Principais:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {area.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-0 w-full md:w-1/2">
                <div className="bg-farm-lightGreen rounded-lg p-4 h-48 md:h-64 flex items-center justify-center">
                  <div className={`text-8xl ${activeArea === area.id ? 'animate-wiggle' : ''}`}>
                    {area.id === "maternidade" && "🐖🐷🐷🐷"}
                    {area.id === "creche" && "🐷🐷🐷"}
                    {area.id === "crescimento" && "🐖🐖🐖"}
                    {area.id === "reproducao" && "🐖❤️🐖"}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default InteractiveFeature;
