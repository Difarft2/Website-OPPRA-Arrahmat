import React from "react";
import "../css/css/programkerja.css"; 

const data = {
  harian: [
    { program: "Panggilan Pengingat Sholat Tahajjud", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "03.50" },
    { program: "Panggilan Pengingat Sholat Dhuha, Mandi dan Sarapan", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "06.00" },
    { program: "Memimpin Dzikir Dhuha", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "06.50" },
    { program: "Pengumuman Kelas Kotor", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "06.55" },
    { program: "Pembacaan Doa Saat Apel", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "07.00" },
    { program: "Panggilan Pengingat Sholat Ashar", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "14.40" },
    { program: "Membunyikan Bel Sore", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "16.40" },
    { program: "Pembacaan Doa Malam", sasaran: "Seluruh Keluarga Besar Pondok", pj: "Rafif Ibrahim", waktu: "Ba’da Isya" },
    { program: "Pengumuman Asrama Kotor", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "Ba’da Isya" },
    { program: "Panggilan Pengingat Sholat Isya’", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "18.30" },
    { program: "Membunyikan Bel Malam", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "22.00" },
    { program: "Mematikan Alat Elektronik Yang Masih Menyala di Lingkungan Pondok", sasaran: "Area Pondok", pj: "Rafif Ibrahim", waktu: "22.10" },
    { program: "Pengumuman Barang Hilang", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "-" },
    { program: "Menyediakan Papan Untuk Barang Kiriman Para Santri", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "Hari Pengiriman" },
    { program: "Memanggil Para Santri Yang Belum Mengambil Barang Kirimannya", sasaran: "Seluruh Santri", pj: "Rafif Ibrahim", waktu: "Hari Pengiriman Pukul 22.00" },
  ],
  mingguan: [
    { program: "Art News", sasaran: "Seluruh Santri", pj: "M. Nur Rhozyqin", waktu: "2 Minggu Sekali" },
  ],
  bulanan: [
    { program: "Panggilan Santri Saat Perpulangan", sasaran: "Seluruh Santri", pj: "Revan Joharil & Nazar Faruqi", waktu: "4 Bulan Sekali" },
  ],
  tahunan: [
    { program: "Art Times", sasaran: "Seluruh Santri", pj: "Revan Joharil", waktu: "Akhir Tahun Ajaran" },
    { program: "OSCAR", sasaran: "Santri SMP", pj: "Rafif Ibrahim & Andhika Putra", waktu: "Akhir Tahun Ajaran" },
    { program: "Sosialisasi Tata Cara Pemanggilan Santri", sasaran: "Santri SMP", pj: "Rafif Ibrahim", waktu: "Awal Tahun Ajaran" },
    { program: "Mengadakan Minigames Akhir Tahun", sasaran: "Seluruh Santri", pj: "Giovanov Dia Putra", waktu: "Akhir Tahun Ajaran" },
  ]
};

const TableProgram = ({ title, items }) => (
  <div className="card shadow-sm mb-4 fade-slide">
    <div className="card-header bg-primary text-white">
      <h5 className="mb-0">{title}</h5>
    </div>
    <div className="card-body table-responsive">
      <table className="table table-bordered align-middle text-center">
        <thead className="table-light">
          <tr>
            <th>No</th>
            <th>Program Kerja</th>
            <th>Sasaran</th>
            <th>Penanggung Jawab</th>
            <th>Pelaksanaan</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.program}</td>
              <td>{item.sasaran}</td>
              <td><span className="badge bg-success">{item.pj}</span></td>
              <td>{item.waktu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProgramKerjaPemanggilan = () => {
  return (
    <div className="programkerja-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 title-programkerja">Program Kerja I'lam </h2>
        <TableProgram title="A. Program Harian" items={data.harian} />
        <TableProgram title="B. Program Mingguan" items={data.mingguan} />
        <TableProgram title="C. Program Bulanan" items={data.bulanan} />
        <TableProgram title="D. Program Tahunan" items={data.tahunan} />
      </div>
    </div>
  );
};

export default ProgramKerjaPemanggilan;
