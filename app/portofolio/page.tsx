
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Image as ImageIcon,
  Circle,
  Fan,
  KeyRound,
  Frame,
  Gift,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";

const projects = [
  {
    number: "01",
    title: "Pin Custom",
    category: "Merchandise",
    description:
      "Pin custom untuk komunitas, acara, identitas tim, dan kebutuhan promosi.",
    icon: Circle,
    theme: "bg-amber-50 text-amber-700",
    label: "Pin",
  },
  {
    number: "02",
    title: "Kipas Custom",
    category: "Produk Custom",
    description:
      "Kipas dengan desain pilihan untuk acara, souvenir, dan kegiatan promosi.",
    icon: Fan,
    theme: "bg-sky-50 text-sky-700",
    label: "Kipas",
  },
  {
    number: "03",
    title: "Gantungan Kunci",
    category: "Merchandise",
    description:
      "Gantungan kunci custom dengan bentuk dan desain sesuai kebutuhan.",
    icon: KeyRound,
    theme: "bg-rose-50 text-rose-700",
    label: "Keychain",
  },
  {
    number: "04",
    title: "Bingkai Foto",
    category: "Produk Custom",
    description:
      "Bingkai foto untuk hadiah, kenang-kenangan, dan momen spesial.",
    icon: Frame,
    theme: "bg-emerald-50 text-emerald-700",
    label: "Bingkai",
  },
  {
    number: "05",
    title: "Celengan Custom",
    category: "Produk Custom",
    description:
      "Celengan dengan tampilan khusus untuk hadiah, souvenir, dan koleksi.",
    icon: Gift,
    theme: "bg-violet-50 text-violet-700",
    label: "Celengan",
  },
  {
    number: "06",
    title: "Desain Merchandise",
    category: "Desain Custom",
    description:
      "Konsep visual merchandise yang disesuaikan dengan ide dan identitas pemesan.",
    icon: Sparkles,
    theme: "bg-orange-50 text-orange-700",
    label: "Desain",
  },
];

const whatsappUrl =
  "https://wa.me/6281181230316?text=Halo%20Home%20Custom%20Indonesia%2C%20saya%20tertarik%20dengan%20produk%20custom%20HCI.";

export default function PortofolioPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-stone-50 via-white to-amber-50">
          <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-800">
              <ImageIcon size={16} />
              Portofolio HCI
            </span>

            <div className="mt-7 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                  Ide Kreatif dalam
                  <span className="block text-amber-600">
                    Berbagai Bentuk.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  Kenali beragam jenis produk custom yang dapat dikembangkan
                  untuk kebutuhan personal, komunitas, acara, dan bisnis.
                </p>
              </div>

<Link
  href="/kontak"
  className="inline-flex items-center justify-center gap-2
             rounded-full bg-[#080D24] px-7 py-4
             text-sm font-semibold !text-white
             shadow-md transition-all duration-300
             hover:-translate-y-1 hover:bg-[#E98200]
             hover:!text-white"
>
  Diskusikan Proyek
  <ArrowUpRight size={18} />
</Link>
            </div>
          </div>
        </section>

        {/* GALERI */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Galeri Produk
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Jelajahi Inspirasi Produk
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Berikut kategori produk yang dapat menjadi referensi untuk
                merencanakan kebutuhan custom kamu.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.number}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
                  >
                    <div
                      className={`relative flex aspect-[4/3] items-center justify-center ${project.theme}`}
                    >
                      <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-700 backdrop-blur">
                        {project.category}
                      </div>

                      <Icon
                        size={88}
                        strokeWidth={1.1}
                        className="transition duration-300 group-hover:scale-110"
                      />

                      <span className="absolute bottom-4 right-5 text-sm font-bold opacity-50">
                        {project.number}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-950">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {project.description}
                      </p>

                      <a
                        href={`${whatsappUrl}%20Kategori%3A%20${encodeURIComponent(project.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-bold text-amber-700 transition hover:text-amber-800"
                      >
                        Tanya Produk
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-8 text-sm leading-6 text-slate-500">
              Catatan: galeri ini merupakan contoh kategori produk, bukan
              dokumentasi foto hasil pesanan pelanggan. Foto portofolio asli
              dapat ditambahkan setelah tersedia.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-6 py-12 text-white md:px-14 md:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                  <Sparkles size={18} />
                  Punya Ide Sendiri?
                </div>

                <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
                  Mari wujudkan produk custom sesuai kebutuhanmu.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Hubungi tim HCI untuk mendiskusikan desain, pilihan produk,
                  dan kebutuhan produksi.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-amber-300"
              >
                <MessageCircle size={19} />
                Hubungi Kami
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-bold text-slate-950">
            Home Custom Indonesia
          </Link>
<p>© 2026 Home Custom Indonesia.</p>
        </div>
      </footer>
    </>
  );
}
