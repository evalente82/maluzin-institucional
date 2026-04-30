import React, { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '#servicos',     label: 'Serviços' },
  { href: '#sobre',        label: 'Sobre' },
  { href: '#produtos',     label: 'Produtos' },
  { href: '#depoimentos',  label: 'Depoimentos' },
  { href: '#contato',      label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-ink-100 shadow-sm'
          : 'bg-transparent'}`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Maluzin - Página inicial">
          <img src="/logo.svg" alt="Maluzin" className="h-9 md:h-10 w-auto transition-transform group-hover:scale-105" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors relative
                         after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-500
                         hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+5521979698116"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-600 px-3 py-2"
          >
            <Phone size={16} />
            (21) 97969-8116
          </a>
          <a href="#contato" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
            Pedir Orçamento
          </a>
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 rounded-lg text-ink-800 hover:bg-ink-100"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          bg-white/95 backdrop-blur-xl border-t border-ink-100`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-ink-800 font-semibold hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
