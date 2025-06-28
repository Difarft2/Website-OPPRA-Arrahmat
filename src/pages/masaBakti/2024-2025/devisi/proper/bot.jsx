import React from "react";
import "../css/css/programkerja.css"; 

const data = {
  harian: [
    {
      program: "Apel Pagi",
      sasaran: "Seluruh santri",
      target: "Untuk menjadikan santri lebih disiplin",
      waktu: "Setiap pagi",
      penanggungJawab: "Bela Negara",
    },
    {
      program: "Dokumentasi Event",
      sasaran: "Seluruh santri",
      target: "Mengabadikan momen event",
      waktu: "Setiap ada event",
      penanggungJawab: "Multimedia",
    },
  ],
  mingguan: [
    {
      program: "Latihan Upacara Bendera",
      sasaran: "Seluruh santri",
      target: "Dapat memimpin upacara dengan baik",
      waktu: "Sehari sebelum upacara",
      penanggungJawab: "Bela Negara",
    },
    {
      program: "Upacara Bendera",
      sasaran: "Seluruh santri",
      target: "Terciptanya kedisiplinan dan nasionalisme",
      waktu: "Setiap hari Senin",
      penanggungJawab: "Bela Negara",
    },
    {
      program: "Menjaga dan Merawat Fasilitas Olahraga",
      sasaran: "Fasilitas olahraga di pondok",
      target: "Barang aman tanpa kerusakan/kehilangan",
      waktu: "Setiap minggu",
      penanggungJawab: "Olahraga",
    },
    {
      program: "Mengaktifkan Ekstrakulikuler Baru",
      sasaran: "Seluruh santri",
      target: "Santri mengembangkan bakatnya",
      waktu: "Terjadwal tiap minggu",
      penanggungJawab: "Olahraga",
    },
    {
      program: "Membuat Poster Event",
      sasaran: "Seluruh santri",
      target: "Santri tahu event OPPRA",
      waktu: "Kondisional",
      penanggungJawab: "Multimedia",
    },
    {
      program: "Pengecekan Fasilitas Elektronik",
      sasaran: "Fasilitas elektronik pondok",
      target: "Fasilitas selengkap mungkin",
      waktu: "Setiap minggu",
      penanggungJawab: "Multimedia dan Teknologi",
    },
    {
      program: "Persiapan Sebelum Upacara",
      sasaran: "Petugas dan alat upacara",
      target: "Kondisi optimal saat upacara",
      waktu: "Sebelum upacara",
      penanggungJawab: "Bela Negara",
    },
  ],
  bulanan: [
    {
      program: "Latihan Sparing Sekolah Lain",
      sasaran: "Santri ekstrakulikuler olahraga",
      target: "Mental santri siap bersaing",
      waktu: "Setiap bulan",
      penanggungJawab: "Olahraga",
    },
    {
      program: "Susunan Petugas Upacara per Kelas",
      sasaran: "Seluruh santri",
      target: "Semua berpengalaman upacara",
      waktu: "Setiap bulan",
      penanggungJawab: "Bela Negara",
    },
  ],
  tahunan: [
    {
      program: "Liga Ar-Rahmat",
      sasaran: "Seluruh santri",
      target: "Mental suportif & latihan liga",
      waktu: "Setahun sekali semester 1",
      penanggungJawab: "Olahraga dan Multimedia",
    },
    {
      program: "Upacara Kemerdekaan",
      sasaran: "Seluruh santri",
      target: "Kenang jasa pahlawan",
      waktu: "17 Agustus",
      penanggungJawab: "Bela Negara dan Multimedia",
    },
    {
      program: "Lomba 17 Agustusan",
      sasaran: "Seluruh santri",
      target: "Santri semangat saat luang",
      waktu: "17 Agustus",
      penanggungJawab: "Olahraga",
    },
    {
      program: "Classmeeting 2024/2025",
      sasaran: "Seluruh santri",
      target: "Santri tidak malas saat luang",
      waktu: "Setelah ujian akhir semester",
      penanggungJawab: "Olahraga",
    },
    {
      program: "Classmeeting Akhir Tahun",
      sasaran: "Seluruh santri",
      target: "Santri tidak bosan saat luang",
      waktu: "Setelah ujian akhir semester",
      penanggungJawab: "Olahraga",
    },
  ],
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
            <th>Program</th>
            <th>Sasaran</th>
            <th>Target</th>
            <th>Waktu</th>
            <th>Penanggung Jawab</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td><strong>{item.program}</strong></td>
              <td>{item.sasaran}</td>
              <td>{item.target}</td>
              <td>{item.waktu}</td>
              <td><span className="badge bg-success">{item.penanggungJawab}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProgramKerjaBOT = () => {
  return (
    <div className="programkerja-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 title-programkerja">
          Program Kerja Divisi B.O.T
        </h2>
        <TableProgram title="A. Program Harian" items={data.harian} />
        <TableProgram title="B. Program Mingguan" items={data.mingguan} />
        <TableProgram title="C. Program Bulanan" items={data.bulanan} />
        <TableProgram title="D. Program Tahunan" items={data.tahunan} />
      </div>
    </div>
  );
};


export default ProgramKerjaBOT;
