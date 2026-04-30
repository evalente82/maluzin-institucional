import React from 'react'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'João Silva',
    role: 'Pedreiro autônomo',
    initials: 'JS',
    text: 'Materiais de ótima qualidade e entrega no prazo. O atendimento pelo WhatsApp é muito rápido — nunca me deixaram na mão.',
  },
  {
    name: 'Construtora ABC',
    role: 'Cliente parceiro',
    initials: 'CA',
    text: 'Parceria sólida com preços competitivos e suporte técnico. A Maluzin virou referência para nossas obras na região.',
  },
  {
    name: 'Ana Pereira',
    role: 'Reforma residencial',
    initials: 'AP',
    text: 'Reformei meu apê inteiro comprando aqui. Preço justo, entrega no dia seguinte e equipe super atenciosa.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section bg-ink-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="h-section mt-4">
            Clientes que <span className="text-gradient-brand">confiam</span> na Maluzin.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <figure key={t.name} className="card p-7 flex flex-col">
              <Quote className="text-brand-400" size={28} />
              <blockquote className="mt-4 text-ink-700 leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-ink-100">
                <div className="size-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center text-ink-900 font-extrabold">
                  {t.initials}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-ink-900">{t.name}</div>
                  <div className="text-xs text-ink-500">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
