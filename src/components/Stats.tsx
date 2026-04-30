import React from 'react'
import { Award, Users, Clock, Truck } from 'lucide-react'

const stats = [
  { icon: Clock,  value: '10+',     label: 'Anos no mercado' },
  { icon: Users,  value: '5.000+',  label: 'Clientes atendidos' },
  { icon: Truck,  value: '24h',     label: 'Entrega no RJ' },
  { icon: Award,  value: '5★',      label: 'Avaliação dos clientes' },
]

export default function Stats() {
  return (
    <section className="bg-ink-900 text-white py-14 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="size-14 grid place-items-center rounded-2xl bg-brand-500/15 text-brand-400 border border-brand-500/20 shrink-0">
                <Icon size={24} />
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold font-display leading-none">{value}</div>
                <div className="text-sm text-ink-300 mt-1">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
