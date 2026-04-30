import React from 'react'

const images = [
  '/src/assets/sample1.jpg',
  '/src/assets/sample2.jpg',
  '/src/assets/sample3.jpg'
]

export default function Gallery(){
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Portfólio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="bg-gray-100 rounded overflow-hidden">
              <img loading="lazy" src={src} alt={`portfolio-${i}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
