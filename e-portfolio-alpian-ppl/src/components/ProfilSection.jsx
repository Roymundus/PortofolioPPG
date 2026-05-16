/* eslint-disable no-unused-vars */
import React from 'react';

// --- IMPORT GAMBAR VIA PATH ASSETS ---
import profilPic from '../assets/avatar.jpg'; 
import bgPattern from '../assets/bghero.png'; 

export default function ProfilSection() {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER PROFILE CARD                              */}
      {/* ======================================================== */}
      <div style={{ 
        background: 'var(--bg-card)', 
        borderRadius: '24px', 
        overflow: 'hidden',
        border: '1px solid var(--border-color)', 
        boxShadow: '0 15px 35px var(--shadow-color)',
        transition: 'all 0.3s ease'
      }}>
        
        {/* Banner Latar Belakang Gradient */}
        <div style={{ 
          height: '240px', 
          background: `linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(30, 64, 175, 0.95) 100%), url(${bgPattern})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          position: 'relative'
        }}>
           <div style={{ 
             position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
             backgroundImage: `url(${bgPattern})`, opacity: 0.2, mixBlendMode: 'overlay' 
           }}></div>
        </div>

        {/* Info Profil & Foto yang Menjorok Keluar */}
        <div style={{ 
          padding: '0 2.5rem 3rem 2.5rem', 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: '-100px' 
        }}>
          
          <img 
            src={profilPic} 
            alt="Profil Alpian" 
            style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '6px solid var(--bg-card)', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              backgroundColor: 'var(--bg-card)', 
              position: 'relative', 
              zIndex: 2
            }} 
          />
          
          <h2 style={{ 
            margin: '1.5rem 0 0.4rem 0', 
            color: 'var(--text-main)', 
            fontSize: '2.4rem', 
            textAlign: 'center', 
            fontWeight: '800',
            letterSpacing: '-0.5px'
          }}>
            Alpian Roymundus Siringo-ringo
          </h2>
          
          <p style={{ 
            margin: '0', 
            color: 'var(--primary)', 
            fontWeight: '700', 
            fontSize: '1.2rem', 
            textAlign: 'center', 
            letterSpacing: '0.5px' 
          }}>
            Mahasiswa PPG Prajabatan Informatika
          </p>
          
          {/* Badge Navigasi/Lokasi Resmi */}
          <div style={{ display: 'flex', gap: '15px', marginTop: '1.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ 
              padding: '10px 22px', background: 'var(--bg-soft)', borderRadius: '50px', 
              fontSize: '0.9rem', color: 'var(--text-muted)', border: '1px solid var(--border-color)', 
              display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500'
            }}>
              <i className="fas fa-university" style={{ color: 'var(--primary)' }}></i> Universitas Negeri Yogyakarta
            </span>
            <span style={{ 
              padding: '10px 22px', background: 'var(--bg-soft)', borderRadius: '50px', 
              fontSize: '0.9rem', color: 'var(--text-muted)', border: '1px solid var(--border-color)', 
              display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500'
            }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)' }}></i> Yogyakarta, Indonesia
            </span>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN LAYOUT GRID (2 KOLOM RESPONSIVE)                  */}
      {/* ======================================================== */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
        
        {/* --- KOLOM KIRI (PROFIL DIRI & KOMPETENSI) --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Card: Tentang Saya */}
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '2px solid var(--border-color)', paddingBottom: '18px', fontSize: '1.4rem', fontWeight: '700' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-user" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
              </div>
              Tentang Saya
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', fontSize: '1rem', marginBottom: 0, textAlign: 'justify' }}>
              Saya adalah lulusan S1 Informatika dari Institut Teknologi Kalimantan dan saat ini sedang menempuh program Pendidikan Profesi Guru (PPG) Prajabatan di Universitas Negeri Yogyakarta. Saya memiliki dedikasi tinggi terhadap dunia pendidikan teknologi serta menaruh minat mendalam pada pengembangan keilmuan di bidang <b>Machine Learning</b> dan <b>Data Science</b>.
            </p>
          </div>

          {/* Card: Asal & Identitas (Teks Diperbarui) */}
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '2px solid var(--border-color)', paddingBottom: '18px', fontSize: '1.4rem', fontWeight: '700' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-id-card" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
              </div>
              Asal & Identitas
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', fontSize: '1rem', marginBottom: '1rem', textAlign: 'justify' }}>
              Halo, selamat datang di E-Portfolio saya. Perkenalkan, saya Alpian Roymundus Siringo-Ringo. Saya lahir dan tumbuh besar di Provinsi Bengkulu, sebuah daerah di pesisir barat Sumatera yang sarat akan nilai sejarah dan pesona alam yang memukau, seperti puspa langka Rafflesia Arnoldi. Menghabiskan masa kecil hingga menyelesaikan pendidikan SMA di Bengkulu telah menanamkan karakter tangguh, mandiri, dan apresiasi yang mendalam terhadap keberagaman di dalam diri saya.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', fontSize: '1rem', marginBottom: 0, textAlign: 'justify' }}>
              Perjalanan akademis kemudian membawa saya merantau melintasi pulau menuju Kota Balikpapan untuk menempuh pendidikan S1 pada program studi Informatika di Institut Teknologi Kalimantan (ITK). Pengalaman hidup merantau, beradaptasi dengan lingkungan baru, serta berinteraksi di kota yang dinamis dengan geliat industrinya, sangat memperluas cara pandang saya. Hal ini membekali saya dengan kemampuan adaptasi dan pemahaman empati terhadap karakter individu yang majemuk—sebuah bekal sosial yang berharga dalam mengelola dinamika peserta didik di ruang kelas.
            </p>
          </div>

          {/* Card: Keahlian Utama */}
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '2px solid var(--border-color)', paddingBottom: '18px', fontSize: '1.4rem', fontWeight: '700' }}>
               <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-laptop-code" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
              </div>
              Keahlian Utama
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
              {['Pedagogi Informatika', 'Machine Learning', 'Data Science', 'Python', 'Web Development', 'Physical Computing'].map((skill, i) => (
                <span key={i} style={{ 
                  background: 'var(--bg-soft)', color: 'var(--text-main)', 
                  padding: '12px 20px', borderRadius: '14px', fontSize: '0.95rem', fontWeight: '600',
                  border: '1px solid var(--border-color)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'default'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* --- KOLOM KANAN (VISI MISI & TIMELINE PENDIDIKAN) --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Card: Inspirasi & Tujuan (Teks Diperbarui) */}
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 5px 20px var(--shadow-color)' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '2px solid var(--border-color)', paddingBottom: '18px', fontSize: '1.4rem', fontWeight: '700' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-lightbulb" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
              </div>
              Inspirasi & Tujuan
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '5px' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', fontSize: '1rem', margin: 0, textAlign: 'justify' }}>
                <b>Inspirasi:</b> Ketertarikan saya untuk terjun ke dunia pendidikan bermula dari latar belakang keilmuan Informatika tersebut, yang diperkuat oleh pengalaman berharga saat dipercaya mendampingi rekan-rekan mahasiswa sebagai asisten praktikum. Pengalaman itu menyadarkan saya bahwa pendidikan adalah fondasi sejati dari segala kemajuan teknologi.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.85', fontSize: '1rem', margin: 0, textAlign: 'justify' }}>
                <b>Tujuan:</b> Saat ini, saya tengah mendedikasikan diri dengan menempuh Pendidikan Profesi Guru (PPG) Prajabatan di Universitas Negeri Yogyakarta (UNY). Tujuan utama saya adalah menjadi pendidik profesional yang tidak sekadar mentransfer pengetahuan, melainkan mampu mengintegrasikan pemikiran komputasional (<i>computational thinking</i>) dan pendekatan saintifik secara humanis. Saya bertekad untuk merancang ekosistem belajar yang bermakna—tempat di mana siswa merasa aman untuk mengeksplorasi ide, melakukan kesalahan, belajar dari proses, dan pada akhirnya tangguh dalam memecahkan masalah di dunia nyata.
              </p>
            </div>
          </div>

          {/* Card: Riwayat Akademik (Timeline Grafis Modern) */}
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 5px 20px var(--shadow-color)', height: '100%' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '2px solid var(--border-color)', paddingBottom: '18px', marginBottom: '30px', fontSize: '1.4rem', fontWeight: '700' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-graduation-cap" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
              </div>
              Riwayat Akademik
            </h3>
            
            {/* Timeline Item 1: Saat Ini */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '35px', position: 'relative' }}>
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '50%', 
                background: 'var(--primary)', color: 'white', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                flexShrink: 0, zIndex: 2, boxShadow: '0 6px 15px rgba(59, 130, 246, 0.35)' 
              }}>
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              
              {/* Garis Penghubung Alur Timeline */}
              <div style={{ 
                position: 'absolute', left: '24px', top: '48px', bottom: '-45px', 
                width: '2px', background: 'var(--primary)', opacity: 0.25, zIndex: 1 
              }}></div>
              
              <div>
                <h4 style={{ margin: '0 0 6px 0', color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: '700' }}>
                  Pendidikan Profesi Guru (PPG) Prajabatan
                </h4>
                <div style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="far fa-calendar-alt"></i> Sekarang
                </div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
                  Universitas Negeri Yogyakarta. Fokus pada pengembangan keterampilan pedagogik, perancangan metodologi pembelajaran yang inovatif, serta pelaksanaan Praktik Pengalaman Lapangan (PPL) di sekolah mitra.
                </p>
              </div>
            </div>

            {/* Timeline Item 2: S1 */}
            <div style={{ display: 'flex', gap: '24px', position: 'relative' }}>
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '50%', 
                background: 'var(--bg-soft)', color: 'var(--text-muted)', 
                border: '2px solid var(--border-color)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                flexShrink: 0, zIndex: 2 
              }}>
                <i className="fas fa-university"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: '700' }}>
                  S1 Informatika
                </h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="far fa-calendar-alt"></i> Lulus Tahun 2025
                </div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
                  Institut Teknologi Kalimantan. Menyelesaikan tugas akhir berfokus pada implementasi algoritma <i>XGBoost</i> dan <i>Vaex</i> untuk analisis indikasi inefisiensi biaya pada data klaim asuransi kesehatan.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}