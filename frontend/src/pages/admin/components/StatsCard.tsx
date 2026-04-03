import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

type StatsCardProps = {
  icon: React.ElementType;
  lable: string;
  value: string;
  bgColor: string;
  iconColor: string;
};

const StatsCard = ({
  icon: Icon,
  lable,
  value,
  bgColor,
  iconColor,
}: StatsCardProps) => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800/80 transition-color">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${bgColor}`}>
            <Icon className={`size-6 ${iconColor}`} />
          </div>
          <div className="">
            <p className="text-sm text-zinc-400">{lable}</p>

            <p className="text-2xl font-bold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
