import React from 'react'
import { motion } from 'framer-motion'

type Item = { title: string; image: string }

const items: Item[] = [
  { title: 'Cimento e Argamassa', image: 'https://images.unsplash.com/photo-1597844808175-2f4f5b0f0a3a?auto=format&fit=crop&w=800&q=70' },
  { title: 'Tijolos e Blocos',    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=70' },
  { title: 'Ferragens',           image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=70' },
  { title: 'Hidráulica',          image: 'https://images.unsplash.com/photo-1581094488379-6f9d4dca7f5d?auto=format&fit=crop&w=800&q=70' },
  { title: 'Elétrica',            image: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=800&q=70' },
  { title: 'Acabamentos',         image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=70' },
]

const WHATSAPP = 'https://wa.me/5521979698116?text=Ol%C3%A1%20Maluzin%2C%20gostaria%20de%20um%20or%C3%A7amento'

export default function Gallery() {
  return (
    <section id="produtos" className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Nossos produtos</span>
            <h2 className="h-section mt-4">
              Catálogo <span className="text-gradient-brand">completo</span> para sua obra.
            </h2>
            <p className="lead mt-4">Trabalhamos com as principais categorias e marcas do mercado.</p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline self-start">
            Solicitar lista completa
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-card border border-ink-100 aspect-[4/3]"
            >
              <img
                src={it.image}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <div className="text-white font-bold text-lg leading-tight">{it.title}</div>
                <div className="text-brand-300 text-xs font-bold uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Consultar →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
