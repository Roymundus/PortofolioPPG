function showSection(event, sectionId) {
    // Sembunyikan semua section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Hapus status active dari semua link navigasi
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');
    
    // Tambahkan status active pada link yang diklik
    event.currentTarget.classList.add('active');
    
    // Scroll otomatis ke atas
    window.scrollTo(0, 0);
}