import React, { useState } from 'react'

export default function ContactForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState<null | string>(null)

  function validate(){
    if(!name || !email || !msg) return false
    // simples regex
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return false
    return true
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(!validate()){ setStatus('Preencha todos os campos corretamente.'); return }
    setStatus('Enviando...')
    // Placeholder: integrar com EmailJS ou API .NET 8
    setTimeout(() => setStatus('Mensagem enviada — responderemos em breve!'), 800)
  }

  return (
    <form id="contato" onSubmit={handleSubmit} className="max-w-xl">
      <div className="grid gap-3">
        <input className="p-3 border rounded" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
        <input className="p-3 border rounded" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea className="p-3 border rounded" rows={6} placeholder="Mensagem" value={msg} onChange={e => setMsg(e.target.value)} />
        <button className="px-4 py-2 bg-primary-500 text-white rounded">Enviar</button>
        {status && <div className="text-sm text-gray-600">{status}</div>}
      </div>
    </form>
  )
}
