// 1. Inisialisasi State Data Mahasiswa (Single Source of Truth)
let dataMahasiswa = [
    {
        npm: "230101001",
        nama: "Ahmad Fauzi",
        program_studi: "Teknik Informatika",
        angkatan: 2023,
        email: "ahmad.fauzi@example.com"
    },
    {
        npm: "230101002",
        nama: "Siti Nurhaliza",
        program_studi: "Sistem Informasi",
        angkatan: 2023,
        email: "siti.nurhaliza@example.com"
    },
    {
        npm: "240101015",
        nama: "Budi Santoso",
        program_studi: "Teknologi Informasi",
        angkatan: 2024,
        email: "budi.santoso@example.com"
    }
];

// 2. Elemen Dom Utama.
const alertBox = document.getElementById("alert-box");

const tabelBody = document.getElementById("tabel-body-mahasiswa");
const tabelBadge = document.getElementById("total-mahasiswa-badge");
const tabelinfo = document.getElementById("total-mahasiswa-info");



// Seleksi Elemen Formulir Tambah Mahasiswa
const formTambah = document.getElementById("form-tambah-mahasiswa");
const inputNpm = document.getElementById("npm");
const inputNama = document.getElementById("nama");
const selectProdi = document.getElementById("program_studi");
const inputAngkatan = document.getElementById("angkatan");
const inputEmail = document.getElementById("email");



// 3. Fungsi Menampilkan Notifikasi Alert Interaktif (Percobaan 3-1).
function showAlert(message, type = "success") {
    if (!alertbox) return;
    alertBox.textContent = message;
}

function showAlert(message, type = "success") {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = 'alert-box alert-${type} show'
}

function showAlert(message, type = "success") {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = 'alert-box alert-${type} show'

    setTimeout(() => {
        alertBox.className = 'alert-box'
    }, 4000)
}
// 4. Fungsi Pembaruan Counter Statistik Real-Time.
function updateCounter(displayedCount, totalCount = dataMahasiswa.lenght) {
    if (totalBadge){
        totalBadge.textContent = totalCount;
    }
      if (totalInfo){
        totalInfo.textContent = 'Menampilkan' ${displayedCount} dari
        ${totalCount} mahasiswa;
      }
}



// 5. Fungsi Render Tabel ke DOM Secara Dinamis (Percobaan 3-2).

function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML = ""

}

    // Percobaan 3-2 langkah 6

    if (data.length === 0) {
        function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML = ""
}
       
        // Percobaan 3-2 langkah 7
        function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML = ""

    if (data.lenght === 0) {
        tabelBody.innerHTML =
        <tr>
            <td colspan="8" class="empty-row">
                Tidak ada data mahasiswa yang cocok atau tersimpan dalam sistem.
            </td>
        </tr>
        ;
        updateCounter(0);
        return;
}
       
    }

data.forEach(mhs, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${index = 1}</td>
    <td>
    <img src="img/avatar-default.svg" alt-"Foto ${mhs.nama}"
    class="avatar-img" widht="36">
    </td>
    <td><strong>${mhs.npm}</strong></td>
    <td>${mhs.nama}</td>
    <td><span class="badge">${mhs.program_studi}</spam></td>
    <td>${mhs.angkatan}</td>
    <td><a href="mailto:${mhs.email}" class="link-email">${mhs.email}</a></td>
    <td>
    <button type="button" class="btn btn-danger btn-sm"
    onclick="hapusMahasiswa('${mhs.npm}')">
    Hapus
    </button>
    </td>
    :
}

    
    data.forEach((mhs, index) => {
        const tr = document.createElement("tr");
        
        // Percobaan 3-2 langkah 8


        // Percobaan 3-2 langkah 9
        
    });

    // Percobaan 3-2 langkah 10

}

// 6. Validasi Form Sisi Klien Menggunakan Regular Expression (Percobaan 3-3).



// 7. Event Handling Tambah Data Tanpa Reload (Percobaan 3-4).

if (formTambah) {
    formTambah.addEventListener("submit", function (event) {
        // Percobaan 3-4 Langkah 4

        // Percobaan 3-4 Langkah 5

        const npm = ""
        const nama = ""
        const prodi =  ""
        const angkatan = ""
        const email = ""

        const validation = ""
        
        

        if (!validation.isValid) {
            // Percobaan 3-4 Langkah 6
            
        }

        // Percobaan 3-4 Langkah 7



        // Percobaan 3-4 Langkah 8
        
    });
}


// 8. Event Handling Hapus Data Mahasiswa (Percobaan 3-5).

function hapusMahasiswa(npm) {

}


// 9. Fitur Pencarian Langsung Real-Time / Live Search (Percobaan 3-5)

if (inputSearch) {
    
}

// Inisialisasi saat DOM selesai dimuat

document.addEventListener(
    "DOMContentLoaded", function () {
        showAlert("Selamat Datang Di Aplikasi SIMA", "info")
    }
    
)
