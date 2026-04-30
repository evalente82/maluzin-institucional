import React from 'react'
import { Sun } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="backdrop-blur-sm bg-white/60 border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
          <span className="font-semibold text-gray-800">Maluzin</span>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a className="hover:text-gray-900" href="#servicos">Serviços</a>
          <a className="hover:text-gray-900" href="#projetos">Projetos</a>
          <a className="hover:text-gray-900" href="#contato">Contato</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-gray-100"><Sun size={18} /></button>
          <a className="hidden md:inline-block px-4 py-2 bg-primary-500 text-white rounded-md hover:opacity-95" href="#contato">Orçamento</a>
        </div>
      </div>
    </header>
  )
}
