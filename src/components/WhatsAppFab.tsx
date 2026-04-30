import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5521979698116?text=Ol%C3%A1%20Maluzin!"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 size-14 grid place-items-center
                 rounded-full bg-[#25D366] text-white shadow-glow
                 hover:scale-110 transition-transform
                 ring-4 ring-[#25D366]/20"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle size={26} className="relative" />
    </a>
  )
}
