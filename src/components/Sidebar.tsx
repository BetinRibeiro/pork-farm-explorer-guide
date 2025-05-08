
import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div 
      className={`fixed top-0 left-0 h-full w-64 bg-farm-lightGreen z-50 shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 border-b border-farm-green">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-farm-brown">Menu</h2>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-5 w-5 text-farm-brown" />
          </Button>
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-3">
          <li>
            <a 
              href="#sobre" 
              className="block p-2 rounded hover:bg-farm-green hover:text-white transition-colors text-farm-brown"
              onClick={toggleSidebar}
            >
              Sobre Suinocultura
            </a>
          </li>
          <li>
            <a 
              href="#instalacoes" 
              className="block p-2 rounded hover:bg-farm-green hover:text-white transition-colors text-farm-brown"
              onClick={toggleSidebar}
            >
              Instalações
            </a>
          </li>
          <li>
            <a 
              href="#alimentacao" 
              className="block p-2 rounded hover:bg-farm-green hover:text-white transition-colors text-farm-brown"
              onClick={toggleSidebar}
            >
              Alimentação
            </a>
          </li>
          <li>
            <a 
              href="#reproducao" 
              className="block p-2 rounded hover:bg-farm-green hover:text-white transition-colors text-farm-brown"
              onClick={toggleSidebar}
            >
              Reprodução
            </a>
          </li>
          <li>
            <a 
              href="#saude" 
              className="block p-2 rounded hover:bg-farm-green hover:text-white transition-colors text-farm-brown"
              onClick={toggleSidebar}
            >
              Saúde Animal
            </a>
          </li>
          <li>
            <a 
              href="#gestao" 
              className="block p-2 rounded hover:bg-farm-green hover:text-white transition-colors text-farm-brown"
              onClick={toggleSidebar}
            >
              Gestão da Granja
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
