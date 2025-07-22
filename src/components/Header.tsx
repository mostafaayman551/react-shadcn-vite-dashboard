import { Menu, Settings, SunMoon } from "lucide-react";
import { Avatar } from "./ui/avatar";
import userAvatar from "../assets/user.avif";
import { useEffect } from "react";

interface HeaderProps {
  onSettingsClick: () => void;
  sideBarOpen: boolean;
  setSidebarOpen: () => void;
}
const Header: React.FC<HeaderProps> = ({
  onSettingsClick,
  sideBarOpen,
  setSidebarOpen,
}) => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <header
      className={`flex items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800 shadow-md  ${
        sideBarOpen ? "ml-0" : "ml-48 md:ml-64 w-[calc(100%-192px)] md:w-[calc(100%-256px)]"
      } transition-all duration-300 ease-in-out w-full`}
    >
      <div className="flex items-center gap-4">
        <Menu
          className="text-gray-700 dark:text-gray-300 cursor-pointer"
          onClick={setSidebarOpen}
        />
        <h1 className="text-xl font-bold text-black dark:text-white">
          Dashboard
        </h1>
      </div>
      <nav className="flex items-center gap-5">
        <Settings
          onClick={onSettingsClick}
          className="text-gray-700 dark:text-gray-300 cursor-pointer"
        />
        <SunMoon
          className="text-gray-700 dark:text-gray-300 cursor-pointer"
          onClick={toggleTheme}
        />
        <Avatar className="w-10 h-10">
          <img
            src={userAvatar}
            alt="User"
            className="object-cover w-full h-full"
          />
        </Avatar>
      </nav>
    </header>
  );
};

export default Header;
