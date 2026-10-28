
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Karier", href: "/karier" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10">
        {/* Logo HCI */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center"
          aria-label="Home Custom Indonesia - Beranda"
        >
          <Image
            src="/logo.png"
            alt="Logo Home Custom Indonesia"
            width={220}
            height={80}
            priority
            className="h-auto w-[130px] object-contain sm:w-[175px] md:w-[200px]"
          />
        </Link>

        {/* Menu desktop */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-amber-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Kontak desktop */}
        <Link
          href="/kontak"
          className="hidden shrink-0 items-center justify-center rounded-full bg-[#080D24] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#E98200] hover:!text-white lg:inline-flex"
        >
          Hubungi Kami
          <ArrowUpRight size={16} className="ml-2" />
        </Link>

        {/* Tombol hamburger mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#080D24] transition hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu mobile */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white p-4 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-700"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/kontak"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#080D24] px-4 py-3 text-sm font-semibold !text-white transition hover:bg-[#E98200] hover:!text-white"
              >
                Hubungi Kami
                <ArrowUpRight size={17} className="ml-2" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
