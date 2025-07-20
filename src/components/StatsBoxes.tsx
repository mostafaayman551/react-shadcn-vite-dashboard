import StatsBox from "./StatsBox";
import { statsCards } from "../data/dummyData";
const StatsBoxes: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 w-full">
      {statsCards.map((card) => (
        <StatsBox
          key={card.id}
          title={card.title}
          value={card.value}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default StatsBoxes;
