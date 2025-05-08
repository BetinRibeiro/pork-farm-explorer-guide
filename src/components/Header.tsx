
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-farm-brown text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="text-white hover:bg-farm-brown/30"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl md:text-2xl font-bold">SuínoTech</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#sobre" className="hover:text-farm-straw transition-colors">Sobre</a>
          <a href="#instalacoes" className="hover:text-farm-straw transition-colors">Instalações</a>
          <a href="#alimentacao" className="hover:text-farm-straw transition-colors">Alimentação</a>
          <a href="#reproducao" className="hover:text-farm-straw transition-colors">Reprodução</a>
          <a href="#saude" className="hover:text-farm-straw transition-colors">Saúde</a>
          <a href="#gestao" className="hover:text-farm-straw transition-colors">Gestão</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
