import React from "react";
import "../css/css/programkerja.css"; 

const dataKeamanan = [
  {
    program: "Menertibkan santri setiap salat wajib 5 waktu (berpeci)",
    waktu: "Setiap waktu salat wajib",
  },
  {
    program: "Menertibkan santri saat salat Dhuha",
    waktu: "Pukul 06.45 (terakhir)",
  },
  {
    program: "Membangunkan santri pukul 6 pagi",
    waktu: "Pukul 06.00",
  },
  {
    program: "Menertibkan apel pagi",
    waktu: "Setiap pagi",
  },
  {
    program: "Patroli setiap habis salat wajib",
    waktu: "Setelah setiap salat wajib",
  },
  {
    program: "Menertibkan santri pukul 17.00 agar segera mandi & ke musholla",
    waktu: "Maks. 15 menit sebelum adzan Maghrib",
  },
  {
    program: "Menertibkan santri saat KBM, Diniyah malam, dan Belajar malam",
    waktu: "Sesuai waktu kegiatan",
  },
  {
    program: "Menertibkan santri saat jam tidur malam",
    waktu: "Sesuai jam malam",
  },
  {
    program: "Menertibkan alat elektronik (HP, laptop SMP, dll)",
    waktu: "Sesuai kondisi / peraturan",
  },
  {
    program: "Melarang atribut organisasi tertentu",
    waktu: "Setiap saat",
  },
  {
    program: "Melarang merokok, mabuk, homoseksual, dll",
    waktu: "Setiap saat",
  },
  {
    program: "Melakukan absen setelah salat",
    waktu: "Waktu tidak tentu (kondisional)",
  },
];

const ProgramKerjaKeamanan = () => {
  return (
    <div className="programkerja-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 title-programkerja">
          Program Kerja Divisi Keamanan
        </h2>

        <div className="card shadow-sm fade-slide p-3">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>No</th>
                <th>Program</th>
                <th>Waktu Pelaksanaan</th>
              </tr>
            </thead>
            <tbody>
              {dataKeamanan.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td className="text-start">{item.program}</td>
                  <td>{item.waktu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramKerjaKeamanan;
