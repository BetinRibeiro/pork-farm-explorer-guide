
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-farm-brown text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SuínoTech</h3>
            <p className="text-gray-200">Sistema educativo sobre gestão e tecnologia moderna para granjas de suínos.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-farm-straw transition-colors">Sobre Suinocultura</a></li>
              <li><a href="#instalacoes" className="hover:text-farm-straw transition-colors">Instalações</a></li>
              <li><a href="#alimentacao" className="hover:text-farm-straw transition-colors">Alimentação</a></li>
              <li><a href="#gestao" className="hover:text-farm-straw transition-colors">Gestão</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-farm-straw transition-colors">Manuais</a></li>
              <li><a href="#" className="hover:text-farm-straw transition-colors">Calculadoras</a></li>
              <li><a href="#" className="hover:text-farm-straw transition-colors">Pesquisas</a></li>
              <li><a href="#" className="hover:text-farm-straw transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} SuínoTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
