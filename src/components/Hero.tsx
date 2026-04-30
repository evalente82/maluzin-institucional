import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Star } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5521979698116?text=Ol%C3%A1%20Maluzin%2C%20gostaria%20de%20um%20or%C3%A7amento'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-900 text-white pt-28 md:pt-36 pb-20 md:pb-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(245,158,11,0.30) 0%, transparent 60%),' +
            'radial-gradient(50% 50% at 10% 100%, rgba(217,119,6,0.20) 0%, transparent 60%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900" aria-hidden />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <span className="eyebrow !bg-white/10 !text-brand-300 !border-white/10">
              <span className="size-1.5 rounded-full bg-brand-400 animate-pulse" />
              Há mais de 10 anos no Rio de Janeiro
            </span>

            <h1 className="h-display !text-white mt-5">
              Sua obra começa <br className="hidden md:block" />
              com a <span className="text-gradient-brand">Maluzin</span>.
            </h1>

            <p className="lead !text-ink-300 mt-6 max-w-2xl">
              Materiais de construção com qualidade certificada, entrega rápida no RJ
              e atendimento que entende de obra. Orce em segundos pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
                <MessageCircle size={20} />
                Orçamento no WhatsApp
                <ArrowRight size={18} />
              </a>
              <a href="#produtos" className="btn-ghost">
                Ver produtos
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { icon: Truck,       label: 'Entrega no RJ' },
                { icon: ShieldCheck, label: 'Produtos certificados' },
                { icon: Star,        label: 'Atendimento 5★' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2 text-ink-200">
                  <Icon size={20} className="text-brand-400" />
                  <span className="text-xs font-semibold leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/40 to-brand-700/0 blur-3xl rounded-full" aria-hidden />

              {/* Card */}
              <div className="relative card !bg-white/95 backdrop-blur-xl !border-white/20 p-6 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=70"
                  alt="Obra em construção"
                  className="w-full h-64 md:h-72 object-cover rounded-xl"
                  loading="eager"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ink-500 font-bold">Catálogo completo</div>
                    <div className="text-ink-900 font-bold text-lg">+5.000 itens em estoque</div>
                  </div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="size-12 grid place-items-center rounded-xl bg-brand-500 text-ink-900 hover:bg-brand-400 transition shadow-glow"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={22} />
                  </a>
                </div>
              </div>

              {/* Floating chips */}
              <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-2 bg-white text-ink-900 px-4 py-3 rounded-2xl shadow-soft border border-ink-100">
                <div className="size-9 grid place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Truck size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink-500">Entrega</div>
                  <div className="text-sm font-bold">Rápida no RJ</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
