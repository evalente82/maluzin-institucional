import React from 'react'
import { Truck, Box, Wrench } from 'lucide-react'

const items = [
  { icon: <Truck />, title: 'Entrega Rápida', desc: 'Logística otimizada para sua obra.' },
  { icon: <Box />, title: 'Produtos Certificados', desc: 'Materiais com garantia e procedência.' },
  { icon: <Wrench />, title: 'Suporte Técnico', desc: 'Equipe especializada para orientar compras.' }
]

export default function Services(){
  return (
    <section id="servicos" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-primary-500 mb-3">{it.icon}</div>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
