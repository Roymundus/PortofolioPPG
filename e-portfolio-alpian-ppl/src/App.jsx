import { useState, useEffect } from 'react';
import './App.css';
import ProfilSection from './components/ProfilSection';
import ArtefakSection from './components/ArtefakSection';
import RefleksiSection from './components/RefleksiSection';
import DokumentasiSection from './components/DokumentasiSection';
import ObservasiSection from './components/ObservasiSection';

function App() {
  const [activeTab, setActiveTab] = useState('profil');
  
  // State untuk Mode Gelap
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek untuk mengubah tema pada tag HTML utama
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const handleNavigation = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <i className="fas fa-layer-group"></i> E-Portfolio
        </div>
        <ul className="nav-links">
          <li><a className={activeTab === 'profil' ? 'active' : ''} onClick={() => handleNavigation('profil')}><i className="fas fa-user-circle"></i> Profil</a></li>
          <li><a className={activeTab === 'observasi' ? 'active' : ''} onClick={() => handleNavigation('observasi')}><i className="fas fa-school"></i> Observasi</a></li>
          <li><a className={activeTab === 'artefak' ? 'active' : ''} onClick={() => handleNavigation('artefak')}><i className="fas fa-briefcase"></i> Artefak</a></li>
          <li><a className={activeTab === 'refleksi' ? 'active' : ''} onClick={() => handleNavigation('refleksi')}><i className="fas fa-lightbulb"></i> Model Guru</a></li>
          <li><a className={activeTab === 'dokumentasi' ? 'active' : ''} onClick={() => handleNavigation('dokumentasi')}><i className="fas fa-camera"></i> Dokumentasi</a></li>
          
          {/* Tombol Toggle Mode Gelap */}
          <li>
            <button className="btn-theme" onClick={() => setIsDarkMode(!isDarkMode)} title="Ganti Tema">
              <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"} style={{ color: isDarkMode ? '#facc15' : 'inherit' }}></i>
            </button>
          </li>
        </ul>
      </nav>

      <main className="container">
        {activeTab === 'profil' && <ProfilSection />}
        {activeTab === 'observasi' && <ObservasiSection />}
        {activeTab === 'artefak' && <ArtefakSection />}
        {activeTab === 'refleksi' && <RefleksiSection />}
        {activeTab === 'dokumentasi' && <DokumentasiSection />}
      </main>
    </>
  );
}

export default App;