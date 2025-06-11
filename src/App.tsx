import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="flex justify-center gap-4 py-4 bg-white dark:bg-gray-800 shadow">
          <Link to="/" className="font-semibold hover:text-blue-500">Home</Link>
          <Link to="/library" className="font-semibold hover:text-blue-500">Library</Link>
          <Link to="/favorites" className="font-semibold hover:text-blue-500">Favorites</Link>
          <Link to="/settings" className="font-semibold hover:text-blue-500">Settings</Link>
        </nav>
        <main className="pt-6 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
