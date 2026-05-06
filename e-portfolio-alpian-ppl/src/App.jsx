import { useState, useEffect } from 'react';
import './App.css';
import ProfilSection from './components/ProfilSection';
import ArtefakSection from './components/ArtefakSection';
import RefleksiSection from './components/RefleksiSection';
import DokumentasiSection from './components/DokumentasiSection';
import ObservasiSection from './components/ObservasiSection';

function App() {
  const [activeTab, setActiveTab] = useState('profil');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // State baru untuk mengontrol buka/tutup Sidebar di HP
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const handleNavigation = (tabName) => {
    setActiveTab(tabName);
    setIsSidebarOpen(false); // Tutup sidebar otomatis setelah menu dipilih (khusus HP)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="layout">
      
      {/* HEADER MOBILE (Hanya Muncul di Layar HP) */}
      <div className="mobile-header">
        <div className="nav-brand">
          <i className="fas fa-layer-group"></i> E-Portfolio
        </div>
        <button className="btn-menu" onClick={() => setIsSidebarOpen(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* OVERLAY GELAP (Muncul di HP saat menu terbuka) */}
      <div 
        className={`overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* SIDEBAR NAVIGATION */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="nav-brand">
            <i className="fas fa-layer-group"></i> E-Portfolio
          </div>
          <button className="btn-close" onClick={() => setIsSidebarOpen(false)}>
            &times;
          </button>
        </div>

        <ul className="nav-links">
          <li><a className={activeTab === 'profil' ? 'active' : ''} onClick={() => handleNavigation('profil')}><i className="fas fa-user-circle"></i> Profil</a></li>
          <li><a className={activeTab === 'observasi' ? 'active' : ''} onClick={() => handleNavigation('observasi')}><i className="fas fa-school"></i> Observasi Sekolah</a></li>
          <li><a className={activeTab === 'artefak' ? 'active' : ''} onClick={() => handleNavigation('artefak')}><i className="fas fa-briefcase"></i> Analisis Artefak</a></li>
          <li><a className={activeTab === 'refleksi' ? 'active' : ''} onClick={() => handleNavigation('refleksi')}><i className="fas fa-lightbulb"></i> Model Guru</a></li>
          <li><a className={activeTab === 'dokumentasi' ? 'active' : ''} onClick={() => handleNavigation('dokumentasi')}><i className="fas fa-camera"></i> Dokumentasi</a></li>
        </ul>

        {/* Tombol Tema dipindah ke bawah Sidebar */}
        <div className="theme-wrapper">
          <button className="btn-theme" onClick={() => setIsDarkMode(!isDarkMode)}>
            <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"} style={{ color: isDarkMode ? '#facc15' : 'inherit' }}></i>
            {isDarkMode ? "Mode Terang" : "Mode Gelap"}
          </button>
        </div>
      </aside>

      {/* KONTEN UTAMA */}
      <main className="main-content">
        <div className="container">
          {activeTab === 'profil' && <ProfilSection />}
          {activeTab === 'observasi' && <ObservasiSection />}
          {activeTab === 'artefak' && <ArtefakSection />}
          {activeTab === 'refleksi' && <RefleksiSection />}
          {activeTab === 'dokumentasi' && <DokumentasiSection />}
        </div>
      </main>

    </div>
  );
}

export default App;