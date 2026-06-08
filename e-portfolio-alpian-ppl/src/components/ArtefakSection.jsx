import { useState } from 'react';

export default function ArtefakSection() {
  // 1. State untuk navigasi Tab Dokumen Pembelajaran
  const [activeDoc, setActiveDoc] = useState('asesmen');
  
  // 2. State untuk navigasi Tab Analisis
  const [activeAnalysis, setActiveAnalysis] = useState('kendala');

  // 3. STATE BARU UNTUK POP-UP PRATINJAU FILE PENILAIAN
  const [previewModal, setPreviewModal] = useState(null);

  // Data Konten Dokumen Pembelajaran
  const docData = {
    rpp: {
      title: 'Modul Ajar / RPP',
      desc: 'Rencana pelaksanaan pembelajaran komprehensif berbasis Problem-Based Learning (PBL).',
      icon: 'fa-book-open',
      embedUrl: 'https://drive.google.com/file/d/1rhiVlPlX0eKMRt0Ye-Ji0aasBSSYLs9n/preview'
    },
    media: {
      title: 'Media Pembelajaran',
      desc: 'Bahan tayang dan peraga visual interaktif untuk menjembatani konsep materi yang abstrak.',
      icon: 'fa-photo-video',
      embedUrl: 'https://www.canva.com/design/DAHGCSXbIos/1QVeStzd9kDGedUt6kz6rw/view?embed' 
    },
    asesmen: {
      title: 'Asesmen Diagnostik',
      desc: 'Instrumen awal pemetaan kemampuan kognitif dan gaya belajar siswa sebelum materi dirancang.',
      icon: 'fa-clipboard-check',
      embedUrl: 'https://drive.google.com/file/d/1BLVxE0hpquFV9FN-6jbAE2g7MuRVn7Zs/preview'
    },
    pantauan: {
      title: 'Pantauan Progres',
      desc: 'Dokumen hasil monitoring perkembangan, evaluasi formatif, dan rubrik penilaian siswa.',
      icon: 'fa-chart-line',
      embedUrl: 'https://docs.google.com/spreadsheets/d/1WgN5u9mDlLaSScx554pLO_iepoBnCW5O/edit?usp=sharing&ouid=103779033745794569385&rtpof=true&sd=true'
    }
  };

  // Data Konten Analisis Refleksi
  const analysisData = {
    kendala: {
      title: 'Kendala dalam Penyusunan',
      desc: 'Tantangan utama yang dihadapi selama proses merancang perangkat pembelajaran',
      icon: 'fa-exclamation-triangle',
      cards: [
        { id: 1, title: 'Alokasi Waktu', text: 'Menyelaraskan alokasi waktu dengan kedalaman materi pembelajaran pada sintaks Problem-Based Learning agar tidak mendominasi waktu inti.' },
        { id: 2, title: 'Heterogenitas Siswa', text: 'Menyesuaikan tingkat kesulitan LKM dengan kemampuan kognitif awal dan literasi digital siswa yang sangat beragam berdasarkan Asesmen Diagnostik.' },
        { id: 3, title: 'Kontekstualitas Masalah', text: 'Merumuskan pemantik masalah yang benar-benar relevan dengan keseharian peserta didik menuntut observasi lingkungan yang intensif.' }
      ]
    },
    teori: {
      title: 'Teori Pedagogi yang Diadopsi',
      desc: 'Landasan keilmuan dalam merancang pengalaman belajar di kelas',
      icon: 'fa-brain',
      cards: [
        { id: 1, title: 'Konstruktivisme (Vygotsky)', text: 'Memfasilitasi scaffolding pada Zone of Proximal Development (ZPD) siswa agar mereka membangun pengetahuannya sendiri melalui interaksi.' },
        { id: 2, title: 'Problem-Based Learning', text: 'Menggunakan masalah dunia nyata sebagai konteks utama bagi siswa untuk belajar berpikir kritis dan berkolaborasi.' },
        { id: 3, title: 'Kerangka Kerja TPACK', text: 'Mengintegrasikan alat digital sebagai instrumen pedagogis untuk melatih computational thinking secara efektif dalam materi abstrak.' }
      ]
    },
    keberhasilan: {
      title: 'Faktor Keberhasilan',
      desc: 'Kunci sukses penerapan pembelajaran di dalam ruang kelas',
      icon: 'fa-chart-line',
      cards: [
        { id: 1, title: 'Media Visual Interaktif', text: 'Penggunaan media pembelajaran berhasil memusatkan fokus dan antusiasme siswa pada fase orientasi masalah dengan sangat baik.' },
        { id: 2, title: 'Kolaborasi Terarah', text: 'Pembagian peran dalam diskusi kelompok membuat siswa yang cenderung pasif menjadi berani berpendapat dan berkontribusi.' },
        { id: 3, title: 'Pemikiran Sistematis', text: 'Peserta didik tidak hanya menghafal, tetapi sukses mengurai masalah menjadi langkah-langkah logis secara terstruktur.' }
      ]
    },
    adaptasi: {
      title: 'Adaptasi Situasi Berbeda',
      desc: 'Skenario modifikasi untuk lingkungan sekolah dengan fasilitas teknologi terbatas',
      icon: 'fa-sync-alt',
      cards: [
        { id: 1, title: 'Model Unplugged', text: 'Mengganti aplikasi digital dengan alat peraga manipulatif fisik dari benda-benda di sekitar lingkungan sekolah.' },
        { id: 2, title: 'Modifikasi LKM', text: 'Mengonversi lembar kerja digital menjadi kertas kerja interaktif yang tetap mampu memicu pemikiran komputasional manual.' },
        { id: 3, title: 'Mempertahankan Esensi PBL', text: 'Fokus tetap diarahkan pada kolaborasi pemecahan masalah tanpa harus bergantung secara mutlak pada koneksi internet atau gawai.' }
      ]
    }
  };

  // --- DATA BUKTI PENILAIAN ---
  // Pastikan URL berakhiran /preview agar dapat dibuka di dalam iframe website
  const dataPenilaian = [
    {
      title: "Lampiran 7: Penilaian Perangkat Pembelajaran",
      desc: "Lembar penilaian otentik oleh Guru Pamong / DPL terhadap kualitas rancangan administrasi mengajar, instrumen asesmen, dan media ajar yang dikembangkan.",
      icon: "fa-file-signature",
      color: "#2563eb", 
      pertemuan: [
        { nama: "Pertemuan 1", topik: "Penilaian Perangkat - Siklus 1", link: "https://drive.google.com/file/d/1Ke9FIOptG3HshRrAv4kdLjZutg1kjT1X/preview" },
        { nama: "Pertemuan 2", topik: "Penilaian Perangkat - Siklus 2", link: "https://drive.google.com/file/d/1AajlauUNxfwtyq6jlYqjFyczR1QuKPmb/preview" },
        { nama: "Pertemuan 3", topik: "Penilaian Perangkat - Siklus 3", link: "https://drive.google.com/file/d/1ioE0erUKEwrhfv3hGw3Bu6d5EVJ3pzvR/preview" }
      ]
    },
    {
      title: "Lampiran 8: Penilaian Praktik Mengajar",
      desc: "Lembar observasi klinis pelaksanaan praktik pengalaman lapangan (PPL) terbimbing di ruang kelas oleh Guru Pamong dan Dosen Pembimbing Lapangan.",
      icon: "fa-chalkboard-teacher",
      color: "#10b981", 
      pertemuan: [
        { nama: "Pertemuan 1", topik: "Evaluasi Praktik Mengajar 1", link: "https://drive.google.com/file/d/1WmkMflwApx7B52tp7nU6-G82h3aPLraL/preview" },
        { nama: "Pertemuan 2", topik: "Evaluasi Praktik Mengajar 2", link: "https://drive.google.com/file/d/1N3D5hKdhjPYqZZUPlljJWZK41SQCJSuA/preview" },
        { nama: "Pertemuan 3", topik: "Evaluasi Praktik Mengajar 3", link: "https://drive.google.com/file/d/1vb8LO7mOAdTk6El5RXEw4hv4N_zlr4E5/preview" }
      ]
    }
  ];

  return (
    <div className="content-card fade-in" style={{ width: '100%', boxSizing: 'border-box' }}>
      <h2 className="section-title">
        <i className="fas fa-folder-open"></i> Produk & Praktik Mengajar
      </h2>
      <p>
        Bagian ini menyajikan dokumen produk pembelajaran yang telah saya kembangkan, beserta refleksi mendalam terhadap efektivitas implementasinya selama 3 siklus pada kegiatan Praktik Pengalaman Lapangan (PPL) Terbimbing.
      </p>

      {/* =========================================================
          BAGIAN 1: TAB NAVIGASI DOKUMEN PEMBELAJARAN
          ========================================================= */}
      <h3 style={{ marginTop: '2.5rem', color: '#2563eb', borderBottom: '2px solid rgba(37, 99, 235, 0.1)', paddingBottom: '10px' }}>
        <i className="fas fa-file-alt"></i> Dokumen Utama Pembelajaran
      </h3>
      <p style={{ marginBottom: '1.5rem' }}>Pilih menu tab di bawah ini untuk melihat pratinjau masing-masing dokumen perangkat pembelajaran:</p>

      <div className="no-scrollbar" style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '1.5rem' }}>
        {Object.keys(docData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveDoc(key)}
            style={{
              padding: '10px 20px',
              background: activeDoc === key ? '#2563eb' : 'var(--bg-card)',
              color: activeDoc === key ? 'white' : 'var(--text-muted)',
              border: `1px solid ${activeDoc === key ? '#2563eb' : '#cbd5e1'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxShadow: activeDoc === key ? '0 4px 10px rgba(37, 99, 235, 0.2)' : 'none'
            }}
          >
            <i className={`fas ${docData[key].icon}`}></i> {docData[key].title}
          </button>
        ))}
      </div>

      <div style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem', transition: 'all 0.3s' }}>
        <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0', fontSize: '1.2rem' }}>
          <i className={`fas ${docData[activeDoc].icon}`} style={{ marginRight: '8px' }}></i> 
          {docData[activeDoc].title}
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          {docData[activeDoc].desc}
        </p>
        
        <div style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', background: 'var(--border-color)', position: 'relative' }}>
          <iframe 
            src={docData[activeDoc].embedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }} 
            title={docData[activeDoc].title}
          ></iframe>
        </div>
      </div>


      {/* =========================================================
          BAGIAN 2: TAB NAVIGASI ANALISIS
          ========================================================= */}
      <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(37, 99, 235, 0.05)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ color: '#2563eb', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 10px 0' }}>Refleksi Pembelajaran</h3>
          <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', margin: '0 0 15px 0' }}>Analisis Artefak Produk</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Refleksi mendalam terhadap proses penyusunan rencana dan perangkat pembelajaran selama program PPG Terbimbing.</p>
        </div>

        <div className="no-scrollbar" style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '2rem' }}>
          {Object.keys(analysisData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveAnalysis(key)}
              style={{
                padding: '10px 20px',
                background: activeAnalysis === key ? '#2563eb' : 'var(--bg-card)',
                color: activeAnalysis === key ? 'white' : 'var(--text-muted)',
                border: `1px solid ${activeAnalysis === key ? '#2563eb' : '#cbd5e1'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                boxShadow: activeAnalysis === key ? '0 4px 10px rgba(37, 99, 235, 0.2)' : 'none'
              }}
            >
              <i className={`fas ${analysisData[key].icon}`}></i> {analysisData[key].title}
            </button>
          ))}
        </div>

        <div style={{ background: 'var(--bg-soft)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', margin: '0 0 8px 0' }}>{analysisData[activeAnalysis].title}</h3>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0' }}>{analysisData[activeAnalysis].desc}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {analysisData[activeAnalysis].cards.map((card) => (
              <div key={card.id} style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', transition: 'transform 0.3s', cursor: 'default' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {card.id}
                  </div>
                  <h4 style={{ color: 'var(--text-main)', margin: 0, fontSize: '1.05rem', fontWeight: '700' }}>{card.title}</h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'justify' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>


      {/* =========================================================
          BAGIAN 3: BUKTI PENILAIAN (GRID DENGAN PRATINJAU MODAL)
          ========================================================= */}
      <h3 style={{ marginTop: '4rem', color: '#2563eb', borderBottom: '2px solid rgba(37, 99, 235, 0.1)', paddingBottom: '10px' }}>
        <i className="fas fa-file-signature"></i> Bukti Penilaian (Lampiran)
      </h3>
      <p style={{ marginBottom: '2rem' }}>
        Sebagai otentikasi evaluasi klinis selama PPL Terbimbing, berikut rekaman penilaian Lampiran 7 dan Lampiran 8 yang terbagi dalam 3 pertemuan pembelajaran. <b>Klik tombol untuk melihat pratinjau dokumen langsung di website.</b>
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {dataPenilaian.map((kategori, index) => (
          <div key={index} style={{ 
            background: 'var(--bg-card)', 
            borderRadius: '20px', 
            border: '1px solid var(--border-color)', 
            boxShadow: '0 4px 20px var(--shadow-color)',
            overflow: 'hidden'
          }}>
            
            {/* Header Lampiran */}
            <div style={{ 
              padding: '1.8rem 2rem', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-soft)',
              display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap'
            }}>
              <div style={{ 
                background: `rgba(${kategori.color === '#2563eb' ? '37, 99, 235' : '16, 185, 129'}, 0.1)`, 
                width: '50px', height: '50px', borderRadius: '12px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
              }}>
                <i className={`fas ${kategori.icon}`} style={{ color: kategori.color, fontSize: '1.4rem' }}></i>
              </div>
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: '0 0 4px 0', color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: '800' }}>
                  {kategori.title}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', textAlign: 'justify' }}>
                  {kategori.desc}
                </p>
              </div>
            </div>

            {/* Grid 3 Pertemuan */}
            <div style={{ padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem' }}>
              {kategori.pertemuan.map((file, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-soft)', border: '1px solid var(--border-color)', borderRadius: '14px',
                  padding: '1.5rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = kategori.color;
                  e.currentTarget.style.boxShadow = `0 8px 20px rgba(${kategori.color === '#2563eb' ? '37, 99, 235' : '16, 185, 129'}, 0.12)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <span style={{ 
                    position: 'absolute', top: '-12px', left: '15px', background: kategori.color, color: 'white', 
                    padding: '4px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.5px'
                  }}>
                    {file.nama}
                  </span>

                  <div style={{ textAlign: 'center', margin: '0.8rem 0 1.2rem 0' }}>
                     <i className="fas fa-file-pdf" style={{ fontSize: '3rem', color: '#ef4444', opacity: 0.85 }}></i>
                  </div>

                  <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
                    <h5 style={{ margin: '0 0 4px 0', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '700', lineHeight: '1.4' }}>
                      {file.topik}
                    </h5>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PDF Document</span>
                  </div>

                  {/* TOMBOL YANG MEMICU MUNCULNYA PRATINJAU MODAL */}
                  <button 
                    onClick={() => setPreviewModal({ title: file.topik, url: file.link })}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', width: '100%', 
                      padding: '10px 0', background: 'var(--bg-card)', 
                      color: 'var(--text-main)', border: '1px solid var(--border-color)', 
                      borderRadius: '10px', fontSize: '0.85rem', fontWeight: '700', cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => { 
                      e.currentTarget.style.background = kategori.color; 
                      e.currentTarget.style.color = 'white'; 
                      e.currentTarget.style.borderColor = kategori.color; 
                    }}
                    onMouseOut={(e) => { 
                      e.currentTarget.style.background = 'var(--bg-card)'; 
                      e.currentTarget.style.color = 'var(--text-main)'; 
                      e.currentTarget.style.borderColor = 'var(--border-color)'; 
                    }}
                  >
                    <i className="fas fa-eye"></i> Lihat Pratinjau
                  </button>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* =========================================================
          POP-UP MODAL UNTUK PRATINJAU FILE (IFRAME)
          ========================================================= */}
      {previewModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px', backdropFilter: 'blur(5px)'
        }}>
          {/* Latar belakang transparan diklik untuk menutup */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} onClick={() => setPreviewModal(null)}></div>
          
          <div style={{
            background: 'var(--bg-card)', width: '100%', maxWidth: '900px', height: '85vh',
            borderRadius: '20px', display: 'flex', flexDirection: 'column', overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', zIndex: 10000,
            animation: 'fadeIn 0.3s ease-out' // Opsional: jika Anda memiliki animasi CSS
          }}>
            
            {/* Header Modal Pratinjau */}
            <div style={{
              padding: '15px 25px', borderBottom: '1px solid var(--border-color)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-soft)'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-file-pdf" style={{ color: '#ef4444' }}></i>
                {previewModal.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <a href={previewModal.url} target="_blank" rel="noopener noreferrer" style={{
                  color: '#2563eb', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px'
                }}>
                  <i className="fas fa-external-link-alt"></i> Buka Layar Penuh
                </a>
                <button onClick={() => setPreviewModal(null)} style={{
                  background: 'transparent', border: 'none', fontSize: '1.8rem', lineHeight: '1', cursor: 'pointer', color: 'var(--text-muted)'
                }}>
                  &times;
                </button>
              </div>
            </div>

            {/* Area Iframe (Pratinjau Asli) */}
            <div style={{ flexGrow: 1, background: '#e2e8f0' }}>
              {/* Jika menggunakan Google Drive, pastikan link diubah menjadi /preview di array dataPenilaian */}
              <iframe 
                src={previewModal.url} 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }} 
                title={previewModal.title}
              ></iframe>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}