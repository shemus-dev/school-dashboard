import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="text-red-500 text-4xl p-8">
      React is working! (Remove this later)
    </div>
  );
}
const Layout = () => {
  // 1. State Management
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // 2. Toggle Function (Explained Below)
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Flips the boolean value
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 3. Navbar Component */}
      <Navbar 
        toggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen} 
      />
      
      {/* 4. Sidebar + Content Area */}
      <div className="flex pt-16"> {/* pt-16 offsets content below fixed navbar */}
        
        {/* 5. Sidebar (Conditional Rendering) */}
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-indigo-700 text-white 
          transform transition-all duration-300 ease-in-out z-20
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          aria-hidden={!isSidebarOpen}
        >
          <div className="p-4 h-full overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">School Dashboard</h2>
            <nav>
              <ul className="space-y-2">
                {['Dashboard', 'Students', 'Teachers', 'Classes', 'Attendance'].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="block px-4 py-2 text-sm font-medium rounded-md
                      hover:bg-indigo-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* 6. Main Content Area */}
        <main
          className={`flex-1 transition-all duration-300 
          ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}
        >
          <div className="p-4">
            {/* 7. Outlet for Child Routes */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;