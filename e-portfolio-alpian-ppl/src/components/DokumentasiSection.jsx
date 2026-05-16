import  { useState,  } from 'react';

// --- 1. IMPORT FOTO ANDA DI SINI ---

import penyerahan1 from '../assets/Dokumentasi/Penyerahan Mahasiswa/penyerahan-mahasiswa1.jpg'; 
import penyerahan2 from '../assets/Dokumentasi/Penyerahan Mahasiswa/penyerahan-mahasiswa2.jpg';

import apelpagi from '../assets/Dokumentasi/Kegiatan Sekolah/apel-pagi.jpg';

import bimbinganGP from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp1.jpg';
import bimbinganGP2 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp2.jpg';
import bimbinganGP3 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp3.jpg';
import bimbinganGP4 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp-1.jpg';
import bimbinganGP5 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp-2.jpg';
import bimbinganGP6 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp-3.jpg';
import bimbinganGP7 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp-4.jpeg';
import bimbinganGP8 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-gp-5.jpeg';

import bimbinganDPL from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-dpl1.jpg'; 
import bimbinganDPL2 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-dpl-gp.jpg';
import bimbinganDPL3 from '../assets/Dokumentasi/Bimbingan GP dan DPL/bimbingan-dpl-gp2.jpg';

import asistensi1 from '../assets/Dokumentasi/Asisten Mengajar/asistensi-mengajar.jpg';
import asistensi2 from '../assets/Dokumentasi/Asisten Mengajar/asistensi-mengajar2.jpg';
import asistensi3 from '../assets/Dokumentasi/Asisten Mengajar/asistensi-mengajar3.jpg';
import asistensi4 from '../assets/Dokumentasi/Asisten Mengajar/asistensi-mengajar1.jpg';
import asistensi5 from '../assets/Dokumentasi/Asisten Mengajar/asistensi-mengajar4.jpg';
import asistensi6 from '../assets/Dokumentasi/Asisten Mengajar/asistensi-mengajar5.jpg';

import praktekMengajar1 from '../assets/Dokumentasi/PPL Terbimbing/praktek-mengajar.jpg';
import praktekMengajar2 from '../assets/Dokumentasi/PPL Terbimbing/praktek-mengajar2.jpg';
import praktekMengajar3 from '../assets/Dokumentasi/PPL Terbimbing/praktek-mengajar3.jpg';
import praktekMengajar4 from '../assets/Dokumentasi/PPL Terbimbing/praktek-mengajar-1.jpg';
import praktekMengajar5 from '../assets/Dokumentasi/PPL Terbimbing/praktek-mengajar-2.jpg';
import praktekMengajar6 from '../assets/Dokumentasi/PPL Terbimbing/praktek-mengajar-3.jpg';

import pamitan1 from '../assets/Dokumentasi/Penyerahan Mahasiswa/pamitanpplt.jpg';
import pamitan2 from '../assets/Dokumentasi/Penyerahan Mahasiswa/pamitanpplt2.jpg';
import pamitan3 from '../assets/Dokumentasi/Penyerahan Mahasiswa/pamitanpplt3.jpg';
import pamitan4 from '../assets/Dokumentasi/Penyerahan Mahasiswa/pamitanpplt4.jpg';

import pengondisian1 from '../assets/Dokumentasi/Kegiatan Sekolah/pengondisian1.jpg';
import pengondisian2 from '../assets/Dokumentasi/Kegiatan Sekolah/pengondisian2.jpg';
import pengondisian3 from '../assets/Dokumentasi/Kegiatan Sekolah/pengondisian3.jpg';
import pengondisian4 from '../assets/Dokumentasi/Kegiatan Sekolah/pengondisian4.jpg';
import pengondisian5 from '../assets/Dokumentasi/Kegiatan Sekolah/pengondisian5.jpg';
import pengondisian6 from '../assets/Dokumentasi/Kegiatan Sekolah/pengondisian6.jpg';

// =========================================================================
// --- KOMPONEN PEMBANTU 1: UNTUK GRID (KOTAK KECIL) DENGAN EFEK LOADING ---
// =========================================================================
const MediaGridItem = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Ikon Loading Spinner berwarna biru di tengah kotak */}
      {isLoading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--primary)', zIndex: 2 }}>
          <i className="fas fa-spinner fa-spin fa-2x"></i>
        </div>
      )}

      {item.type === 'video' ? (
        <>
          <video 
            src={item.src} 
            onLoadedData={() => setIsLoading(false)} // Video selesai memuat frame pertama
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isLoading ? 0 : 0.8, transition: 'opacity 0.4s' }} 
          />
          {!isLoading && (
            <i className="fas fa-play-circle" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '3rem', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)', zIndex: 1 }}></i>
          )}
        </>
      ) : (
        <img 
          src={item.src} 
          alt={item.caption} 
          onLoad={() => setIsLoading(false)} // Gambar selesai diunduh browser
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isLoading ? 0 : 1, transition: 'transform 0.4s, opacity 0.4s ease-in-out' }}
          onMouseOver={(e) => { if (!isLoading) e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseOut={(e) => { if (!isLoading) e.currentTarget.style.transform = 'scale(1)'; }}
        />
      )}
    </>
  );
};

// =========================================================================
// --- KOMPONEN PEMBANTU 2: UNTUK POP-UP BESAR (MODAL) DENGAN EFEK LOADING ---
// =========================================================================
const MediaModalItem = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '300px' }}>
      
      {/* Ikon Loading Spinner berwarna putih */}
      {isLoading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', zIndex: 2 }}>
          <i className="fas fa-spinner fa-spin fa-3x"></i>
          <div style={{ marginTop: '15px', fontSize: '0.9rem', color: '#cbd5e1', letterSpacing: '1px' }}>Memuat...</div>
        </div>
      )}

      {item.type === 'video' ? (
        <video 
          src={item.src} 
          controls autoPlay 
          onLoadedData={() => setIsLoading(false)}
          style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '8px', boxShadow: '0 0 30px rgba(0,0,0,0.5)', outline: 'none', background: 'black', opacity: isLoading ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }} 
        />
      ) : (
        <img 
          src={item.src} 
          alt={item.caption} 
          onLoad={() => setIsLoading(false)}
          style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '8px', boxShadow: '0 0 30px rgba(0,0,0,0.5)', objectFit: 'contain', opacity: isLoading ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }} 
        />
      )}
    </div>
  );
};


export default function DokumentasiSection() {
  const [activeCategory, setActiveCategory] = useState('penyerahan');
  
// State untuk menyimpan INDEX media yang sedang dibuka di Pop-up (bukan lagi menyimpan filenya)
  const [selectedIndex, setSelectedIndex] = useState(null);

  // --- 2. DATA DOKUMENTASI (SEKARANG DENGAN CAPTION/KETERANGAN) ---
  const dokumentasiData = {
    penyerahan: {
      title: "Penyerahan Mahasiswa",
      desc: "Momen serah terima mahasiswa PPL Terbimbing dari LPTK UNY ke pihak sekolah mitra SMK N 2 Yogyakarta.",
      media: [
        {type:'image', src:penyerahan1 , caption: "Sesi foto bersama Kepala Sekolah dan Dosen Pembimbing Lapangan saat acara penyerahan." },
        {type:'image', src: penyerahan2, caption: "Sesi foto bersama Kepala Sekolah dan Dosen Pembimbing Lapangan saat acara penyerahan." }
      ]
    },
    kegiatansekolah: {
      title: "Kegiatan Sekolah",
      desc: "Dokumentasi berbagai kegiatan sekolah seperti upacara bendera, pengondisian kelas, dan piket pagi",
      media: [
        {type:'image', src: apelpagi, caption: "Menyambut kedatangan siswa di gerbang utama SMK N 2 Yogyakarta pada pagi hari." },
        {type:'image', src: pengondisian1, caption: "Membantu pengondisian kelas sebelum pelaksanaan pembelajaran." },
        {type:'image', src: pengondisian2, caption: "Membantu pengondisian kelas sebelum pelaksanaan pembelajaran." },
        {type:'image', src: pengondisian3, caption: "Membantu pengondisian kelas sebelum pelaksanaan pembelajaran." },
        {type:'image', src: pengondisian4, caption: "Membantu pengondisian kelas sebelum pelaksanaan pembelajaran." },
        {type:'image', src: pengondisian5, caption: "Membantu pengondisian kelas sebelum pelaksanaan pembelajaran." },
        {type:'image', src: pengondisian6, caption: "Membantu pengondisian kelas sebelum pelaksanaan pembelajaran." }
      ]
    },
    observasi: {
      title: "Observasi Sekolah",
      desc: "Kegiatan pengamatan lingkungan fisik, sarana prasarana, dan budaya organisasi di sekolah.",
      media: [
        {type:'image', src: bimbinganGP, caption: "Melakukan observasi kondisi fasilitas laboratorium komputer sekolah." }
      ]
    },
    asistensi: {
      title: "Asistensi Mengajar",
      desc: "Kolaborasi bersama Guru Pamong dalam mendampingi proses pembelajaran di dalam kelas.",
      media: [
        {type:'image', src: asistensi1, caption: "Mendampingi siswa yang mengalami kendala saat mengerjakan LKPD." },
        {type:'image', src: asistensi2, caption: "Mendampingi siswa yang mengalami kendala saat mengerjakan LKPD." },
        {type:'image', src: asistensi3, caption: "Mendampingi siswa yang mengalami kendala saat mengerjakan LKPD." },
        {type:'image', src: asistensi4, caption: "Mendampingi siswa yang mengalami kendala saat mengerjakan LKPD." },
        {type:'image', src: asistensi5, caption: "Mendampingi siswa yang mengalami kendala saat mengerjakan LKPD." },
        {type:'image', src: asistensi6, caption: "Mendampingi siswa yang mengalami kendala saat mengerjakan LKPD." }
      ]
    },
    praktekMengajar: {
      title: "Praktek Mengajar",
      desc: "Kegiatan pelaksanaan pembelajaran di kelas dengan bimbingan Guru Pamong.",
      media: [
        {type:'image', src: praktekMengajar1, caption: "Pelaksanaan pembelajaran di kelas dengan bimbingan Guru Pamong." },
        {type:'image', src: praktekMengajar2, caption: "Pelaksanaan pembelajaran di kelas dengan bimbingan Guru Pamong." },
        {type:'image', src: praktekMengajar3, caption: "Pelaksanaan pembelajaran di kelas dengan bimbingan Guru Pamong." },
        {type:'image', src: praktekMengajar4, caption: "Pelaksanaan pembelajaran di kelas dengan bimbingan Guru Pamong." },
        {type:'image', src: praktekMengajar5, caption: "Pelaksanaan pembelajaran di kelas dengan bimbingan Guru Pamong." },
        {type:'image', src: praktekMengajar6, caption: "Pelaksanaan pembelajaran di kelas dengan bimbingan Guru Pamong." }
      ]
    },
    pamong: {
      title: "Bimbingan Guru Pamong",
      desc: "Sesi diskusi rutin, konsultasi perangkat ajar, dan refleksi harian bersama Guru Pamong.",
      media: [
        {type:'image', src: bimbinganGP, caption: "Diskusi dan penyelarasan Modul Ajar bersama Guru Pamong sebelum mengajar." },
        {type:'image', src: bimbinganGP2, caption: "Evaluasi dan refleksi pasca pelaksanaan praktik mengajar di ruang guru." },
        {type:'image', src: bimbinganGP3, caption: "Evaluasi dan refleksi pasca pelaksanaan praktik mengajar di ruang guru." },
        {type:'image', src: bimbinganGP4, caption: "Evaluasi dan refleksi pasca pelaksanaan praktik mengajar di ruang guru." },
        {type:'image', src: bimbinganGP5, caption: "Evaluasi dan refleksi pasca pelaksanaan praktik mengajar di ruang guru." },
        {type:'image', src: bimbinganGP6, caption: "Evaluasi dan refleksi pasca pelaksanaan praktik mengajar di ruang guru." },
        {type:'image', src: bimbinganGP7, caption: "Memperkenalkan permasalahan di sekolah kepada mahasiswa PPL." },
        {type:'image', src: bimbinganGP8, caption: "Refleksi penugasan administrasi mahasiswa PPL." }
      ]
    },
    dpl: {
      title: "Bimbingan DPL",
      desc: "Konsultasi berkala bersama Dosen Pembimbing Lapangan terkait progres dan laporan PPL.",
      media: [
        {type:'image', src: bimbinganDPL, caption: "Sesi bimbingan, pemantauan progres, dan refleksi bersama DPL." },
        {type:'image', src: bimbinganDPL2, caption: "Sesi bimbingan, pemantauan progres, dan refleksi bersama DPL." },
        {type:'image', src: bimbinganDPL3, caption: "Sesi bimbingan, pemantauan progres, dan refleksi bersama DPL." }
      ]
    },
    pamitan: {
      title: "Pamitan",
      desc:"Kegiatan pamitan setelah menyelesaikan rangkaian kegiatan PPL Terbimbing, sebagai bentuk terima kasih kepada sekolah mitra dan semua pihak yang telah mendukung selama PPL.",
      media :[
        {type:'image', src: pamitan1, caption: "Sesi pamitan bersama Kepala Sekolah, Guru Pamong, Dosen Pembimbing Lapangan, dan seluruh staf sekolah." },
        {type:'image', src: pamitan2, caption: "Sesi pamitan bersama Kepala Sekolah, Guru Pamong, Dosen Pembimbing Lapangan, dan seluruh staf sekolah." },
        {type:'image', src: pamitan3, caption: "Sesi pamitan bersama Kepala Sekolah, Guru Pamong, Dosen Pembimbing Lapangan, dan seluruh staf sekolah." },
        {type:'image', src: pamitan4, caption: "Sesi pamitan bersama Kepala Sekolah, Guru Pamong, Dosen Pembimbing Lapangan, dan seluruh staf sekolah." }
      ]
    }
  };

  const currentActivity = dokumentasiData[activeCategory];

  // --- FUNGSI NAVIGASI SLIDER ---
  const handleClose = () => setSelectedIndex(null);

  const handleNext = (e) => {
    e.stopPropagation(); 
    setSelectedIndex((prev) => (prev === currentActivity.media.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? currentActivity.media.length - 1 : prev - 1));
  };

  return (
    <div className="content-card fade-in">
      
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className="section-title" style={{ justifyContent: 'center', borderBottom: 'none', marginBottom: '0.5rem' }}>
          <i className="fas fa-images"></i> Galeri Dokumentasi PPL
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          Klik kategori di bawah untuk melihat foto maupun video kegiatan. Klik media untuk memperbesar.
        </p>
      </div>

      {/* --- TAB NAVIGASI KATEGORI --- */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '15px', marginBottom: '2rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        
        {Object.keys(dokumentasiData).map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              setSelectedIndex(null); 
            }}
            style={{
              padding: '10px 20px', background: activeCategory === key ? 'var(--primary)' : 'var(--bg-soft)',
              color: activeCategory === key ? 'white' : 'var(--text-main)',
              border: `1px solid ${activeCategory === key ? 'var(--primary)' : 'var(--border-color)'}`,
              borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem', whiteSpace: 'nowrap',
              transition: 'all 0.3s ease', boxShadow: activeCategory === key ? '0 4px 12px var(--shadow-color)' : 'none'
            }}
          >
            {dokumentasiData[key].title}
          </button>
        ))}
      </div>

      {/* --- AREA KONTEN AKTIF --- */}
      <div style={{ background: 'var(--bg-soft)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)', minHeight: '400px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--text-main)', margin: '0 0 10px 0' }}>{currentActivity.title}</h3>
          <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>{currentActivity.desc}</p>
        </div>

        {/* --- GRID MEDIA --- */}
        {currentActivity.media.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {currentActivity.media.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  borderRadius: '12px', overflow: 'hidden', height: '180px', background: 'var(--border-color)',
                  border: '1px solid var(--border-color)', boxShadow: '0 4px 10px var(--shadow-color)',
                  cursor: 'pointer', position: 'relative'
                }}
                onClick={() => setSelectedIndex(index)} 
              >
                {/* Memanggil Komponen Grid yang Punya Efek Loading */}
                <MediaGridItem item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)', border: '2px dashed var(--border-color)', borderRadius: '16px' }}>
            <i className="fas fa-camera" style={{ fontSize: '3rem', marginBottom: '15px', opacity: 0.3 }}></i>
            <p>Belum ada dokumentasi untuk kategori ini.</p>
          </div>
        )}
      </div>

      {/* ==================================================== */}
      {/* MODAL LIGHTBOX DENGAN SLIDER (NEXT/PREV) & KETERANGAN */}
      {/* ==================================================== */}
      {selectedIndex !== null && (
        <div 
          style={{
            position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, 
            backgroundColor: 'rgba(0, 0, 0, 0.92)', zIndex: 9999,
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px'
          }}
          onClick={handleClose}
        >
          {/* Tombol Silang */}
          <button style={{ position: 'absolute', top: '25px', right: '50px', background: 'transparent', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer', zIndex: 10000 }} onClick={handleClose}>&times;</button>
          
          {/* Tombol Panah Kiri */}
          {currentActivity.media.length > 1 && (
            <button 
              onClick={handlePrev}
              style={{
                position: 'absolute', left: '40px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', width: '50px', height: '50px', 
                borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)'
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )}

          {/* AREA MEDIA UTAMA DI POP-UP */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '75vw', width: '100%', cursor: 'default' }} onClick={(e) => e.stopPropagation()}>
            
            {/* ✅ TAMBAHKAN KEY DI SINI */}
            <MediaModalItem 
              key={currentActivity.media[selectedIndex].src} 
              item={currentActivity.media[selectedIndex]} 
            />
            {/* Kotak Keterangan & Nomor Halaman */}
            <div style={{ 
              marginTop: '20px', padding: '15px 25px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', 
              borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', width: '100%', maxWidth: '800px', textAlign: 'center'
            }}>
              <p style={{ color: 'white', fontSize: '1.05rem', margin: '0 0 8px 0', lineHeight: '1.5', fontWeight: '300' }}>
                {currentActivity.media[selectedIndex].caption}
              </p>
              {/* Indikator Angka */}
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', letterSpacing: '1px', fontWeight: '500' }}>
                {selectedIndex + 1} / {currentActivity.media.length}
              </div>
            </div>
          </div>

          {/* Tombol Panah Kanan */}
          {currentActivity.media.length > 1 && (
            <button 
              onClick={handleNext}
              style={{
                position: 'absolute', right: '50px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', width: '50px', height: '50px', 
                borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)'
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )}

        </div>
      )}

    </div>
  );
}