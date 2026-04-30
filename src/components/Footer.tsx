import React from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-900 text-ink-300 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/logo.svg" alt="Maluzin" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm leading-relaxed text-ink-400 max-w-xs">
              Materiais de construção com qualidade, entrega rápida e atendimento
              que entende de obra. Há mais de 10 anos no Rio de Janeiro.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="https://www.facebook.com/maluzin.mat" target="_blank" rel="noreferrer" aria-label="Facebook" className="size-10 grid place-items-center rounded-xl bg-white/5 hover:bg-brand-500 hover:text-ink-900 transition">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7.6V14h2.7v8h3.2z"/></svg>
              </a>
              <a href="https://www.instagram.com/maluzinmc" target="_blank" rel="noreferrer" aria-label="Instagram" className="size-10 grid place-items-center rounded-xl bg-white/5 hover:bg-brand-500 hover:text-ink-900 transition">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a href="https://wa.me/5521979698116" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="size-10 grid place-items-center rounded-xl bg-white/5 hover:bg-brand-500 hover:text-ink-900 transition">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre"        className="hover:text-brand-400">Sobre nós</a></li>
              <li><a href="#servicos"     className="hover:text-brand-400">Serviços</a></li>
              <li><a href="#produtos"     className="hover:text-brand-400">Produtos</a></li>
              <li><a href="#depoimentos"  className="hover:text-brand-400">Depoimentos</a></li>
              <li><a href="#contato"      className="hover:text-brand-400">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone size={16} className="text-brand-400 mt-0.5"/><a href="tel:+5521979698116" className="hover:text-brand-400">(21) 97969-8116</a></li>
              <li className="flex items-start gap-3"><Mail  size={16} className="text-brand-400 mt-0.5"/><a href="mailto:contato@maluzin.com.br" className="hover:text-brand-400">contato@maluzin.com.br</a></li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-brand-400 mt-0.5"/>Rio de Janeiro — RJ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Horário</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Seg – Sex</span><span className="text-white font-semibold">8h – 18h</span></li>
              <li className="flex justify-between"><span>Sábado</span><span className="text-white font-semibold">8h – 13h</span></li>
              <li className="flex justify-between"><span>Domingo</span><span className="text-ink-500">Fechado</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-ink-500">
          <div>© {year} Maluzin — Materiais de Construção. Todos os direitos reservados.</div>
          <div>Feito com ♥ no Rio de Janeiro</div>
        </div>
      </div>
    </footer>
  )
}
