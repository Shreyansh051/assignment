import React from "react";
import { OrderStat, OrderStatProps } from "./OrderStat";

interface WidgetOrderStatsProps {
  data: OrderStatProps[];
}

const WidgetOrderStats: React.FC<WidgetOrderStatsProps> = ({ data }) => {
  return (
    <div className="widget-order-stats">
      {data.map((stat) => (
        <OrderStat
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export { WidgetOrderStats };
