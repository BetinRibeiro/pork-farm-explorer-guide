
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-farm-green to-farm-lightGreen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560941975-e2c669a913dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-30"></div>
      <div className="container mx-auto text-center z-10 px-4">
        <div className="inline-block bg-white/80 rounded-lg p-8 backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold text-farm-brown mb-4">Sistema Moderno de Granjas de Suínos</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">Conheça as tecnologias e práticas que transformam a suinocultura moderna</p>
          <Button className="bg-farm-brown hover:bg-farm-brown/80 text-white font-bold py-3 px-6 rounded-full text-lg">
            <a href="#sobre" className="flex items-center gap-2">
              Explorar <ArrowDownCircle size={20} />
            </a>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownCircle size={40} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
