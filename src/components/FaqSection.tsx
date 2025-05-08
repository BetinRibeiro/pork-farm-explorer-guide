
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quais são os principais sistemas de criação de suínos?",
    answer: "Existem três principais sistemas: intensivo (confinamento total), semi-intensivo (parte confinado, parte ao ar livre) e extensivo (predominantemente ao ar livre). O sistema intensivo é o mais comum em produções comerciais modernas."
  },
  {
    question: "Qual é o ciclo reprodutivo de um suíno?",
    answer: "Uma porca tem gestação de aproximadamente 114 dias (3 meses, 3 semanas e 3 dias). Após o desmame dos leitões (21-28 dias), ela pode entrar em cio em 4-7 dias e ser coberta novamente. Idealmente, uma matriz pode ter 2,3 a 2,5 partos por ano."
  },
  {
    question: "Como funciona o sistema de alimentação automatizado?",
    answer: "Os sistemas automatizados utilizam sensores e temporizadores para distribuir alimento em horários programados. Muitos incluem dosadores que controlam a quantidade exata por animal, reduzindo desperdícios. Sistemas mais avançados podem até ajustar a dieta conforme a fase de desenvolvimento."
  },
  {
    question: "Quais são os principais desafios sanitários na suinocultura?",
    answer: "Os principais desafios incluem doenças respiratórias (como pneumonia), diarreias, controle de parasitas, e doenças virais como a circovirose. Um bom manejo sanitário inclui vacinação, monitoramento constante, biosseguridade e controle do ambiente."
  },
  {
    question: "Como é feito o tratamento de dejetos em uma granja de suínos?",
    answer: "O tratamento geralmente envolve sistemas de captação, armazenamento em esterqueiras ou lagoas, seguido de tratamento biológico. Muitas granjas modernas utilizam biodigestores para converter os dejetos em biogás (energia) e biofertilizante, promovendo sustentabilidade ambiental."
  },
];

const FaqSection = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-farm-green">
            <AccordionTrigger className="text-lg font-medium text-farm-brown hover:text-farm-green">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqSection;
