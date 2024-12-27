// src/components/Sidebar.tsx
import { Home, Search, Bell, MessageCircle, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold text-blue-500 mb-8">X</div>

      <ul>
        <li className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
          <Home className="w-6 h-6" />
          <span>Inicio</span>
        </li>
        <li className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
          <Search className="w-6 h-6" />
          <span>Explorar</span>
        </li>
        <li className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
          <Bell className="w-6 h-6" />
          <span>Notificaciones</span>
        </li>
        <li className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
          <MessageCircle className="w-6 h-6" />
          <span>Mensajes</span>
        </li>
        <li className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
          <User className="w-6 h-6" />
          <span>Perfil</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
