import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <div className="font-semibold">Maluzin — Materiais de Construção</div>
            <div className="mt-2">© {new Date().getFullYear()} Maluzin</div>
          </div>
          <div>
            <div>📞 <a href="tel:+5521979698116" className="text-primary-700">+55 21 97969-8116</a></div>
            <div className="mt-1">🏠 Endereço: (confirmar endereço)</div>
            <div className="mt-1">⏰ Horário: Seg–Sáb 08:00–18:00 (confirmar)</div>
          </div>
          <div>
            <div>Siga-nos</div>
            <div className="mt-2 flex gap-3">
              <a href="https://www.facebook.com/maluzin.mat" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/maluzinmc" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
