export default function ObservasiSection() {
  return (
    <div className="content-card fade-in">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ justifyContent: 'center', borderBottom: 'none', marginBottom: '0.5rem' }}>
          <i className="fas fa-school"></i> Observasi Sekolah Mitra
        </h2>
        <p style={{ color: 'var(--text-muted', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Laporan hasil orientasi dan observasi manajemen serta lingkungan belajar selama pelaksanaan PPL Terbimbing di SMK Negeri 2 Yogyakarta.
        </p>
      </div>

      {/* Bagian 1: Identitas & Visi Misi */}
      <div style={{ background: 'var(--bg-soft)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '2.5rem' }}>
        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i className="fas fa-flag"></i> Visi dan Karakter Budaya Sekolah
        </h3>
        <p>
          SMK Negeri 2 Yogyakarta memiliki visi utama yaitu "Menghasilkan Tamatan yang Berkarakter, Unggul, Berwawasan Lingkungan, dan Berdaya Saing Global". Visi ini diterjemahkan melalui program strategis yang tidak hanya berfokus pada akademik, tetapi juga pembentukan karakter, wawasan lingkungan, dan daya saing global.
        </p>
        <p>
          Dalam kesehariannya, sekolah sangat kuat dalam membentuk kedisiplinan dan budaya kerja industri. Hal ini didukung oleh beberapa penerapan nyata:
        </p>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          <li>Penerapan budaya 5S (Senyum, Sapa, Salam, Sopan, Santun) dalam interaksi sehari-hari.</li>
          <li>Pembiasaan budaya 7K dan 5R (Ringkas, Rapi, Resik, Rawat, Rajin) untuk menanamkan mentalitas profesional.</li>
          <li>Pelaksanaan program Leadership Karakter pada setiap awal dan akhir pembelajaran untuk menginternalisasi standar DUDI (Dunia Usaha dan Dunia Industri).</li>
          <li>Penerapan sistem disiplin positif menggunakan Buku Pedoman Karakter Murid, di mana sekolah mengutamakan sistem "Remisi" (pengurangan poin pelanggaran) bagi siswa berprestasi alih-alih memberikan hukuman fisik.</li>
        </ul>
      </div>

      {/* Bagian 2: Grid Manajemen (Kurikulum, Kesiswaan, Sarpras, SDM) */}
      <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px' }}>
        <i className="fas fa-tasks"></i> Hasil Observasi Manajemen Sekolah
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Manajemen Kurikulum */}
        <div className="feature-box" style={{ borderTop: '4px solid #3b82f6', borderLeft: 'none' }}>
          <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}><i className="fas fa-book"></i> Manajemen Kurikulum</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            Sekolah menggunakan Kurikulum Merdeka yang disesuaikan dengan kebutuhan satuan pendidikan, yang dikenal dengan sebutan "Kurikulum Selaras". Penyusunan modul ajar dan RPP dilakukan secara kolaboratif oleh guru-guru di masing-masing jurusan. Selain itu, sekolah mengintegrasikan konsep <em>teaching factory</em> dan pembelajaran berbasis TIK/ICT untuk menyesuaikan dengan kebutuhan industri modern.
          </p>
        </div>

        {/* Manajemen Kesiswaan */}
        <div className="feature-box" style={{ borderTop: '4px solid #10b981', borderLeft: 'none' }}>
          <h4 style={{ color: '#10b981', marginBottom: '10px' }}><i className="fas fa-users"></i> Manajemen Kesiswaan</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            Terdapat pergeseran peran Bimbingan Konseling yang sangat positif melalui sistem "Wali BK". Guru BK tidak lagi berperan sekadar sebagai aparat penegak disiplin, melainkan sebagai mitra pertumbuhan yang memberikan pendampingan khusus dan kontinu kepada peserta didik. Sekolah juga memberdayakan partisipasi siswa dengan melibatkan OSIS dalam evaluasi kualitas layanan sekolah melalui angket kepuasan.
          </p>
        </div>

        {/* Manajemen Sarana & Prasarana */}
        <div className="feature-box" style={{ borderTop: '4px solid #f59e0b', borderLeft: 'none' }}>
          <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}><i className="fas fa-building"></i> Sarana & Prasarana</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            Terdapat pemisahan yang jelas antara ruang teori dan ruang praktik. Fasilitas pendukung sangat lengkap, meliputi perpustakaan digital (SAS), laboratorium jurusan, dan bengkel. Salah satu tantangan unik adalah adanya gedung Blok A yang berstatus cagar budaya, sehingga proses perbaikan fisik sangat birokratis dan tidak boleh mengubah bentuk aslinya.
          </p>
        </div>

        {/* Manajemen SDM & Anggaran */}
        <div className="feature-box" style={{ borderTop: '4px solid #8b5cf6', borderLeft: 'none' }}>
          <h4 style={{ color: '#8b5cf6', marginBottom: '10px' }}><i className="fas fa-user-tie"></i> SDM & Anggaran</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            Manajemen SDM mengedepankan pendekatan humanis berbasis motivasi dan <em>coaching</em> dalam mendisiplinkan staf. Pengembangan kompetensi guru didorong secara mandiri melalui website Ruang GTK. Dari sisi keuangan, anggaran sekolah dikelola secara transparan dan akuntabel dengan sumber dana utama dari BOSNAS, BOSKIN, APBD, Komite, dan BLUD.
          </p>
        </div>
      </div>

      {/* Bagian 3: Lingkungan Belajar (Informatika Context) */}
      <div style={{ background: 'var(--bg-soft)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i className="fas fa-leaf"></i> Lingkungan Sosial & Akademik
        </h3>
        <p style={{ color: 'var(--text-main)' }}>
          Interaksi antara guru dan siswa terjalin dengan baik melalui pendekatan yang humanis, di mana guru tidak hanya mengajar tetapi juga membimbing. Lingkungan akademik sangat mendukung kolaborasi dan inovasi. Sebagai pengajar Informatika, integrasi sistem informasi sekolah seperti Learning Management System (LMS), E-Library, dan Dapodik telah dimanfaatkan secara terpusat untuk mendukung pengelolaan data dan pembelajaran yang modern.
        </p>
      </div>

    </div>
  );
}