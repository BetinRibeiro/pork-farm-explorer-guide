
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";

const growthData = [
  { age: '1m', peso: 7 },
  { age: '2m', peso: 25 },
  { age: '3m', peso: 45 },
  { age: '4m', peso: 70 },
  { age: '5m', peso: 90 },
  { age: '6m', peso: 115 },
];

const feedData = [
  { age: '1m', consumo: 0.35 },
  { age: '2m', consumo: 0.9 },
  { age: '3m', consumo: 1.8 },
  { age: '4m', consumo: 2.5 },
  { age: '5m', consumo: 3.0 },
  { age: '6m', consumo: 3.2 },
];

const conversionData = [
  { age: '1m', conversao: 1.2 },
  { age: '2m', conversao: 1.8 },
  { age: '3m', conversao: 2.3 },
  { age: '4m', conversao: 2.7 },
  { age: '5m', conversao: 3.0 },
  { age: '6m', conversao: 3.4 },
];

const DataVisualization = () => {
  const [dataType, setDataType] = useState('growth');
  
  const renderData = () => {
    switch(dataType) {
      case 'growth':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" label={{ value: "Idade (meses)", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Peso (kg)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => [`${value} kg`, "Peso"]} />
              <Bar dataKey="peso" fill="#75B74E" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'feed':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={feedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" label={{ value: "Idade (meses)", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Consumo diário (kg)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => [`${value} kg/dia`, "Consumo"]} />
              <Bar dataKey="consumo" fill="#8B4513" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'conversion':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" label={{ value: "Idade (meses)", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Conversão (kg ração/kg ganho)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => [`${value}:1`, "Conversão"]} />
              <Bar dataKey="conversao" fill="#FF8C9D" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-farm-brown">Visualização de Dados de Produção</h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          onClick={() => setDataType('growth')} 
          className={dataType === 'growth' ? 'bg-farm-green' : 'bg-farm-green/60'}
        >
          Curva de Crescimento
        </Button>
        <Button 
          onClick={() => setDataType('feed')} 
          className={dataType === 'feed' ? 'bg-farm-brown' : 'bg-farm-brown/60'}
        >
          Consumo de Ração
        </Button>
        <Button 
          onClick={() => setDataType('conversion')} 
          className={dataType === 'conversion' ? 'bg-farm-pink' : 'bg-farm-pink/60'}
        >
          Conversão Alimentar
        </Button>
      </div>
      
      {renderData()}
      
      <div className="mt-4 text-sm text-gray-600">
        <p>* Dados baseados em médias de produção com genética moderna e manejo adequado.</p>
      </div>
    </div>
  );
}

export default DataVisualization;
