import React from "react";
import "../css/css/programkerja.css"; 

const dataPH = [
  {
    program: "Berkordinasi dan berkonsultasi dengan pembimbing, ustaz, dan pengasuhan",
    proses: "Melaporkan, meminta kritik dan saran untuk menangani permasalahan di pondok pesantren",
    sasaran: "Permasalahan santri yang penting dan darurat",
    target: "Pembimbing, Kepondokan, Ustaz memberi solusi dan saran",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Mengadakan rapat mingguan",
    proses: "Evaluasi, kritik dan saran kegiatan mingguan",
    sasaran: "Pengurus harian dan seluruh anggota OPPRA",
    target: "Terpecahnya masalah dan solusi program ke depan",
    waktu: "1 minggu sekali / kondisi darurat",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Mengadakan rapat bulanan",
    proses: "Raker, LPJ, rapat divisi, rapat gabungan",
    sasaran: "Seluruh divisi dan pembimbing",
    target: "Terlaporkannya kinerja dan anggaran divisi",
    waktu: "1 bulan sekali / setelah program / kondisi darurat",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Mengkoordinir seluruh divisi",
    proses: "Memantau dan mengarahkan",
    sasaran: "Seluruh anggota divisi",
    target: "Program kerja berjalan optimal dan aman",
    waktu: "Setiap hari",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Evaluasi rutinan",
    proses: "Mengevaluasi dan memberi kritik & saran",
    sasaran: "Seluruh anggota OPPRA",
    target: "Anggota lebih bersungguh-sungguh jalankan program",
    waktu: "Rutin setiap hari",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Mengatur kebijakan umum organisasi",
    proses: "Mengelola saran dan kritik anggota",
    sasaran: "Seluruh anggota OPPRA",
    target: "Kebijakan diterima seluruh anggota",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Menjaga kerja sama dengan organisasi lain",
    proses: "Membangun relasi dan kontribusi organisasi",
    sasaran: "Organisasi internal dan eksternal",
    target: "Terbangunnya relasi antar organisasi",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Mengadakan Masa Ta'aruf Santri",
    proses: "Mengenalkan lingkungan pondok kepada santri baru",
    sasaran: "Santri baru",
    target: "Santri beradaptasi dan membangun relasi",
    waktu: "Awal tahun ajaran",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Mengelola tugas-tugas kesekretariatan",
    proses: "Menyiapkan keperluan OPPRA",
    sasaran: "Program kerja",
    target: "Terciptanya program kerja yang optimal",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Membuat pembukuan & dokumentasi OPPRA",
    proses: "Membuat proposal & laporan pertanggungjawaban",
    sasaran: "Setiap agenda OPPRA",
    target: "Tercapainya agenda yang terencana",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Menyusun rencana kerja ke depan",
    proses: "Diskusi perencanaan program ke depan",
    sasaran: "Pengurus Harian",
    target: "Terbentuknya rencana kerja implementatif",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Bertanggung jawab atas keuangan OPPRA",
    proses: "Mencatat pengeluaran, pemasukan, saldo terbaru",
    sasaran: "Bendahara",
    target: "Tersusunnya laporan keuangan yang rapi",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Menggalang tabungan OPPRA",
    proses: "Koordinasi kas dari anggota kepada bendahara",
    sasaran: "Seluruh anggota OPPRA",
    target: "Menambah pemasukan organisasi",
    waktu: "1 minggu sekali / kondisi darurat",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Mengkoordinir pengeluaran dana",
    proses: "Meminimalisir pengeluaran dana",
    sasaran: "Pendanaan",
    target: "Dana proporsional, hasil kegiatan maksimal",
    waktu: "Kondisional",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Membuat perencanaan keuangan",
    proses: "Merancang proposal keuangan kegiatan",
    sasaran: "Keuangan",
    target: "Diterima & dikelola oleh OPPRA",
    waktu: "Setiap ada kegiatan",
    penanggungJawab: "Pengurus Harian",
  },
  {
    program: "Bertanggung jawab terhadap LPJ",
    proses: "Membuat Laporan Pertanggungjawaban akhir jabatan",
    sasaran: "Program kerja yang dilaksanakan",
    target: "LPJ akurat & dapat dipertanggungjawabkan",
    waktu: "Akhir jabatan",
    penanggungJawab: "Pengurus Harian",
  },
];

const ProgramKerjaPH = () => {
  return (
    <div className="programkerja-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 title-programkerja">
          Program Kerja Divisi Daily Manager
        </h2>
        <div className="table-responsive card shadow-sm fade-slide p-3">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>No</th>
                <th>Program Kerja</th>
                <th>Proses</th>
                <th>Sasaran</th>
                <th>Target</th>
                <th>Waktu</th>
                <th>Penanggung Jawab</th>
              </tr>
            </thead>
            <tbody>
              {dataPH.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td className="text-start">{item.program}</td>
                  <td className="text-start">{item.proses}</td>
                  <td className="text-start">{item.sasaran}</td>
                  <td className="text-start">{item.target}</td>
                  <td>{item.waktu}</td>
                  <td>
                    <span className="badge bg-success">{item.penanggungJawab}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramKerjaPH;
