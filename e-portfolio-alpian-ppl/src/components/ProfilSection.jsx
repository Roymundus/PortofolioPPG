import avatarImage from '../assets/avatar.jpg';
import bgHero from '../assets/bghero.png'; 

export default function ProfilSection() {
  return (
    <div className="fade-in">
      
      <div 
        className="hero"
        style={{
          // Lapisan biru dibuat sedikit lebih pekat (0.88) agar background ramai lebih tenang
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.88), rgba(37, 99, 235, 0.88)), url(${bgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="hero-img" 
          style={{ 
            padding: 0, 
            overflow: 'hidden',
            // Menambahkan border putih dan bayangan agar foto profil lebih menonjol
            border: '4px solid #ffffff',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          <img 
            src={avatarImage} 
            alt="Foto Profil Alpian" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Menambahkan text-shadow agar tulisan tidak bertabrakan dengan background */}
        <h1 style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }}>
          Alpian Roymundus Siringo-ringo
        </h1>
        <p style={{ textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)', fontWeight: '400' }}>
          Mahasiswa PPG Prajabatan | Universitas Negeri Yogyakarta
        </p>
      </div>

      <div className="content-card">
        <h2 className="section-title"><i className="fas fa-map-marker-alt"></i> Asal & Identitas</h2>
        <p>Halo, selamat datang di E-Portfolio saya. Perkenalkan, saya <strong>Alpian Roymundus Siringo-Ringo.</strong> 
        Saya lahir dan tumbuh besar di <strong>Provinsi Bengkulu</strong>, sebuah daerah di pesisir barat Sumatera yang sarat akan nilai sejarah dan pesona alam yang memukau, seperti puspa langka <i>Rafflesia Arnoldi</i>. Menghabiskan masa kecil hingga menyelesaikan pendidikan SMA di Bengkulu telah menanamkan karakter tangguh, mandiri, dan apresiasi yang mendala terhadap keberagaman di dalam diri saya.
        </p> 
        <p>Perjalanan akademis kemudian membawa saya merantau melintasi pulau menuju  
            <strong> Kota Balikpapan</strong> untuk menempuh pendidikan S1 pada program studi Informatika di <a href="https://www.itk.ac.id" target="_blank" rel="noopener noreferrer">Institut Teknologi Kalimantan (ITK)</a>. Pengalaman hidup merantau, beradaptasi dengan lingkungan baru, serta berinteraksi di kota yang dinmis dengan geliat industrinya, sangat memperluas cara pandang saya.
            Hal ini membekali saya dengan kemampuan adaptasi dan pemahaman empati terhadap karakter individu yang majemuk-sebuah bekal sosial yang berharga dalam mengelola dinamika peserta didik di ruang kelas.
        </p>
        <h2 className="section-title" style={{marginTop: '2.5rem'}}><i className="fas fa-compass"></i> Inspirasi & Tujuan</h2>
        <p>
            Ketertarikan saya untuk terjun ke dunia pendidikan bermula dari latar belakang keilmuan Informatika tersebut, yang diperkuat oleh pengalaman berharga saat dipercaya mendampingi rekan-rekan mahasiswa sebagai asisten praktikum. Pengalaman itu menyadarkan saya bahwa pendidikan adalah fondasi sejati dari segala kemajuan teknologi.
        </p>
        <p>Saat ini, saya tengah mendedikasikan diri dengan menempuh Pendidikan Profesi Guru (PPG) Prajabatan di <a href="https://uny.ac.id/" target="_blank" rel="noopener noreferrer">Universitas Negeri Yogyakarta (UNY)</a>. Tujuan utama saya adalah menjadi pendidik profesional yang tidak sekadar mentransfer pengetahuan, melainkan mampu mengintegrasikan pemikiran komputasional (computational thinking) dan pendekatan saintifik secara humanis. Saya bertekad untuk merancang ekosistem belajar yang bermakna—tempat di mana siswa merasa aman untuk mengeksplorasi ide, melakukan kesalahan, belajar dari proses, dan pada akhirnya tangguh dalam memecahkan masalah di dunia nyata.
           </p>
        <div className="quote-modern">
          "Pendidikan bukanlah proses mengisi wadah yang kosong, melainkan proses menyalakan api pikiran."
          <span style={{fontSize: '0.9rem', color: '#64748b', display: 'block', marginTop: '15px', fontStyle: 'normal'}}>
            — Landasan pendekatan konstruktivisme saya.
          </span>
        </div>
      </div>
    </div>
  );
}