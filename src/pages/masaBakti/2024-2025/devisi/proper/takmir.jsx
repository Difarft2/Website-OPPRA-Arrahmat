import React from "react";
import "../css/css/programkerja.css"; 

const data = [
  {
    no: 1,
    program: "Membaca surat Al-Waqiah dan Al-Kahfi",
    proses: [
      "Santri membaca Al-Waqiah setiap hari.",
      "Santri membaca Al-Kahfi di hari Jum’at."
    ],
    sasaran: "Seluruh santri.",
    target: "Membaca surat Al-Waqiah dan Al-Kahfi bersama-sama.",
    waktu: [
      "Setiap hari setelah salat subuh.",
      "Jum’at setelah subuh."
    ]
  },
  {
    no: 2,
    program: "Memakai peci saat salat jama’ah",
    proses: ["Santri memakai peci saat salat sampai dzikir."],
    sasaran: "Seluruh santri.",
    target: "Seluruh santri memakai peci saat salat dan dzikir.",
    waktu: "Setiap salat Ashar, Maghrib, Subuh, dan Isya’."
  },
  {
    no: 3,
    program: "Mengaji 5 menit setelah membaca Al-Waqiah per generasi",
    proses: ["Santri membaca Al-Qur’an mandiri."],
    sasaran: "Seluruh santri.",
    target: "Seluruh santri per generasi membaca Al-Qur’an mandiri.",
    waktu: "Setelah salat subuh (kecuali Jum’at)."
  },
  {
    no: 4,
    program: "Kebersihan mushola",
    proses: [
      "Membersihkan mushola sebelum salat 5 waktu.",
      "Jika hujan, salat beberapa santri dialihkan ke asrama.",
      "Penyucian mushola setiap Jum’at diawasi takmir."
    ],
    sasaran: "Seluruh santri dan anggota takmir.",
    target: "Mushola selalu bersih dan siap digunakan.",
    waktu: [
      "10 menit sebelum adzan / saat qori.",
      "Saat hujan deras.",
      "Saat kegiatan roan."
    ]
  },
  {
    no: 5,
    program: "Membaca Asmaul Husna",
    proses: ["Membaca Asmaul Husna setiap hari setelah adzan Isya’."],
    sasaran: "Santri yang salat di mushola.",
    target: "Semua santri membaca Asmaul Husna bersama.",
    waktu: "Sesudah adzan Isya’."
  },
  {
    no: 6,
    program: "Mengkoordinasi jadwal mengaji santri",
    proses: [
      "Membuat jadwal mengaji sebelum dan sesudah Maghrib.",
      "Membaca surat Al-Waqiah setelah salat Subuh.",
      "Jadwal mengaji 5-10 menit setelah Al-Waqiah.",
      "Jadwal membaca Yasin per generasi setiap Kamis sore."
    ],
    sasaran: "Seluruh/sebagian santri.",
    target: "Santri mengaji tertib & khidmat sesuai jadwal.",
    waktu: [
      "Sebelum dan sesudah Maghrib.",
      "Setelah salat Subuh.",
      "Setelah membaca Al-Waqiah.",
      "Kamis sore setelah Asar."
    ]
  },
  {
    no: 7,
    program: "Pengadaan event-event keagamaan",
    proses: ["Pelaksanaan event seperti Muharram, Maulid, dll."],
    sasaran: "Seluruh santri.",
    target: "Santri mengikuti acara dengan tertib.",
    waktu: "Sesuai jadwal acara."
  },
  {
    no: 8,
    program: "Penyuluhan terhadap santri baru",
    proses: ["Memberi penyuluhan soal kebersihan, kesucian, dan akhlak."],
    sasaran: "Santri baru (kelas 7).",
    target: "Menjadikan santri baru pribadi lebih baik.",
    waktu: "Menyesuaikan keadaan."
  },
  {
    no: 9,
    program: "Pemberitahuan tanda sebelum waktu salat",
    proses: [
      "Memutar Qiro’ah sebelum Isya’ dan salat Jum’at.",
      "Memutar Tarhim sebelum Subuh."
    ],
    sasaran: "Seluruh santri.",
    target: "Menjadi pengingat akan masuknya waktu salat.",
    waktu: "Sebelum salat."
  }
];

const ProgramKerjaTakmir = () => {
  return (
    <div className="programkerja-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 title-programkerja">
          Program Kerja Divisi Takmir
        </h2>
        <div className="table-responsive card shadow-sm fade-slide p-3">
          <table className="table table-bordered align-middle text-center table-hover">
            <thead className="table-primary">
              <tr className="bg-primary">
                <th>No.</th>
                <th>Program Kerja</th>
                <th>Proses</th>
                <th>Sasaran</th>
                <th>Target</th>
                <th>Waktu</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.no}</td>
                  <td>{item.program}</td>
                  <td className="text-start">
                    {Array.isArray(item.proses)
                      ? item.proses.map((p, i) => (
                          <span key={i}>
                            {p}
                            {i !== item.proses.length - 1 && <br />}
                          </span>
                        ))
                      : item.proses}
                  </td>
                  <td>{item.sasaran}</td>
                  <td>{item.target}</td>
                  <td className="text-start">
                    {Array.isArray(item.waktu)
                      ? item.waktu.map((w, i) => (
                          <span key={i}>
                            {w}
                            {i !== item.waktu.length - 1 && <br />}
                          </span>
                        ))
                      : item.waktu}
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

export default ProgramKerjaTakmir;
