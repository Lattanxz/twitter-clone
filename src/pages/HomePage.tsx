// src/pages/HomePage.tsx
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import SidebarRight from "../components/SideBarRight";

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Feed principal */}
      <div className="flex-1 bg-blue-500 p-4">
        <Feed />
      </div>

      {/* Costado de la página */}
      <div className="w-1/4 bg-gray-100">
        <SidebarRight />
      </div>
    </div>
  );
};

export default HomePage;
