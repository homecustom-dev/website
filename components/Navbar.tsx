
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Karier", href: "/karier" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        {/* Logo HCI */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Home Custom Indonesia - Beranda"
        >
          <Image
            src="/logo.png"
            alt="Logo Home Custom Indonesia"
            width={220}
            height={80}
            priority
            className="h-auto w-[155px] object-contain sm:w-[185px] md:w-[210px]"
          />
        </Link>

        {/* Menu navigasi */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-amber-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Tombol kontak */}
<Link
  href="/kontak"
  className="inline-flex items-center justify-center rounded-full
             bg-[#080D24] px-7 py-3
             text-sm font-semibold !text-white
             transition-all duration-300
             hover:bg-[#E98200] hover:!text-white"
>
  Hubungi Kami
</Link>
      </nav>
    </header>
  );
}
