import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero(){
  return (
    <header className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Maluzin — Materiais de construção</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">Tudo para construir, reformar e decorar. Entrega rápida e suporte técnico para sua obra. Ligue/WhatsApp: <strong>+55 21 97969-8116</strong>.</p>
            <div className="mt-6 flex gap-3">
              <a href="https://api.whatsapp.com/send?phone=5521979698116&text=Ol%C3%A1%20Maluzin%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noreferrer">
                <Button>Chamar no WhatsApp</Button>
              </a>
              <Button variant="ghost">Ver Catálogo</Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 shadow-lg">
            <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Imagem / Showcase</div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
