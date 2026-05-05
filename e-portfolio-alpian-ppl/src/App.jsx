import { useState } from 'react';
import './App.css';

// Mengimpor komponen yang sudah dipisah
import ProfilSection from './components/ProfilSection';
import ArtefakSection from './components/ArtefakSection';
import RefleksiSection from './components/RefleksiSection';
import DokumentasiSection from './components/DokumentasiSection'; 

function App() {
  const [activeTab, setActiveTab] = useState('profil');

  const handleNavigation = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* NAVBAR ATAS */}
      <nav className="navbar">
        <div className="nav-brand">
          <i className="fas fa-layer-group"></i> E-Portofolio | Alpian Roymundus Siringo-ringo
        </div>
        <ul className="nav-links">
          <li>
            <a 
              className={activeTab === 'profil' ? 'active' : ''} 
              onClick={() => handleNavigation('profil')}
            >
              <i className="fas fa-user-circle"></i> Profil
            </a>
          </li>
          <li>
            <a 
              className={activeTab === 'artefak' ? 'active' : ''} 
              onClick={() => handleNavigation('artefak')}
            >
              <i className="fas fa-briefcase"></i> Analisis Artefak
            </a>
          </li>
          <li>
            <a 
              className={activeTab === 'refleksi' ? 'active' : ''} 
              onClick={() => handleNavigation('refleksi')}
            >
              <i className="fas fa-lightbulb"></i> Model Guru
            </a>
          </li>
          <li>
            <a 
              className={activeTab === 'dokumentasi' ? 'active' : ''} 
              onClick={() => handleNavigation('dokumentasi')}
            >
              <i className="fas fa-camera-retro"></i> Dokumentasi
            </a>
          </li>
        </ul>
      </nav>

      {/* KONTEN UTAMA DITENGAH */}
      <main className="container">
        {activeTab === 'profil' && <ProfilSection />}
        {activeTab === 'artefak' && <ArtefakSection />}
        {activeTab === 'refleksi' && <RefleksiSection />}
        {activeTab === 'dokumentasi' && <DokumentasiSection />} {/* Menampilkan Komponen DokumentasiSection */}
      </main>
    </>
  );
}

export default App;