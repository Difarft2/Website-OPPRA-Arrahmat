import React from "react";
import "../css/css/programkerja.css"; 

const data = {
  harian: [
    {
      program: "Pemberian kosakata 3 bahasa (inggris, Indonesia, arab)",
      sasaran: "Memberikan mufradat 3 bahasa kepada santri. Mufradat yang sudah ditulis wajib disetorkan ke divisi kebahasaan.",
      target: "Memungkinkan pemahaman tentang konsep tiga bahasa yang berbeda, membantu santri untuk belajar dan menguasai kosa kata dasar.",
      waktu: "Jam 21.00",
      penanggungJawab: "Divisi kebahasaan",
    },
    {
      program: "Penertiban Belajar Malam",
      sasaran: "Mengawasi dan menertibkan kegiatan belajar malam santri di kelas masing-masing. ",
      target: "Membantu dalam menciptakan rutinitas yang konsisten dan disiplin dalam menjalankan waktu belajar di malam hari. Ini membantu individu untuk tetap fokus dan teratur dalam menyelesaikan tugas-tugas mereka.",
      waktu: "Setelah diniyah malam",
      penanggungJawab: "Divisi kebahasaan",
    },
  ],
  mingguan: [
    {
      program: "Mengawasi dan Menertibkan Kegiatan Muhadharah",
      sasaran: "Mengawasi dan menertibkan kegiatan muhadharah untuk santri SMP di kelas masing-masing oleh divisi kebahasaan.",
      target: "Dengan pengawasan yang baik, acara muhadharah dapat dijalankan sesuai dengan jadwal yang telah ditentukan dan dengan keteraturan yang diharapkan. Peserta muhadharah diharapkan menyimak pembicara. ",
      waktu: "Hari rabu setelah sholat Isya’",
      penanggungJawab: "Divisi kebahasaan",
    },
    {
      program: "Pengecekan Catatan Mufradat",
      sasaran: "Mengecek catatan mufradat santri untuk memastikan cacatan sesuai dengan mufradat yang diberkan dan memperbaiki kesalahan dalam mencatat mufradat.",
      target: "Mengidentifikasi dan memperbaiki kesalahan yang mungkin terjadi dalam pencatatan kata-kata dalam mufradat.",
      waktu: "Hari rabu malam setelah muhadharah",
      penanggungJawab: "Divisi kebahasaan",
    },
  ],
  bulanan: [
    {
      program: "Ulangan Mufradat",
      sasaran: "Memberikan ulangan mufradat kepada santri SMP sesuai dengan mufradat yang telah diberikan.",
      target: "Ulangan kosakata memberikan alat ukur untuk mengevaluasi seberapa jauh kemajuan siswa dalam mempelajari bahasa tersebut.",
      waktu: "2 minggu sekali",
      penanggungJawab: "Divisi kebahasaan",
    },
  ],
  tahunan: [
    {
      program: "OSCAR (Olimpiade Science Ar-Rahmat)",
      sasaran: "Mengadakan OSCAR untuk santri SMP yang terdiri dari 9 mapel.",
      target: "Mendorong siswa untuk lebih tertarik dan termotivasi dalam mempelajari ilmu pengetahuan dan teknologi melalui kompetisi yang menantang dan menarik.",
      waktu: "-",
      penanggungJawab: "Divisi kebahasaan dan divisi I’lan",
    },
    {
      program: "(Muharram Festival 2024)",
      sasaran: "Mengadakan MUFEST pada bulan muharram yang terdiri dari lomba adzan, tartil al-qur’an, pidato, kaligrafi dan LCC PAI.",
      target: "Meningkatkan pemahaman mereka tentang ajaran dan pengetahuan agama Islam melalui kompetisi.",
      waktu: "Bulan muharrom",
      penanggungJawab: "Divisi kebahasaan dan divisi ta’mir",
    },
    {
      program: "Art Times",
      sasaran: "Mengadakan Art Times untuk seluruh santri Ar rahmat yang tertarik pada kegiatan-kegiatan yang ada di Art Times.",
      target: "Memberikan wadah bagi siswa atau anggota komunitas untuk mengekspresikan kreativitas mereka melalui tulisan, gambar, desain grafis, dan karya seni lainnya.",
      waktu: "-",
      penanggungJawab: "Divisi kebahasaan dan divisi I’lan",
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
            <th>Proses</th>
            <th>Tujuan</th>
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

const ProgramKerjaBahasa = () => {
  return (
    <div className="programkerja-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 title-programkerja">
          Program Kerja Divisi Bahasa
        </h2>
        <TableProgram title="A. PROGRAM YAUMIYAH" items={data.harian} />
        <TableProgram title="B. PROGRAM USBU’IYAH" items={data.mingguan} />
        <TableProgram title="C. PROGRAM SYAHRIAH" items={data.bulanan} />
        <TableProgram title="D. PROGRAM SANAWIYAH" items={data.tahunan} />
      </div>
    </div>
  );
};


export default ProgramKerjaBahasa;
