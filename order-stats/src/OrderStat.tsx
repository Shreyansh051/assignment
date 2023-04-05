import React from "react";

export interface OrderStatProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

const OrderStat: React.FC<OrderStatProps> = ({ label, value, icon }) => {
  return (
    <div className="order-stat">
      <div className="order-stat-info">
        <div className="order-stat-label">{label}</div>
      </div>
      <div className="icondiv">
      <div>{icon}<span className="span-des">{value}</span></div>
      </div>
    </div>
  );
};

export { OrderStat };
