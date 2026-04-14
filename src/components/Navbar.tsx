import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Castle, Hammer, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: '天守閣概覽', path: '/', icon: Castle },
  { name: '建築特色分析', path: '/architecture', icon: Info },
  { name: '大木作榫接百科', path: '/joinery', icon: Hammer },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full md:w-64 bg-wood-dark text-wood-warm h-full md:fixed left-0 top-0 border-r-4 border-hiroshima-red flex flex-col z-50">
      <div className="p-8 border-b border-sidebar-line">
        <Link to="/" className="group">
          <h1 className="font-serif text-2xl font-bold leading-tight text-white group-hover:text-hiroshima-red transition-colors">
            廣島城歷史<br />與建築工藝
          </h1>
        </Link>
      </div>

      <div className="flex-grow p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-sm transition-all duration-200",
                isActive 
                  ? "bg-hiroshima-red text-white shadow-lg" 
                  : "text-wood-warm/70 hover:bg-wood-warm/10 hover:text-white"
              )}
            >
              <item.icon size={18} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-6 border-t border-sidebar-line">
        <div className="status-badge text-center">專業學術版 1.2</div>
      </div>
    </nav>
  );
}

