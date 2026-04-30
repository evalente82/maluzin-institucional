import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Truck, Wrench, ShieldCheck, Hammer, Boxes, HeartHandshake } from 'lucide-react'

const items = [
  { icon: Truck,         title: 'Entrega Rápida',        desc: 'Logística otimizada para sua obra não parar — entregamos em todo o Rio de Janeiro.' },
  { icon: Boxes,         title: 'Catálogo Completo',     desc: 'Cimento, areia, tijolos, ferragem, hidráulica, elétrica e acabamentos em estoque.' },
  { icon: ShieldCheck,   title: 'Produtos Certificados', desc: 'Trabalhamos só com marcas reconhecidas e materiais com nota e garantia.' },
  { icon: Wrench,        title: 'Suporte Técnico',       desc: 'Atendimento de quem entende: te ajudamos a comprar a quantidade certa.' },
  { icon: Hammer,        title: 'Preço de Obra',         desc: 'Condições especiais para construtores, pedreiros e empresas parceiras.' },
  { icon: HeartHandshake,title: 'Atendimento Humano',    desc: 'Você fala direto com a gente pelo WhatsApp — resposta rápida, sem robô.' },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="servicos" className="section bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">Por que a Maluzin</span>
          <h2 className="h-section mt-4">
            Tudo o que sua obra precisa, <span className="text-gradient-brand">com quem entende</span>.
          </h2>
          <p className="lead mt-5">
            Atendimento próximo, produtos certificados e entrega rápida.
            Foco no que importa: sua obra andando no prazo.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={item} className="card p-6 group">
              <div className="size-12 grid place-items-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-ink-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
