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
        <footer className='footer'>
          <div className="footer-container">
            <div className="footer-grid">
              
              {/* Kolom 1: Tentang */}
              <div className="footer-col">
                <h4><i className="fas fa-layer-group"></i> E-Portfolio</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Portofolio digital ini disusun sebagai bentuk dokumentasi dan refleksi selama mengikuti program Pendidikan Profesi Guru (PPG) Prajabatan di Universitas Negeri Yogyakarta.
                </p>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/alpian-roymundus-siringo-ringo-573776348/" title="LinkedIn" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  <a href="https://github.com/Roymundus/" title="GitHub" target='_blank' rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  <a href="mailto:arsiringoringo@gmail.com" title="Email" target='_blank' rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                  <a href="https://www.instagram.com/roymunduss_/" title="Instagram" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
              </div>

              {/* Kolom 2: Tautan Navigasi */}
              <div className="footer-col">
                <h4><i className="fas fa-link"></i> Tautan Cepat</h4>
                <ul className="footer-links">
                  <li><a onClick={() => handleNavigation('profil')}><i className="fas fa-angle-right"></i> Profil Mahasiswa</a></li>
                  <li><a onClick={() => handleNavigation('observasi')}><i className="fas fa-angle-right"></i> Observasi Sekolah</a></li>
                  <li><a onClick={() => handleNavigation('artefak')}><i className="fas fa-angle-right"></i> Analisis Artefak</a></li>
                  <li><a onClick={() => handleNavigation('refleksi')}><i className="fas fa-angle-right"></i> Model Guru</a></li>
                </ul>
              </div>

              {/* Kolom 3: Maps Lokasi LPTK */}
              <div className="footer-col">
                <h4><i className="fas fa-map-marker-alt"></i> Lokasi LPTK (UNY)</h4>
                <div className="footer-map">
                  {/* Google Maps Embed iframe untuk UNY */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.098179262253!2d110.38450117409214!3d-7.768784892250269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b6c0000001%3A0x1d35500e57209700!2sUniversitas%20Negeri%20Yogyakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta UNY"
                  ></iframe>
                </div>
                <p style={{ marginTop: '10px', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  <strong>Universitas Negeri Yogyakarta</strong><br/>
                  Jl. Colombo Yogyakarta No.1, Karang Malang, Sleman, DIY 55281
                </p>
              </div>

            </div>

            {/* Bagian Copyright Bawah */}
            <div className="footer-bottom">
              &copy; 2026 Alpian Roymundus Siringo-ringo
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
}

export default App;