import {
  ClipboardMinus,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  open: boolean;
  onClick: () => void;
  onSettingsClick: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClick,
  onSettingsClick,
}) => {
  return (
    <aside
      className={`${
        open ? "w-64" : "w-16"
      } bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col transition-all duration-300 ease-in-out space-y-6`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`${
            open ? "opacity-100" : "opacity-0 hidden md:block"
          }text-xl font-bold transition-all duration-300 text-black dark:text-white`}
        >
          Dashboard
        </h1>
        {open ? (
          <PanelLeftClose onClick={onClick} className="cursor-pointer text-gray-600 dark:text-gray-300" />
        ) : (
          <PanelLeftOpen onClick={onClick} className="cursor-pointer text-gray-600 dark:text-gray-300" />
        )}
      </div>
      <nav className="flex flex-col justify-between h-full">
        {open ? (
          <>
            <div className="flex flex-col gap-5 w-full">
              <Button
                size={"lg"}
                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white w-full justify-start"
              >
                Dashboard
              </Button>
              <Button
                size={"lg"}
                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white w-full justify-start"
              >
                Reports
              </Button>
            </div>
            <Button
              size={"lg"}
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white w-full justify-start"
              onClick={onSettingsClick}
            >
              Settings
            </Button>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              <LayoutDashboard className="cursor-pointer text-gray-600 dark:text-gray-300" />
              <ClipboardMinus className="cursor-pointer text-gray-600 dark:text-gray-300" />
            </div>
            <Settings
              className="cursor-pointer text-gray-600 dark:text-gray-300"
              onClick={onSettingsClick}
            />
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
