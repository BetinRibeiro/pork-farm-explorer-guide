
import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
  bgColor?: string;
}

const SectionContainer = ({ id, title, children, bgColor = "bg-white" }: SectionContainerProps) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-farm-brown mb-12 border-b-2 border-farm-green pb-2 max-w-3xl mx-auto">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;
