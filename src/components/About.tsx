import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const points = [
  'Atendimento personalizado por WhatsApp',
  'Estoque pronto para entrega imediata',
  'Equipe que entende de obra',
  'Parceria com construtores e empresas',
]

export default function About() {
  return (
    <section id="sobre" className="section bg-ink-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-brand-500/20 blur-2xl rounded-3xl" aria-hidden />
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=70"
              alt="Loja Maluzin"
              className="relative w-full h-[420px] object-cover rounded-3xl shadow-soft"
              loading="lazy"
            />
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-soft border border-ink-100 max-w-[220px]">
              <div className="text-3xl font-extrabold text-brand-600 font-display leading-none">+10</div>
              <div className="text-sm text-ink-600 mt-1">anos construindo confiança no RJ</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow">Sobre a Maluzin</span>
            <h2 className="h-section mt-4">
              Materiais de qualidade <br />
              e gente que <span className="text-gradient-brand">resolve</span>.
            </h2>
            <p className="lead mt-5">
              Somos uma loja de bairro com alma de grande fornecedor. Combinamos
              proximidade no atendimento, estoque amplo e entrega ágil para que
              sua obra ande sem dor de cabeça.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map(p => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-600 mt-0.5 shrink-0" size={22} />
                  <span className="text-ink-800 font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="btn-primary">Fale com a gente</a>
              <a href="#produtos" className="btn-outline">Ver produtos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
