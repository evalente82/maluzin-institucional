import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <header className="py-24 px-6 text-center bg-gradient-to-b from-white to-gray-50">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-gray-900">Maluzin — Soluções Criativas</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Site institucional premium com foco em conversão e experiência.</p>
      </motion.div>
    </header>
  )
}
