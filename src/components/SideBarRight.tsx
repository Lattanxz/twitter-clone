// src/components/SidebarRight.tsx
import { Search } from "lucide-react";

const SidebarRight = () => {
  return (
    <div className="p-4">
      {/* Buscador */}
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-200 p-2 rounded-full outline-none"
          />
        </div>
      </div>

      {/* Sugeridos de seguidores */}
      <div>
        <h3 className="font-bold text-lg mb-4">Sugeridos</h3>
        <ul>
          <li className="flex items-center space-x-3 mb-4 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <span className="font-semibold">Usuario123</span>
              <p className="text-sm text-gray-500">@usuario123</p>
            </div>
          </li>
          <li className="flex items-center space-x-3 mb-4 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <span className="font-semibold">UserExample</span>
              <p className="text-sm text-gray-500">@userexample</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarRight;
