import React from 'react'

const testimonials = [
  { name: 'João Silva', text: 'Materiais de ótima qualidade e entrega no prazo. Recomendo.' },
  { name: 'Construtora ABC', text: 'Parceria sólida com preços competitivos e suporte técnico.' }
]

export default function Testimonials(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700">"{t.text}"</p>
              <footer className="mt-4 text-sm font-semibold">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
