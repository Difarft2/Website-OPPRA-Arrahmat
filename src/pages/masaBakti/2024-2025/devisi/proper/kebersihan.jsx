import React from "react";
import "../css/css/programkerja.css"; 

const data = {
  harian: [
    {
      program: "Membuang sampah dan membersihkan lapangan",
      sasaran: "Siswa Kelas 7 dan 8",
      target: "Sampah dan lingkungan pondok bersih",
      waktu: "Setiap sore",
      penanggungJawab: "Anggota divisi kebersihan yang piket"
    },
    {
      program: "Membersihkan makam",
      sasaran: "Anggota divisi kebersihan",
      target: "Makam bersih",
      waktu: "Setiap sore kecuali Jum’at",
      penanggungJawab: "Anggota divisi kebersihan yang piket"
    },
    {
      program: "Menertibkan piring-piring berserakan",
      sasaran: "Semua santri",
      target: "Tidak ada piring yang tidak pada tempatnya",
      waktu: "Pagi",
      penanggungJawab: "Anggota divisi kebersihan yang piket"
    },
    {
      program: "Meninjau kebersihan Asrama",
      sasaran: "Semua santri",
      target: "Asrama bersih dan suci",
      waktu: "Setiap sore sebelum Magrib",
      penanggungJawab: "Anggota divisi kebersihan yang piket"
    },
    {
      program: "Meninjau kebersihan kelas",
      sasaran: "Semua siswa",
      target: "Kelas bersih dan nyaman",
      waktu: "Setiap pagi",
      penanggungJawab: "Anggota divisi kebersihan yang piket"
    },
    {
      program: "Pemeriksaan kesehatan santri",
      sasaran: "Semua santri",
      target: "Santri yang sakit bisa memperoleh pertolongan",
      waktu: "Setiap pagi dan sore",
      penanggungJawab: "Anggota divisi kebersihan yang piket"
    }
  ],
  mingguan: [
    {
      program: "Jum’at bersih",
      sasaran: "Semua santri",
      target: "Seluruh area pondok bersih",
      waktu: "Setelah sholat Subuh",
      penanggungJawab: "Ketua divisi kebersihan"
    },
    {
      program: "Penjemuran kasur",
      sasaran: "Semua santri",
      target: "Meminimalisir berkembangnya penyakit gatal",
      waktu: "Sesuai jadwal",
      penanggungJawab: "Anggota divisi kebersihan yang piket"
    },
    {
      program: "Pengecekan keran dan bak kamar mandi",
      sasaran: "Semua santri",
      target: "Kamar mandi bersih dan tidak rusak",
      waktu: "Seminggu sekali",
      penanggungJawab: "Anggota divisi kebersihan"
    },
    {
      program: "Mengamankan sandal dan sepatu",
      sasaran: "Semua santri",
      target: "Sandal atau sepatu yang terbengkalai bisa diamankan",
      waktu: "Malam Jum’at saat sholawatan",
      penanggungJawab: "Anggota divisi kebersihan"
    },
    {
      program: "Pengelolaan sampah Jum’at berkah",
      sasaran: "Semua santri",
      target: "Sampah plastik Jum’at berkah dikelola",
      waktu: "Setelah sholat Jum’at",
      penanggungJawab: "Anggota divisi kebersihan"
    },
    {
      program: "Mengambil sampah di lapangan",
      sasaran: "Semua santri",
      target: "Lapangan bersih",
      waktu: "Setelah Subuh",
      penanggungJawab: "Anggota divisi kebersihan"
    }
  ],
  bulanan: [
    {
      program: "Rekap alat kebersihan asrama dan kelas",
      sasaran: "Semua asrama dan kelas",
      target: "Kelengkapan alat kebersihan",
      waktu: "Setelah mengamankan baju",
      penanggungJawab: "Ketua divisi kebersihan"
    },
    {
      program: "Pembersihan baju berceceran di jemuran dan kamar mandi",
      sasaran: "Semua santri",
      target: "Tidak ada baju yang mengotori lingkungan pondok",
      waktu: "Sebulan sekali",
      penanggungJawab: "Anggota divisi kebersihan"
    },
    {
      program: "Bank sampah",
      sasaran: "Santri yang melanggar peraturan kebersihan",
      target: "Pengelolaan sampah agar bermanfaat",
      waktu: "Tergantung pelanggar",
      penanggungJawab: "Ketua divisi kebersihan"
    }
  ],
  tahunan: [
    {
      program: "Lomba kebersihan asrama",
      sasaran: "Semua santri",
      target: "Memotivasi santri menjaga kebersihan asrama",
      waktu: "Satu semester sekali",
      penanggungJawab: "Ketua divisi kebersihan",
      dana: "500k"
    },
    {
      program: "Membagi alat kebersihan di asrama dan kelas",
      sasaran: "Asrama dan kelas",
      target: "Alat kebersihan lengkap di setiap ruangan",
      waktu: "Tahun ajaran baru",
      penanggungJawab: "Ketua divisi kebersihan"
    }
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
            <th>Program</th>
            <th>Sasaran</th>
            <th>Target</th>
            <th>Waktu</th>
            <th>Penanggung Jawab</th>
            {items[0]?.dana && <th>Dana</th>}
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
              <td>{item.penanggungJawab}</td>
              {item.dana && <td>{item.dana}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProgramKerjaKebersihan = () => {
  return (
    <div className="programkerja-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 title-programkerja">
          Program Kerja Divisi Kebersihan
        </h2>
        <TableProgram title="A. Program Harian" items={data.harian} />
        <TableProgram title="B. Program Mingguan" items={data.mingguan} />
        <TableProgram title="C. Program Bulanan" items={data.bulanan} />
        <TableProgram title="D. Program Tahunan" items={data.tahunan} />
      </div>
    </div>
  );
};

export default ProgramKerjaKebersihan;
