
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const jobs = [
  {
    id: 1,
    title: "Admin Cabang",
    department: "Administrasi",
    type: "Full-time",
    location: "Penempatan sesuai kebutuhan perusahaan",
    description:
      "Mengelola administrasi cabang, melakukan pencatatan data, serta membantu kelancaran operasional harian.",
    requirements: [
      "Mampu mengoperasikan komputer dan aplikasi perkantoran.",
      "Teliti, komunikatif, dan bertanggung jawab.",
      "Mampu mengelola dokumen dan data administrasi.",
    ],
  },
  {
    id: 2,
    title: "Admin Edit",
    department: "Desain & Produksi",
    type: "Full-time",
    location: "Penempatan sesuai kebutuhan perusahaan",
    description:
      "Membantu proses pengolahan file desain, memeriksa kesesuaian desain pesanan, dan menyiapkan file untuk produksi.",
    requirements: [
      "Memahami dasar pengolahan file desain.",
      "Teliti dalam memeriksa ukuran dan detail desain.",
      "Mampu bekerja sesuai arahan dan tenggat waktu.",
    ],
  },
  {
    id: 3,
    title: "Support",
    department: "Operasional",
    type: "Full-time",
    location: "Penempatan sesuai kebutuhan perusahaan",
    description:
      "Mendukung kebutuhan operasional dan membantu koordinasi pekerjaan agar proses kerja berjalan dengan baik.",
    requirements: [
      "Memiliki komunikasi dan kerja sama tim yang baik.",
      "Disiplin, cekatan, dan bertanggung jawab.",
      "Bersedia membantu kebutuhan operasional sesuai tugas.",
    ],
  },
];

const applicationUrl = "https://forms.gle/pJL3DeYqrk7WqeqQ7";

export default function KarierPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("Semua Divisi");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const departments = [
    "Semua Divisi",
    "Administrasi",
    "Desain & Produksi",
    "Operasional",
  ];

  const filteredJobs = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.department.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword);

      const matchesDepartment =
        department === "Semua Divisi" || job.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [search, department]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F8FA] text-[#080D24]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#080D24] text-white">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#E98200]/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-orange-200">
                <BriefcaseBusiness size={16} />
                Karier di Home Custom Indonesia
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Temukan peluang.
                <span className="block text-[#F59E0B]">
                  Kembangkan potensimu.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Bergabunglah bersama Home Custom Indonesia dan jadilah bagian
                dari tim yang mendukung proses kreatif, produksi, dan pelayanan
                produk custom.
              </p>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Users size={18} className="text-[#F59E0B]" />
                  Kolaborasi tim
                </span>
                <span className="inline-flex items-center gap-2">
                  <Building2 size={18} className="text-[#F59E0B]" />
                  Lingkungan profesional
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH & FILTER */}
        <section className="relative z-10 mx-auto -mt-7 max-w-7xl px-6 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 sm:p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_280px_auto]">
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Cari posisi atau bidang pekerjaan..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-[#080D24] outline-none transition focus:border-[#E98200] focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div className="relative">
                <select
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-[#080D24] outline-none transition focus:border-[#E98200] focus:ring-2 focus:ring-orange-100"
                  aria-label="Filter divisi"
                >
                  {departments.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDepartment("Semua Divisi");
                }}
                className="h-12 rounded-xl bg-[#080D24] px-6 text-sm font-semibold !text-white transition hover:bg-[#E98200] hover:!text-white"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </section>

        {/* JOB LIST */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C66B00]">
                Peluang Karier
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Lowongan yang tersedia
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Temukan posisi yang sesuai dengan minat dan kemampuanmu.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Menampilkan{" "}
              <span className="font-bold text-[#080D24]">
                {filteredJobs.length}
              </span>{" "}
              posisi
            </p>
          </div>

          <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => {
                  const isSelected = selectedJob === job.id;

                  return (
                    <article
                      key={job.id}
                      className={`rounded-2xl border bg-white p-5 transition-all duration-200 sm:p-6 ${
                        isSelected
                          ? "border-[#E98200] shadow-lg shadow-orange-900/5"
                          : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3DF] text-[#C66B00]">
                          <BriefcaseBusiness size={25} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                              Lowongan
                            </span>
                          </div>

                          <p className="mt-2 text-sm font-medium text-slate-600">
                            {job.department}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 sm:text-sm">
                            <span className="inline-flex items-center gap-2">
                              <Clock3 size={15} />
                              {job.type}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <MapPin size={15} />
                              {job.location}
                            </span>
                          </div>

                          <p className="mt-4 text-sm leading-7 text-slate-600">
                            {job.description}
                          </p>

                          {isSelected && (
                            <div className="mt-5 border-t border-slate-100 pt-5">
                              <h4 className="font-bold">Kualifikasi umum</h4>
                              <ul className="mt-3 space-y-2">
                                {job.requirements.map((requirement) => (
                                  <li
                                    key={requirement}
                                    className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                                  >
                                    <CheckCircle2
                                      size={17}
                                      className="mt-1 shrink-0 text-[#D97706]"
                                    />
                                    {requirement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="mt-5 flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedJob(isSelected ? null : job.id)
                              }
                              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-semibold !text-[#080D24] transition hover:border-[#E98200] hover:!text-[#B85C00]"
                            >
                              {isSelected ? "Tutup Detail" : "Lihat Detail"}
                            </button>

                            <a
                              href={applicationUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#080D24] px-5 text-sm font-semibold !text-white transition hover:bg-[#E98200] hover:!text-white"
                            >
                              Lamar Sekarang
                              <ArrowRight size={16} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                  <Search
                    size={30}
                    className="mx-auto text-slate-400"
                  />
                  <h3 className="mt-4 font-bold">Posisi tidak ditemukan</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Coba kata kunci atau filter divisi lainnya.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setDepartment("Semua Divisi");
                    }}
                    className="mt-5 text-sm font-bold text-[#B85C00] hover:underline"
                  >
                    Tampilkan semua posisi
                  </button>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-5">
              <div className="rounded-2xl bg-[#080D24] p-6 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#FBBF24]">
                  <Users size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Belum menemukan posisi yang cocok?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Kamu dapat mengirimkan lamaran melalui formulir rekrutmen
                  HCI untuk mengikuti proses seleksi.
                </p>
                <a
                  href={applicationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#E98200] px-5 py-3 text-sm font-bold !text-white transition hover:bg-white hover:!text-[#080D24]"
                >
                  Isi Formulir Lamaran
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                    <CalendarDays size={20} />
                  </div>
                  <h3 className="font-bold">Proses Rekrutmen</h3>
                </div>
                <ol className="mt-5 space-y-4">
                  {[
                    "Isi formulir lamaran.",
                    "Tim melakukan peninjauan data.",
                    "Kandidat yang sesuai akan dihubungi.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFF3DF] text-xs font-bold text-[#B85C00]">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-6 text-slate-600">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs leading-6 text-slate-500">
            Informasi posisi, kualifikasi, lokasi, dan status rekrutmen dapat
            berubah sesuai kebutuhan perusahaan. Pastikan informasi lowongan
            dikonfirmasi melalui kanal resmi HCI.
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white py-7">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
<p>© 2026 Home Custom Indonesia.</p>            <Link
              href="/"
              className="font-medium !text-[#080D24] hover:!text-[#E98200]"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
