export default function RefleksiSection() {
  return (
    <div className="content-card">
      <h2 className="section-title"><i className="fas fa-chalkboard-teacher"></i> Refleksi & Model Guru</h2>
      
      <p>Filosofi saya berakar pada keyakinan bahwa pendidikan harus berpusat pada peserta didik (<em>student-centered learning</em>). Saya memposisikan diri bukan sebagai satu-satunya sumber kebenaran, melainkan sebagai fasilitator yang membantu siswa menemukan pola dan membangun pengetahuan mereka.</p>

      <div className="grid-2" style={{marginTop: '2rem'}}>
        <div className="feature-box" style={{borderLeftColor: '#10b981'}}>
          <h4><i className="fas fa-arrow-up" style={{color: '#10b981'}}></i> Kekuatan (Strengths)</h4>
          <p>Penguasaan materi dan kemampuan merancang media pembelajaran berbasis teknologi yang interaktif. Mampu membangun kedekatan emosional (rapport) yang baik, sehingga kelas terasa aman dan inklusif.</p>
        </div>
        <div className="feature-box" style={{borderLeftColor: '#ef4444'}}>
          <h4><i className="fas fa-arrow-down" style={{color: '#ef4444'}}></i> Kelemahan (Weaknesses)</h4>
          <p>Manajemen waktu saat memfasilitasi diskusi kelompok masih perlu diperbaiki, serta implementasi pembelajaran berdiferensiasi yang belum maksimal untuk menangani siswa dengan gaya belajar kontras.</p>
        </div>
      </div>

      <h2 className="section-title" style={{marginTop: '3.5rem'}}><i className="fas fa-seedling"></i> Rencana Tindak Lanjut (RTL)</h2>
      <div className="feature-box" style={{borderLeftColor: '#2563eb', background: 'rgba(37, 99, 235, 0.03)'}}>
        <p style={{marginBottom: '15px', fontWeight: '600'}}>Sebagai komitmen untuk terus bertumbuh, langkah konkret saya pasca-PPL ini adalah:</p>
        <ul style={{marginLeft: '20px', lineHeight: '1.8'}}>
          <li>Mengkaji lebih dalam teknik diferensiasi konten dan proses, agar RPP lebih ramah bagi seluruh tingkatan kognitif siswa.</li>
          <li>Mengikuti pelatihan terkait manajemen kelas untuk mengefektifkan transisi antar-kegiatan pembelajaran.</li>
          <li>Meningkatkan kolaborasi dengan rekan sejawat melalui kegiatan refleksi rutin (<em>Lesson Study</em>).</li>
        </ul>
      </div>
    </div>
  );
}