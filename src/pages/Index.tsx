
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import SectionContainer from '../components/SectionContainer';
import InfoCard from '../components/InfoCard';
import InteractiveFeature from '../components/InteractiveFeature';
import FaqSection from '../components/FaqSection';
import DataVisualization from '../components/DataVisualization';
import Footer from '../components/Footer';
import { Thermometer, Salad, Stethoscope, BarChart3, Home, Clock, Leaf } from 'lucide-react';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Fechar a sidebar quando clicar fora dela
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar-container');
      const button = document.getElementById('sidebar-button');
      
      if (sidebar && !sidebar.contains(event.target as Node) && 
          button && !button.contains(event.target as Node) && 
          sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div id="sidebar-container">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <Header toggleSidebar={toggleSidebar} />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Sobre a Suinocultura */}
        <SectionContainer id="sobre" title="Sobre a Suinocultura Moderna" bgColor="bg-gray-100">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              A suinocultura moderna integra tecnologia, sustentabilidade e bem-estar animal em sistemas 
              de produção eficientes. Com avanços em genética, nutrição, sanidade e gestão, 
              transformou-se em uma atividade altamente especializada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Sustentabilidade" 
              icon={<Leaf className="h-5 w-5" />}
            >
              <p>Sistemas modernos incorporam práticas sustentáveis como tratamento de dejetos, 
              reuso de água, geração de biogás e minimização do impacto ambiental.</p>
            </InfoCard>
            
            <InfoCard 
              title="Bem-estar Animal" 
              icon={<Home className="h-5 w-5" />}
            >
              <p>Instalações projetadas para proporcionar conforto térmico, espaço adequado e 
              enriquecimento ambiental, considerando o comportamento natural dos suínos.</p>
            </InfoCard>
            
            <InfoCard 
              title="Eficiência Produtiva" 
              icon={<Clock className="h-5 w-5" />}
            >
              <p>Ciclos de produção otimizados, com melhoramento genético, nutrição balanceada e 
              automação para garantir alta produtividade com qualidade.</p>
            </InfoCard>
          </div>
        </SectionContainer>
        
        {/* Instalações */}
        <SectionContainer id="instalacoes" title="Instalações e Infraestrutura">
          <div className="mb-12">
            <p className="text-center text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              As instalações modernas são projetadas para maximizar o conforto dos animais e 
              a eficiência da produção, adaptadas às diferentes fases do ciclo de vida do suíno.
            </p>
            
            <InteractiveFeature />
          </div>
        </SectionContainer>
        
        {/* Alimentação */}
        <SectionContainer id="alimentacao" title="Nutrição e Alimentação" bgColor="bg-farm-lightGreen/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-farm-brown mb-4">Sistema de Alimentação</h3>
              <p className="mb-4 text-gray-700">
                A alimentação representa até 70% dos custos na produção de suínos. Sistemas modernos utilizam:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Formulações precisas por fase de crescimento</li>
                <li>Distribuição automatizada de ração</li>
                <li>Monitoramento de consumo individual</li>
                <li>Ajustes nutricionais com base em dados</li>
                <li>Uso de aditivos para melhoria de desempenho</li>
              </ul>
            </div>
            <DataVisualization />
          </div>
        </SectionContainer>
        
        {/* Reprodução */}
        <SectionContainer id="reproducao" title="Sistema Reprodutivo">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-farm-brown mb-4">Tecnologias Reprodutivas</h3>
              <p className="mb-4 text-gray-700">
                A reprodução é o ponto de partida do ciclo produtivo. Granjas modernas utilizam:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Inseminação artificial com sêmen de alta qualidade genética</li>
                <li>Sincronização de cios para lotes homogêneos</li>
                <li>Protocolos de manejo específicos para matrizes</li>
                <li>Ultrassonografia para diagnóstico de gestação</li>
                <li>Sistemas informatizados para controle reprodutivo</li>
              </ul>
              <p className="text-gray-700">
                Uma matriz suína moderna pode produzir mais de 30 leitões por ano com manejo adequado,
                demonstrando a eficiência dos sistemas atuais.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-farm-lightGreen rounded-lg p-6 animate-slow-bounce">
              <div className="flex flex-col items-center justify-center">
                <span role="img" aria-label="pig" className="text-8xl mb-4">🐖</span>
                <div className="text-center">
                  <div className="font-bold text-2xl text-farm-brown">Ciclo Reprodutivo</div>
                  <p className="text-lg mt-2">114 dias de gestação</p>
                  <p className="text-lg">21-28 dias de lactação</p>
                  <p className="text-lg">5-7 dias intervalo desmame-cio</p>
                  <p className="text-lg font-bold mt-2">≈ 2,4 partos/ano</p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
        
        {/* Saúde */}
        <SectionContainer id="saude" title="Saúde e Biosseguridade" bgColor="bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg mb-8 text-gray-700">
              O controle sanitário é fundamental para a produtividade e longevidade das granjas.
              Sistemas modernos adotam medidas rigorosas de biosseguridade e monitoramento de saúde.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard 
                title="Prevenção" 
                icon={<Thermometer className="h-5 w-5" />}
              >
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>Controle de acesso e visitas</li>
                  <li>Quarentena para novos animais</li>
                  <li>Programas de vacinação</li>
                  <li>Limpeza e desinfecção</li>
                  <li>Controle de vetores</li>
                </ul>
              </InfoCard>
              
              <InfoCard 
                title="Monitoramento" 
                icon={<Stethoscope className="h-5 w-5" />}
              >
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>Inspeção diária dos animais</li>
                  <li>Testes laboratoriais periódicos</li>
                  <li>Monitoramento de parâmetros</li>
                  <li>Necropsias e diagnósticos</li>
                  <li>Vigilância epidemiológica</li>
                </ul>
              </InfoCard>
              
              <InfoCard 
                title="Nutrição Funcional" 
                icon={<Salad className="h-5 w-5" />}
              >
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>Probióticos e prebióticos</li>
                  <li>Ácidos orgânicos</li>
                  <li>Fitoterápicos</li>
                  <li>Imunomoduladores</li>
                  <li>Alternativas a antibióticos</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </SectionContainer>
        
        {/* Gestão */}
        <SectionContainer id="gestao" title="Gestão e Tecnologia">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-bold text-farm-brown mb-4 flex items-center gap-2">
                <BarChart3 className="text-farm-green" />
                Sistemas de Gestão Integrados
              </h3>
              
              <p className="mb-6 text-gray-700">
                Granjas modernas utilizam softwares especializados que integram todas as áreas da produção,
                permitindo análises em tempo real e tomada de decisões baseadas em dados.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-farm-green rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-farm-brown">Monitoramento em Tempo Real</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Consumo de ração e água</li>
                    <li>Temperatura e umidade</li>
                    <li>Ganho de peso</li>
                    <li>Comportamento animal</li>
                    <li>Ciclos reprodutivos</li>
                  </ul>
                </div>
                
                <div className="border border-farm-green rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-farm-brown">Indicadores de Desempenho</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Conversão alimentar</li>
                    <li>Taxa de mortalidade</li>
                    <li>Leitões desmamados/matriz/ano</li>
                    <li>Ganho de peso diário</li>
                    <li>Custo por kg produzido</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-6 text-farm-brown">
              Perguntas Frequentes
            </h3>
            <FaqSection />
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
      
      {/* Overlay para quando o sidebar estiver aberto */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Index;
