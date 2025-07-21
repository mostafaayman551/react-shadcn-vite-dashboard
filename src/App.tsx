import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import Header from "./components/Header";
import RecentActivityTable from "./components/RecentActivityTable";
import Sidebar from "./components/Sidebar";
import StatsBoxes from "./components/StatsBoxes";
import SettingsModal from "./components/SettingsModal";

const App: React.FC = () => {
  // used for responsive sidebar (development only)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(
    () => window.innerWidth <= 768
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      setSidebarOpen(currentWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="">
        <Header
          onSettingsClick={() => setModalOpen(true)}
          sideBarOpen={sidebarOpen}
          setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}
        />
        <Sidebar
          onSettingsClick={() => setModalOpen(true)}
          sidebarOpen={sidebarOpen}
        />
      </div>
      <main className={`p-4 md:p-6 flex flex-col gap-6 items-stretch ${sidebarOpen ? "ml-0" : "ml-64"} transition-all duration-300 ease-in-out`}>
        <StatsBoxes />
        <Chart />
        <RecentActivityTable />
      </main>
      <SettingsModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default App;
