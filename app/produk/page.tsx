
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Produk Custom",
  description:
    "Jelajahi pin custom, kipas custom, gantungan kunci, bingkai foto, celengan custom, dan berbagai produk merchandise dari Home Custom Indonesia.",
};
import {
  ArrowRight,
  Image as ImageIcon,
  Circle,
  Heart,
  KeyRound,
  Frame,
  Package,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const products = [
  {
    name: "Pin Custom",
    category: "Merchandise",
    description:
      "Pin dengan desain custom untuk komunitas, acara, promosi, dan kebutuhan merchandise.",
    icon: Circle,
    number: "01",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Kipas Custom",
    category: "Produk Custom",
    description:
      "Kipas custom dengan desain pilihan untuk acara, souvenir, dan kebutuhan promosi.",
    icon: Sparkles,
    number: "02",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Gantungan Kunci",
    category: "Merchandise",
    description:
      "Gantungan kunci dengan beragam bentuk dan desain yang dapat disesuaikan.",
    icon: KeyRound,
    number: "03",
    color: "bg-rose-50 text-rose-700",
  },
  {
    name: "Bingkai Foto",
    category: "Produk Custom",
    description:
      "Bingkai foto untuk mengabadikan momen spesial dengan desain yang menarik.",
    icon: Frame,
    number: "04",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Celengan Custom",
    category: "Produk Custom",
    description:
      "Celengan dengan tampilan custom yang cocok untuk hadiah, souvenir, dan koleksi.",
    icon: Package,
    number: "05",
    color: "bg-violet-50 text-violet-700",
  },
  {
    name: "Produk Custom Lainnya",
    category: "Sesuai Permintaan",
    description:
      "Punya ide produk lainnya? Hubungi kami untuk mendiskusikan kebutuhan custom kamu.",
    icon: Heart,
    number: "06",
    color: "bg-orange-50 text-orange-700",
  },
];

const whatsappUrl =
  "https://wa.me/6281181230316?text=Halo%20Home%20Custom%20Indonesia%2C%20saya%20ingin%20bertanya%20tentang%20produk%20custom.";

export default function ProdukPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-stone-50 via-white to-amber-50">
          <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-800">
                <Sparkles size={16} />
                Produk Home Custom Indonesia
              </span>

              <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                Ide Kreatif,
                <span className="block text-amber-600">
                  Produk Lebih Personal.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Temukan berbagai pilihan produk custom yang dapat disesuaikan
                dengan kebutuhan personal, komunitas, acara, maupun bisnis.
              </p>

<div className="mt-14 flex flex-col gap-3 sm:flex-row"><a
  href="#katalog"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#080D24] px-7 py-3.5 text-base font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E98200] hover:!text-white"
>
  Lihat Katalog
  <ArrowRight size={18} />
</a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 transition hover:border-amber-500 hover:text-amber-700"
                >
                  <MessageCircle size={18} />
                  Konsultasi Produk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* KATALOG */}
        <section id="katalog" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                  Katalog Produk
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                  Temukan Produk Favoritmu
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Pilih produk yang sesuai dengan kebutuhanmu dan diskusikan
                  desain custom bersama tim kami.
                </p>
              </div>

              <span className="text-sm text-slate-500">
                {products.length} pilihan kategori
              </span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <article
                    key={product.number}
                    className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl md:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${product.color}`}
                      >
                        <Icon size={28} strokeWidth={1.7} />
                      </div>

                      <span className="text-sm font-bold text-slate-300">
                        {product.number}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-widest text-amber-700">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-slate-950">
                      {product.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {product.description}
                    </p>

                    <a
                      href={`${whatsappUrl}%20Produk%3A%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-slate-800 transition group-hover:text-amber-700"
                    >
                      Tanya Produk
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CUSTOM CTA */}
        <section className="px-5 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white md:px-14 md:py-16">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                  <ImageIcon size={18} />
                  Punya Ide Sendiri?
                </div>

                <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
                  Wujudkan produk custom sesuai keinginanmu.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Ceritakan kebutuhan produk, ide desain, atau konsep
                  merchandise yang ingin kamu buat kepada tim HCI.
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
          <Link href="/" className="font-bold text-slate-900">
            Home Custom Indonesia
          </Link>
<p>© 2026 Home Custom Indonesia.</p>
        </div>
      </footer>
    </>
  );
}
