import { useState } from 'react';

export default function ArtefakSection() {
  // 1. State untuk navigasi Tab Dokumen Pembelajaran
  const [activeDoc, setActiveDoc] = useState('asesmen');
  
  // 2. State untuk navigasi Tab Analisis
  const [activeAnalysis, setActiveAnalysis] = useState('kendala');

  // Data Konten Dokumen Pembelajaran
  const docData = {
    asesmen: {
      title: 'Asesmen Diagnostik',
      desc: 'Instrumen awal pemetaan kemampuan kognitif dan gaya belajar siswa sebelum materi dirancang.',
      icon: 'fa-clipboard-check',
      embedUrl: 'https://drive.google.com/file/d/1BLVxE0hpquFV9FN-6jbAE2g7MuRVn7Zs/preview'
    },
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
    lkm: {
      title: 'LKM - Lembar Kerja Murid',
      desc: 'Lembar Kerja Murid digital memandu kolaborasi dan memecahkan masalah.',
      icon: 'fa-laptop-code',
      embedUrl: 'https://drive.google.com/drive/folders/1MXiMQ6eTFJVTm6O-nVv9nx5FKQIRfXk4?usp=drive_link'
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

  return (
    <div className="content-card fade-in">
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

      {/* Tombol Tab Dokumen (Tema Terang) */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '1.5rem' }}>
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
              boxShadow: activeDoc === key ? '0 4px 10px rgba(37, 99, 235, 0.2)' : 'none'
            }}
          >
            <i className={`fas ${docData[key].icon}`}></i> {docData[key].title}
          </button>
        ))}
      </div>

      {/* Area Tampil Dokumen (Iframe Viewer) */}
      <div style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem', transition: 'all 0.3s' }}>
        <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0', fontSize: '1.2rem' }}>
          <i className={`fas ${docData[activeDoc].icon}`} style={{ marginRight: '8px' }}></i> 
          {docData[activeDoc].title}
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          {docData[activeDoc].desc}
        </p>
        
        {/* Penampil Dokumen PDF */}
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
          BAGIAN 2: TAB NAVIGASI ANALISIS (TEMA TERANG / CLEAN)
          ========================================================= */}
      <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(37, 99, 235, 0.05)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ color: '#2563eb', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 10px 0' }}>Refleksi Pembelajaran</h3>
          <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', margin: '0 0 15px 0' }}>Analisis Artefak Produk</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Refleksi mendalam terhadap proses penyusunan rencana dan perangkat pembelajaran selama program PPG Terbimbing.</p>
        </div>

        {/* Tombol Tab Analisis (Tema Terang) */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '2rem', justifyContent: 'center' }}>
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
                boxShadow: activeAnalysis === key ? '0 4px 10px rgba(37, 99, 235, 0.2)' : 'none'
              }}
            >
              <i className={`fas ${analysisData[key].icon}`}></i> {analysisData[key].title}
            </button>
          ))}
        </div>

        {/* Konten Tab Analisis (Background Biru Sangat Pucat / Soft Gray) */}
        <div style={{ background: 'var(--bg-soft)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', margin: '0 0 8px 0' }}>{analysisData[activeAnalysis].title}</h3>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem 0' }}>{analysisData[activeAnalysis].desc}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {analysisData[activeAnalysis].cards.map((card) => (
              <div key={card.id} style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', transition: 'transform 0.3s', cursor: 'default' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  {/* Lingkaran nomor dengan warna biru */}
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {card.id}
                  </div>
                  <h4 style={{ color: 'var(--text-main)', margin: 0, fontSize: '1.05rem' }}>{card.title}</h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================
          BAGIAN 3: BUKTI PENILAIAN (LAMPIRAN)
          ========================================================= */}
      <h3 style={{ marginTop: '4rem', color: '#2563eb', borderBottom: '2px solid rgba(37, 99, 235, 0.1)', paddingBottom: '10px' }}>
        <i className="fas fa-file-signature"></i> Bukti Penilaian (Lampiran)
      </h3>
      <p>
        Sebagai otentikasi dari proses evaluasi selama PPL Terbimbing, berikut adalah lampiran hasil penilaian dari Guru Pamong dan Dosen Pembimbing Lapangan (DPL):
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <iframe src="https://drive.google.com/file/d/GANTI_DENGAN_ID_FILE_ANDA/preview" width="100%" height="100%" style={{ border: 'none' }} title="Lampiran 7"></iframe>
          <div style={{ textAlign: 'center', padding: '10px', background: 'var(--bg-soft)', fontSize: '0.85rem', fontWeight: 'bold', borderTop: '1px solid var(--border-color)' }}>Lampiran 7 (Perangkat)</div>
        </div>
        <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <iframe src="https://drive.google.com/file/d/GANTI_DENGAN_ID_FILE_ANDA/preview" width="100%" height="100%" style={{ border: 'none' }} title="Lampiran 8 Siklus 1"></iframe>
          <div style={{ textAlign: 'center', padding: '10px', background: 'var(--bg-soft)', fontSize: '0.85rem', fontWeight: 'bold', borderTop: '1px solid var(--border-color)' }}>Lampiran 8 (Siklus 1)</div>
        </div>
        <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <iframe src="https://drive.google.com/file/d/GANTI_DENGAN_ID_FILE_ANDA/preview" width="100%" height="100%" style={{ border: 'none' }} title="Lampiran 8 Siklus 2 & 3"></iframe>
          <div style={{ textAlign: 'center', padding: '10px', background: 'var(--bg-soft)', fontSize: '0.85rem', fontWeight: 'bold', borderTop: '1px solid var(--border-color)' }}>Lampiran 8 (Siklus 2 & 3)</div>
        </div>
      </div>

    </div>
  );
}


