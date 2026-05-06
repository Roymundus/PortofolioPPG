/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // Tambahkan useState di sini
import apelpagi from '../assets/apel-pagi.jpg';

// --- KOMPONEN PEMBANTU UNTUK KARTU FOTO TUNGGAL ---
// Tambahkan prop 'onImageClick' agar gambar bisa diklik
const FotoCard = ({ title, desc, imgSrc, onImageClick }) => (
  <div className="feature-box" style={{ padding: '0', overflow: 'hidden', borderLeft: 'none', display: 'flex', flexDirection: 'column' }}>
    
    {imgSrc ? (
      <img 
        src={imgSrc} 
        alt={title} 
        onClick={() => onImageClick(imgSrc)} // Fungsi saat gambar diklik
        style={{ width: '100%', height: '220px', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s' }} 
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Efek zoom saat di-hover
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    ) : (
      <div style={{ width: '100%', height: '220px', backgroundColor: 'var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
         <i className="fas fa-image" style={{ fontSize: '2.5rem', marginBottom: '10px' }}></i>
         <span style={{ fontSize: '0.8rem' }}>Foto Belum Dimasukkan</span>
      </div>
    )}

    <div style={{ padding: '1.2rem', backgroundColor: 'var(--bg-card)', zIndex: 1 }}>
      <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: 'var(--text-main)' }}>{title}</h4>
      <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{desc}</p>
    </div>
  </div>
);

// --- KOMPONEN PEMBANTU UNTUK GALERI GRID (BANYAK FOTO) ---
const FotoGaleri = ({ imgSrc, altText, onImageClick }) => (
  imgSrc ? (
    <div style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <img 
        src={imgSrc} 
        alt={altText} 
        onClick={() => onImageClick(imgSrc)} // Fungsi saat gambar diklik
        style={{ width: '100%', height: '180px', display: 'block', objectFit: 'cover', cursor: 'zoom-in', transition: 'transform 0.3s' }} 
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>
  ) : (
    <div style={{ width: '100%', height: '180px', borderRadius: '12px', backgroundColor: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
      <i className="fas fa-camera" style={{ fontSize: '2rem' }}></i>
    </div>
  )
);


// --- KOMPONEN UTAMA ---
export default function DokumentasiSection() {
  // State untuk menyimpan link gambar yang sedang diklik (jika null, berarti pop-up tertutup)
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="content-card fade-in">
      
      {/* --- HEADER DOKUMENTASI --- */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ justifyContent: 'center', borderBottom: 'none', marginBottom: '0.5rem' }}>
          <i className="fas fa-camera-retro"></i> Dokumentasi Kegiatan
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Galeri visual pelaksanaan tugas, observasi, dan pendampingan selama program Praktik Pengalaman Lapangan (PPL) di sekolah mitra. Klik gambar untuk memperbesar.
        </p>
      </div>

      {/* --- BAGIAN 1: AKTIVITAS & PRAKTIK LAPANGAN --- */}
      <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <i className="fas fa-tasks" style={{ color: 'var(--primary)' }}></i> Aktivitas Lapangan & Non-Mengajar
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        <FotoCard
          title="Penyerahan Mahasiswa"
          desc="Dokumentasi resmi penyerahan mahasiswa PPL ke pihak sekolah mitra."
          onImageClick={setSelectedImage}
        />
        <FotoCard
          title="Observasi Sekolah"
          desc="Pengamatan langsung manajemen, sarana prasarana, dan lingkungan belajar."
          onImageClick={setSelectedImage}
        />
        <FotoCard
          title="Piket Pagi"
          desc="Menyambut kedatangan siswa, membiasakan 5S, dan memantau kedisiplinan."
          imgSrc={apelpagi} 
          onImageClick={setSelectedImage} // Lempar fungsi ke dalam komponen
        />
        <FotoCard
          title="Pengondisian Pasca PKL"
          desc="Kegiatan di luar aktivitas PPL untuk pendampingan siswa pasca Praktik Kerja Lapangan."
          onImageClick={setSelectedImage}
        />
        <FotoCard
          title="Asistensi Mengajar"
          desc="Mendampingi dan berkolaborasi bersama guru pamong dalam proses pembelajaran di kelas."
          onImageClick={setSelectedImage}
        />
      </div>

      {/* --- BAGIAN 2: KEGIATAN BIMBINGAN --- */}
      <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <i className="fas fa-users-cog" style={{ color: 'var(--primary)' }}></i> Kegiatan Bimbingan & Refleksi
      </h3>

      {/* Galeri Bimbingan Guru Pamong */}
      <div style={{ marginBottom: '2.5rem', background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="fas fa-chalkboard-teacher"></i> Bimbingan Guru Pamong
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Diskusi, evaluasi perangkat ajar, dan pendampingan langsung terkait praktik pembelajaran di kelas.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <FotoGaleri onImageClick={setSelectedImage} />
          <FotoGaleri onImageClick={setSelectedImage} />
          <FotoGaleri onImageClick={setSelectedImage} />
        </div>
      </div>

      {/* Galeri Bimbingan Dosen Pembimbing Lapangan */}
      <div style={{ background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="fas fa-user-graduate"></i> Bimbingan DPL
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Konsultasi akademik, pelaporan progres, dan refleksi keseluruhan pelaksanaan PPL bersama Dosen Pembimbing.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <FotoGaleri onImageClick={setSelectedImage} />
          <FotoGaleri onImageClick={setSelectedImage} />
          <FotoGaleri onImageClick={setSelectedImage} />
          <FotoGaleri onImageClick={setSelectedImage} />
        </div>
      </div>

      {/* ========================================= */}
      {/* MODAL POP-UP UNTUK MELIHAT GAMBAR FULL    */}
      {/* ========================================= */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 9999,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            cursor: 'zoom-out' // Kursor berubah jadi minus saat diarahkan ke area luar
          }}
          onClick={() => setSelectedImage(null)} // Tutup pop-up jika area luar diklik
        >
          {/* Tombol Silang (Close) */}
          <button style={{ position: 'absolute', top: '20px', right: '30px', background: 'transparent', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer' }}>
            &times;
          </button>
          
          {/* Gambar Full */}
          <img 
            src={selectedImage} 
            alt="Diperbesar" 
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', objectFit: 'contain' }} 
            onClick={(e) => e.stopPropagation()} // Mencegah klik pada gambar menutup pop-up
          />
        </div>
      )}

    </div>
  );
}