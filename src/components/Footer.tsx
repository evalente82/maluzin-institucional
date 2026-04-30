import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Maluzin — Materiais de Construção</div>
        <div className="mt-3 md:mt-0">Endereço • Telefone • <a href="#contato" className="text-primary-500">Contato</a></div>
      </div>
    </footer>
  )
}
