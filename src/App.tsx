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
    () => window.innerWidth >= 768
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      setSidebarOpen(currentWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  return (
    <div className="flex min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Sidebar
        open={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        onSettingsClick={() => setModalOpen(true)}
      />
      <div className="flex-1">
        <Header onSettingsClick={() => setModalOpen(true)} />
        <main className="p-4 md:p-6 flex flex-col gap-6 items-stretch">
          <StatsBoxes />
          <Chart />
          <RecentActivityTable />
        </main>
      </div>
      <SettingsModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default App;
