import { ClipboardMinus, LayoutDashboard, Settings } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  onSettingsClick: () => void;
  sidebarOpen: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ onSettingsClick, sidebarOpen }) => {
  return (
    <aside
      className={`${
        sidebarOpen ? "w-0 hidden" : "w-64"
      } h-full fixed z-10 top-0 left-0 bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col transition-all duration-300 ease-in-out space-y-6`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`text-xl font-bold transition-all duration-300 text-black dark:text-white`}
        >
          Dashboard
        </h1>
      </div>
      <nav className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-5 w-full">
          <Button
            size={"lg"}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white w-full justify-start"
          >
            <LayoutDashboard className="cursor-pointer text-gray-600 dark:text-gray-300" />
            Dashboard
          </Button>
          <Button
            size={"lg"}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white w-full justify-start"
          >
            <ClipboardMinus className="cursor-pointer text-gray-600 dark:text-gray-300" />
            Reports
          </Button>
        </div>
        <Button
          size={"lg"}
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white w-full justify-start"
          onClick={onSettingsClick}
        >
          <Settings className="cursor-pointer text-gray-600 dark:text-gray-300" />
          Settings
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
