import type { StatCard } from "@/data/dummyData";
import { CircleDollarSign, UserCheck, UserPlus, Users } from "lucide-react";

const StatsBox: React.FC<StatCard> = ({ title, value, icon }) => {
  let iconElement: React.ReactNode;
  switch (icon) {
    case "users":
      iconElement = <Users className="w-10 h-10 text-blue-500" />;
      break;
    case "active-users":
      iconElement = <UserCheck className="w-10 h-10 text-green-500" />;
      break;
    case "new-signups":
      iconElement = <UserPlus className="w-10 h-10 text-yellow-500" />;
      break;
    case "revenue":
      iconElement = <CircleDollarSign className="w-10 h-10 text-purple-500" />;
      break;
    default:
      iconElement = null;
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex items-center gap-4 text-center text-black dark:text-white">
      <div>{iconElement}</div>
      <div className="">
        <div className="text-md font-semibold">{value}</div>
        <div className="text-gray-500 dark:text-gray-300 text-sm">{title}</div>
      </div>
    </div>
  );
};

export default StatsBox;
