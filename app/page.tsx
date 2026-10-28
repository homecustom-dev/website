
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Fan,
  KeyRound,
  Layers3,
  Palette,
  Printer,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const products = [
  {
    name: "Pin Custom",
    description: "Pin berbagai bentuk untuk komunitas, acara, dan promosi.",
    icon: <Layers3 size={27} />,
  },
  {
    name: "Kipas Custom",
    description: "Kipas dengan desain khusus untuk acara dan kebutuhan bisnis.",
    icon: <Fan size={27} />,
  },
  {
    name: "Gantungan Kunci",
    description: "Gantungan kunci custom untuk merchandise dan suvenir.",
    icon: <KeyRound size={27} />,
  },
  {
    name: "Produk Custom Lainnya",
    description: "Kembangkan ide produk sesuai kebutuhan dan konsep desain.",
    icon: <Sparkles size={27} />,
  },
];

const advantages = [
  {
    title: "Desain Fleksibel",
    description:
      "Desain dapat disesuaikan dengan identitas, kebutuhan, dan konsep Anda.",
    icon: <Palette size={23} />,
  },
  {
    title: "Produksi Terarah",
    description:
      "Proses produksi disesuaikan dengan spesifikasi pesanan yang disepakati.",
    icon: <Printer size={23} />,
  },
  {
    title: "Mengutamakan Kualitas",
    description:
      "Memperhatikan detail produk agar sesuai dengan kebutuhan pelanggan.",
    icon: <ShieldCheck size={23} />,
  },
  {
    title: "Untuk Berbagai Kebutuhan",
    description:
      "Melayani kebutuhan personal, komunitas, acara, hingga bisnis.",
    icon: <Truck size={23} />,
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-[#080D24]">
        {/* HERO */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-[#FFF6E7]" />
          <div className="absolute right-[-100px] top-[-100px] -z-10 h-[350px] w-[350px] rounded-full bg-[#F59E0B]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F3C66B] bg-white/80 px-4 py-2 text-sm font-semibold text-[#B85C00]">
                <Sparkles size={16} />
                Solusi Produk Custom
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Wujudkan Ide,
                <span className="mt-2 block text-[#E98200]">
                  Jadi Produk Nyata.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Home Custom Indonesia membantu mewujudkan berbagai produk
                custom untuk kebutuhan personal, komunitas, acara, dan bisnis.
                Mulai dari ide dan desain hingga menjadi produk yang siap
                digunakan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/produk"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#080D24] px-7 py-3.5 text-sm font-semibold !text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E98200] hover:!text-white"
                >
                  Lihat Produk
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/kontak"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold !text-[#080D24] transition-all duration-300 hover:border-[#E98200] hover:!text-[#E98200]"
                >
                  Diskusikan Kebutuhan
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#E98200]" />
                  Pilihan desain fleksibel
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#E98200]" />
                  Beragam kebutuhan
                </span>
              </div>
            </div>

            {/* VISUAL HERO */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute inset-5 rounded-[2rem] bg-[#E98200]/15 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white bg-white/90 p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B85C00]">
                      Home Custom Indonesia
                    </p>
                    <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                      Ide Kreatif, Banyak Kemungkinan
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1D6] text-[#D97706]">
                    <Sparkles size={25} />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="flex min-h-40 flex-col justify-between rounded-2xl bg-[#FFF5E5] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#D97706] shadow-sm">
                      <Layers3 size={27} />
                    </div>
                    <div>
                      <p className="font-bold">Pin Custom</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Beragam bentuk
                      </p>
                    </div>
                  </div>

                  <div className="flex min-h-40 flex-col justify-between rounded-2xl bg-[#F1F3F8] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#080D24] shadow-sm">
                      <Fan size={27} />
                    </div>
                    <div>
                      <p className="font-bold">Kipas Custom</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Desain pilihan
                      </p>
                    </div>
                  </div>

                  <div className="flex min-h-40 flex-col justify-between rounded-2xl bg-[#F1F3F8] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#080D24] shadow-sm">
                      <KeyRound size={27} />
                    </div>
                    <div>
                      <p className="font-bold">Gantungan Kunci</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Merchandise custom
                      </p>
                    </div>
                  </div>

                  <div className="flex min-h-40 flex-col justify-between rounded-2xl bg-[#FFF5E5] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#D97706] shadow-sm">
                      <Palette size={27} />
                    </div>
                    <div>
                      <p className="font-bold">Desain Kreatif</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Sesuai kebutuhan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#080D24] p-4 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FBBF24]">
                    <Sparkles size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      Punya ide produk sendiri?
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Mari diskusikan konsep yang Anda inginkan.
                    </p>
                  </div>
                  <ArrowRight size={19} className="ml-auto shrink-0 text-[#FBBF24]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUK */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D97706]">
                  Produk Kami
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Banyak pilihan untuk berbagai ide.
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Temukan inspirasi produk custom yang dapat disesuaikan
                  dengan kebutuhan Anda.
                </p>
              </div>

              <Link
                href="/produk"
                className="inline-flex w-fit items-center gap-2 text-sm font-bold !text-[#080D24] transition hover:!text-[#E98200]"
              >
                Jelajahi Semua Produk
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href="/produk"
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0C477] hover:shadow-xl hover:shadow-orange-950/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4DF] text-[#D97706] transition-colors group-hover:bg-[#E98200] group-hover:text-white">
                    {product.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{product.name}</h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B85C00]">
                    Lihat detail
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="bg-[#F7F8FA] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D97706]">
                Mengapa HCI?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Partner untuk kebutuhan produk custom Anda.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Kami membantu mengembangkan ide produk agar sesuai dengan
                tujuan dan kebutuhan pemesanan Anda.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#080D24] text-white">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 sm:py-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#080D24] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#E98200]/20 blur-3xl" />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FBBF24]">
                  Mulai dari Ide Anda
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Siap membuat produk custom?
                </h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Ceritakan kebutuhan Anda dan diskusikan konsep produk
                  bersama Home Custom Indonesia.
                </p>
              </div>

              <Link
                href="/kontak"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#E98200] px-7 py-4 text-sm font-bold !text-white transition-all duration-300 hover:bg-white hover:!text-[#080D24]"
              >
                Hubungi Kami
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 py-7">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
<p>© 2026 Home Custom Indonesia.</p>
            <p>Solusi produk custom untuk berbagai kebutuhan.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
