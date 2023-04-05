import React from "react";
import "./App.scss";
import { WidgetOrderStats } from "./WidgetOrderStats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faGlassWater, faUtensils, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  return (
    <div className="app">
      <WidgetOrderStats
        data={[
          {
            label: "Revenue",
            value: 2.047,
            icon: <FontAwesomeIcon icon={faDollarSign} />,
          },
          {
            label: "Orders",
            value: 356,
            icon: <FontAwesomeIcon icon={faShoppingCart} />,
          },
          {
            label: "Dine-in",
            value: 220,
            icon: <FontAwesomeIcon icon={faUtensils} />,
          },
          {
            label: "Take-away",
            value: 135,
            icon: <FontAwesomeIcon icon={faGlassWater} />,
          },
        ]}
      />
    </div>
  );
};

export default App;
