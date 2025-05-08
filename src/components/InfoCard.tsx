
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

const InfoCard = ({ title, icon, children, className = "" }: InfoCardProps) => {
  return (
    <Card className={`h-full hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader className="flex flex-row items-center gap-2 bg-farm-lightGreen rounded-t-lg">
        <div className="bg-farm-green p-2 rounded-full text-white">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  );
}

export default InfoCard;
