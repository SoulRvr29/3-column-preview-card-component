import "./App.css";
import Card from "./Card.jsx";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  const sedanData = {
    icon: sedans,
    title: "sedans",
    description: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.`,
  };
  const suvData = {
    icon: suvs,
    title: "suvs",
    description: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.`,
  };
  const luxuryData = {
    icon: luxury,
    title: "luxury",
    description: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.`,
  };
  return (
    <main>
      <Card
        icon={sedanData.icon}
        title={sedanData.title}
        description={sedanData.description}
      />
      <Card
        icon={suvData.icon}
        title={suvData.title}
        description={suvData.description}
      />
      <Card
        icon={luxuryData.icon}
        title={luxuryData.title}
        description={luxuryData.description}
      />
    </main>
  );
}

export default App;
