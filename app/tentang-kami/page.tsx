
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Award,
  Users,
  Package,
  Palette,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";

const advantages = [
  {
    icon: Palette,
    title: "Desain Custom",
    description:
      "Desain produk dapat disesuaikan dengan ide, kebutuhan, dan identitas pelanggan.",
  },
  {
    icon: Package,
    title: "Beragam Produk",
    description:
      "Menyediakan berbagai pilihan merchandise dan produk custom untuk berbagai kebutuhan.",
  },
  {
    icon: ShieldCheck,
    title: "Mengutamakan Kualitas",
    description:
      "Memperhatikan proses produksi dan hasil akhir agar sesuai dengan pesanan.",
  },
  {
    icon: HeartHandshake,
    title: "Pelayanan Responsif",
    description:
      "Membantu pelanggan memahami pilihan produk dan kebutuhan custom mereka.",
  },
];

const productTypes = [
  "Pin custom",
  "Kipas custom",
  "Gantungan kunci",
  "Bingkai foto",
  "Celengan custom",
  "Berbagai produk custom lainnya",
];

const whatsappUrl =
  "https://wa.me/6281181230316?text=Halo%20Home%20Custom%20Indonesia%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20HCI.";

export default function TentangKamiPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-stone-50 via-white to-amber-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-800">
                <Sparkles size={16} />
                Mengenal HCI Lebih Dekat
              </span>

              <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                Ide Kreatif,
                <span className="block text-amber-600">
                  Kami Wujudkan.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                Home Custom Indonesia merupakan usaha yang bergerak di bidang
                percetakan dan produksi berbagai produk custom untuk kebutuhan
                personal, komunitas, acara, dan bisnis.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
<a
  href="#profil"
  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold !text-[#080D24] transition-all duration-300 hover:border-[#E98200] hover:bg-[#FFF5E5] hover:!text-[#B85C00]"
>
  Kenali Kami
  <ArrowRight size={18} />
</a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 transition hover:border-amber-500 hover:text-amber-700"
                >
                  Hubungi Kami
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* BRAND PANEL */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-amber-200/40 blur-2xl" />

              <div className="relative rounded-3xl border border-amber-100 bg-white p-7 shadow-xl md:p-10">
                <div className="flex min-h-52 items-center justify-center rounded-2xl bg-stone-50 p-6">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
                      <Lightbulb size={42} strokeWidth={1.5} />
                    </div>

                    <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                      HOME <span className="text-amber-600">CUSTOM</span>
                    </h2>

                    <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-slate-500">
                      INDONESIA
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-stone-50 p-4">
                    <Palette size={24} className="text-amber-600" />
                    <p className="mt-3 font-bold text-slate-900">
                      Kreativitas
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Ide menjadi produk
                    </p>
                  </div>

                  <div className="rounded-2xl bg-stone-50 p-4">
                    <HeartHandshake size={24} className="text-amber-600" />
                    <p className="mt-3 font-bold text-slate-900">
                      Kolaborasi
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Fokus pada kebutuhan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFIL */}
        <section id="profil" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Profil Perusahaan
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">
                Mengenal Home Custom Indonesia
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Home Custom Indonesia (HCI) bergerak di bidang percetakan
                  dan produksi produk custom. Kami menyediakan pilihan produk
                  yang dapat disesuaikan dengan kebutuhan pelanggan.
                </p>

                <p>
                  Produk kami dapat digunakan sebagai merchandise, souvenir,
                  kebutuhan komunitas, hadiah, maupun sarana promosi usaha.
                  Setiap produk memiliki peluang untuk dikembangkan melalui
                  kreativitas desain dan pemilihan bentuk yang sesuai.
                </p>

                <p>
                  Melalui proses pelayanan dan produksi, HCI berupaya membantu
                  pelanggan mewujudkan ide menjadi produk yang sesuai dengan
                  kebutuhan mereka.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h3 className="text-xl font-extrabold text-slate-950">
                Produk Kami
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Beberapa pilihan produk yang dapat dikembangkan sesuai
                kebutuhan pelanggan.
              </p>

              <ul className="mt-6 space-y-4">
                {productTypes.map((product) => (
                  <li key={product} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />
                    <span className="text-slate-700">{product}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/produk"
                className="mt-8 inline-flex items-center gap-2 font-bold text-amber-700 transition hover:text-amber-800"
              >
                Lihat Katalog Produk
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* VISI MISI */}
        <section className="bg-slate-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                Arah dan Tujuan
              </p>

              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                Visi dan Misi Kami
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Menjadi landasan bagi pengembangan produk, pelayanan, dan
                kegiatan operasional Home Custom Indonesia.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <Target size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">Visi</h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Menjadi usaha percetakan dan produk custom yang mampu
                  memberikan solusi kreatif serta memenuhi kebutuhan pelanggan
                  melalui produk yang berkualitas dan pelayanan yang baik.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <Award size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">Misi</h3>

                <ul className="mt-5 space-y-4 text-slate-300">
                  {[
                    "Menyediakan pilihan produk custom yang beragam.",
                    "Mengutamakan ketelitian dalam proses produksi.",
                    "Memberikan pelayanan yang responsif kepada pelanggan.",
                    "Mengembangkan kreativitas dan kemampuan tim.",
                    "Membangun hubungan kerja sama yang baik dengan pelanggan.",
                  ].map((mission) => (
                    <li key={mission} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-amber-400"
                      />
                      <span className="leading-7">{mission}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Mengapa HCI?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Mendukung Ide dan Kebutuhan Custom
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Kami berupaya memberikan pengalaman pemesanan yang jelas dan
                membantu pelanggan menentukan pilihan produk yang sesuai.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((advantage) => {
                const Icon = advantage.icon;

                return (
                  <article
                    key={advantage.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-950">
                      {advantage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {advantage.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* TIM */}
        <section className="bg-stone-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid items-center gap-8 rounded-3xl border border-stone-200 bg-white p-7 md:grid-cols-[auto_1fr] md:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
                <Users size={32} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-slate-950">
                  Dibangun Melalui Kerja Sama Tim
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                  Operasional HCI didukung oleh peran yang saling melengkapi,
                  mulai dari pengelolaan cabang, pengeditan desain pesanan,
                  hingga produksi dan pengemasan produk.
                </p>

                <Link
                  href="/karier"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-amber-700 transition hover:text-amber-800"
                >
                  Kenali Peluang Karier
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 md:py-24">
          <div className="mx-auto max-w-5xl rounded-3xl bg-amber-400 px-6 py-12 text-center text-slate-950 md:px-14 md:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60">
              <HeartHandshake size={30} />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Mari Wujudkan Ide Bersama HCI
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-800">
              Hubungi tim Home Custom Indonesia untuk bertanya mengenai
              produk, kebutuhan custom, dan peluang kerja sama.
            </p>

<a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "#ffffff" }}
  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-bold transition hover:bg-slate-800"
>
  Hubungi Kami
  <ArrowUpRight size={18} color="#ffffff" />
</a>
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
