import  { useState } from 'react';

// --- 1. IMPORT FOTO ANDA DI SINI ---
import apelpagi from '../assets/Dokumentasi/Apel Pagi/apel-pagi.jpg'; // Contoh foto untuk kategori Piket Pagi
import profil from '../assets/hero.png'; // Sebagai contoh sementara

export default function DokumentasiSection() {
  const [activeCategory, setActiveCategory] = useState('penyerahan');
  
  // State untuk modal foto (sekarang menyimpan objek gambar beserta keterangannya)
  const [selectedImage, setSelectedImage] = useState(null);

  // --- 2. DATA DOKUMENTASI (SEKARANG DENGAN CAPTION/KETERANGAN) ---
  const dokumentasiData = {
    penyerahan: {
      title: "Penyerahan Mahasiswa",
      desc: "Momen serah terima mahasiswa PPL Terbimbing dari LPTK UNY ke pihak sekolah mitra SMK N 2 Yogyakarta.",
      images: [
        { src: profil, caption: "Sesi foto bersama Kepala Sekolah dan Dosen Pembimbing Lapangan saat acara penyerahan." }
      ]
    },
    piket: {
      title: "Piket Pagi",
      desc: "Aktivitas menyambut siswa di gerbang sekolah, memantau kedisiplinan, dan membiasakan budaya 5S.",
      images: [
        { src: apelpagi, caption: "Menyambut kedatangan siswa di gerbang utama SMK N 2 Yogyakarta pada pagi hari." },
        { src: profil, caption: "Memantau ketertiban dan mengecek kelengkapan atribut seragam siswa." }
      ]
    },
    pengondisian: {
      title: "Pengondisian Pasca PKL",
      desc: "Pendampingan dan pengarahan bagi siswa yang baru saja menyelesaikan Praktik Kerja Lapangan (PKL).",
      images: [] // Jika kosong, akan muncul pesan "Belum ada foto"
    },
    observasi: {
      title: "Observasi Sekolah",
      desc: "Kegiatan pengamatan lingkungan fisik, sarana prasarana, dan budaya organisasi di sekolah.",
      images: [
        { src: profil, caption: "Melakukan observasi kondisi fasilitas laboratorium komputer sekolah." }
      ]
    },
    asistensi: {
      title: "Asistensi Mengajar",
      desc: "Kolaborasi bersama Guru Pamong dalam mendampingi proses pembelajaran di dalam kelas.",
      images: [
        { src: profil, caption: "Mendampingi siswa yang mengalami kendala saat mengerjakan LKPD." }
      ]
    },
    pamong: {
      title: "Bimbingan Guru Pamong",
      desc: "Sesi diskusi rutin, konsultasi perangkat ajar, dan refleksi harian bersama Guru Pamong.",
      images: [
        { src: profil, caption: "Diskusi dan penyelarasan Modul Ajar bersama Guru Pamong sebelum mengajar." },
        { src: apelpagi, caption: "Evaluasi dan refleksi pasca pelaksanaan praktik mengajar di ruang guru." }
      ]
    },
    dpl: {
      title: "Bimbingan DPL",
      desc: "Konsultasi berkala bersama Dosen Pembimbing Lapangan terkait progres dan laporan PPL.",
      images: [
        { src: profil, caption: "Sesi bimbingan, pemantauan progres, dan refleksi bersama DPL." }
      ]
    }
  };

  const currentActivity = dokumentasiData[activeCategory];

  return (
    <div className="content-card fade-in">
      
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className="section-title" style={{ justifyContent: 'center', borderBottom: 'none', marginBottom: '0.5rem' }}>
          <i className="fas fa-images"></i> Galeri Dokumentasi PPL
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          Klik kategori di bawah untuk melihat foto-foto kegiatan selama PPL Terbimbing di SMK Negeri 2 Yogyakarta.
        </p>
      </div>

      {/* --- TAB NAVIGASI --- */}
      <div style={{ 
        display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '15px', marginBottom: '2rem',
        scrollbarWidth: 'none', msOverflowStyle: 'none' 
      }}>
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        
        {Object.keys(dokumentasiData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            style={{
              padding: '10px 20px',
              background: activeCategory === key ? 'var(--primary)' : 'var(--bg-soft)',
              color: activeCategory === key ? 'white' : 'var(--text-main)',
              border: `1px solid ${activeCategory === key ? 'var(--primary)' : 'var(--border-color)'}`,
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              boxShadow: activeCategory === key ? '0 4px 12px var(--shadow-color)' : 'none'
            }}
          >
            {dokumentasiData[key].title}
          </button>
        ))}
      </div>

      {/* --- AREA KONTEN AKTIF --- */}
      <div style={{ 
        background: 'var(--bg-soft)', padding: '2rem', borderRadius: '20px', 
        border: '1px solid var(--border-color)', minHeight: '400px'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--text-main)', margin: '0 0 10px 0' }}>{currentActivity.title}</h3>
          <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
            {currentActivity.desc}
          </p>
        </div>

        {/* --- GRID FOTO --- */}
        {currentActivity.images.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {currentActivity.images.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  borderRadius: '12px', overflow: 'hidden', height: '180px',
                  border: '1px solid var(--border-color)', boxShadow: '0 4px 10px var(--shadow-color)',
                  cursor: 'zoom-in', position: 'relative'
                }}
                onClick={() => setSelectedImage(item)} // Mengirim data objek (src + caption)
              >
                <img 
                  src={item.src} 
                  alt={item.caption} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Tampilan jika belum ada foto */
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)', border: '2px dashed var(--border-color)', borderRadius: '16px' }}>
            <i className="fas fa-camera" style={{ fontSize: '3rem', marginBottom: '15px', opacity: 0.3 }}></i>
            <p>Belum ada foto dokumentasi untuk kategori ini.</p>
          </div>
        )}
      </div>

      {/* --- MODAL LIGHTBOX DENGAN KETERANGAN GAMBAR --- */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.92)', zIndex: 9999,
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button style={{ 
            position: 'absolute', top: '25px', right: '30px', 
            background: 'transparent', border: 'none', color: 'white', 
            fontSize: '2.5rem', cursor: 'pointer', zIndex: 10000
          }}>&times;</button>
          
          <div 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%', cursor: 'default' }}
            onClick={(e) => e.stopPropagation()} // Mencegah klik di area foto/teks menutup modal
          >
            {/* Foto Full Size */}
            <img 
              src={selectedImage.src} 
              alt={selectedImage.caption} 
              style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: '8px', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }} 
            />
            
            {/* Keterangan Teks di Bawah Foto */}
            {selectedImage.caption && (
              <div style={{ 
                marginTop: '20px', padding: '15px 25px', background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)',
                maxWidth: '800px', textAlign: 'center'
              }}>
                <p style={{ color: 'white', fontSize: '1.05rem', margin: 0, lineHeight: '1.5', fontWeight: '300' }}>
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}