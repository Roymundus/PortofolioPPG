// Jika Anda sudah menyiapkan foto di folder assets, hapus tanda komentar pada baris import di bawah ini:
// import foto1 from '../assets/dok-1.jpg';
// import foto2 from '../assets/dok-2.jpg';
// import foto3 from '../assets/dok-3.jpg';

export default function DokumentasiSection() {
  // Data dokumentasi (bisa Anda tambah atau kurangi sesuai kebutuhan)
  const galeri = [
    {
      id: 1,
      kegiatan: "Aktivitas Pendahuluan",
      deskripsi: "Melakukan apersepsi dan menyampaikan tujuan pembelajaran serta memantik fokus peserta didik sebelum masuk ke materi inti.",
      // image: foto1, // Ganti null dengan variabel foto Anda jika sudah di-import
      warna: "#2563eb" // Biru
    },
    {
      id: 2,
      kegiatan: "Diskusi Kelompok (PBL)",
      deskripsi: "Mendampingi peserta didik dalam memecahkan masalah pada Lembar Kerja Peserta Didik (LKPD) secara kolaboratif.",
      // image: foto2,
      warna: "#10b981" // Hijau
    },
    {
      id: 3,
      kegiatan: "Presentasi Hasil Karya",
      deskripsi: "Fasilitasi perwakilan kelompok dalam mempresentasikan hasil diskusi dan analisis pemecahan masalah di depan kelas.",
      // image: foto3,
      warna: "#f59e0b" // Oranye/Kuning
    },
    {
      id: 4,
      kegiatan: "Bimbingan dengan Guru Pamong",
      deskripsi: "Sesi diskusi dan refleksi bersama Guru Pamong setelah pelaksanaan siklus praktik mengajar selesai.",
      // image: foto4,
      warna: "#8b5cf6" // Ungu
    }
  ];

  return (
    <div className="content-card fade-in">
      <h2 className="section-title">
        <i className="fas fa-camera-retro"></i> Dokumentasi Kegiatan
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        Galeri berikut merupakan rekaman visual dari serangkaian aktivitas dan praktik mengajar nyata yang saya laksanakan selama kegiatan PPL Terbimbing di sekolah mitra.
      </p>

      {/* Grid Galeri Foto */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        
        {galeri.map((item) => (
          <div key={item.id} className="feature-box" style={{ padding: '1.2rem', borderTop: `4px solid ${item.warna}`, borderLeft: 'none' }}>
            
            {/* Area Foto */}
            <div style={{ width: '100%', height: '220px', backgroundColor: '#f1f5f9', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.2rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Jika image tersedia, tampilkan fotonya. Jika tidak, tampilkan ikon kamera pengganti */}
              {item.image ? (
                <img src={item.image} alt={item.kegiatan} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ textAlign: 'center', color: '#94a3b8' }}>
                  <i className="fas fa-image" style={{ fontSize: '3rem', marginBottom: '10px' }}></i>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>Foto {item.id} (Belum dimasukkan)</p>
                </div>
              )}
            </div>

            {/* Deskripsi Kegiatan */}
            <h4 style={{ marginBottom: '0.5rem', color: '#1e293b', fontSize: '1.1rem' }}>
              {item.kegiatan}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}