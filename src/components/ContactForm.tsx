import React, { useState } from 'react'
import { Send, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5521979698116'

export default function ContactForm() {
  const [name, setName]   = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg]     = useState('')
  const [status, setStatus] = useState<null | { type: 'ok' | 'err' | 'loading'; text: string }>(null)

  function validate() {
    if (!name.trim() || !email.trim() || !msg.trim()) return 'Preencha nome, e-mail e mensagem.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'E-mail inválido.'
    return null
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err = validate()
    if (err) { setStatus({ type: 'err', text: err }); return }

    setStatus({ type: 'loading', text: 'Abrindo WhatsApp...' })
    const text = encodeURIComponent(
      `Olá, Maluzin! Meu nome é ${name}.\n` +
      (phone ? `Telefone: ${phone}\n` : '') +
      `E-mail: ${email}\n\n${msg}`
    )
    setTimeout(() => {
      window.open(`${WHATSAPP}?text=${text}`, '_blank', 'noopener')
      setStatus({ type: 'ok', text: 'Pronto! Continuamos pelo WhatsApp 🟢' })
    }, 400)
  }

  return (
    <section id="contato" className="section bg-white">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Info */}
        <div>
          <span className="eyebrow">Fale com a gente</span>
          <h2 className="h-section mt-4">
            Vamos <span className="text-gradient-brand">orçar</span> sua obra?
          </h2>
          <p className="lead mt-5">
            Resposta rápida pelo WhatsApp em horário comercial.
            Conte o que precisa e te enviamos o orçamento na hora.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: Phone,    title: 'Telefone / WhatsApp', text: '(21) 97969-8116', href: 'tel:+5521979698116' },
              { icon: Mail,     title: 'E-mail',              text: 'contato@maluzin.com.br', href: 'mailto:contato@maluzin.com.br' },
              { icon: MapPin,   title: 'Localização',         text: 'Rio de Janeiro — RJ' },
              { icon: Clock,    title: 'Horário',             text: 'Seg a Sex: 8h–18h • Sáb: 8h–13h' },
            ].map(({ icon: Icon, title, text, href }) => {
              const Wrapper: any = href ? 'a' : 'div'
              return (
                <Wrapper
                  key={title}
                  href={href}
                  className="flex items-start gap-4 p-4 rounded-xl border border-ink-100 hover:border-brand-200 hover:bg-brand-50/40 transition group"
                >
                  <div className="size-11 grid place-items-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ink-500 font-bold">{title}</div>
                    <div className="font-bold text-ink-900">{text}</div>
                  </div>
                </Wrapper>
              )
            })}
          </div>

          <a href={`${WHATSAPP}?text=Ol%C3%A1%20Maluzin!`} target="_blank" rel="noreferrer" className="btn-primary mt-8">
            <MessageCircle size={20} />
            Conversar agora
          </a>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="card p-7 md:p-8 self-start">
          <h3 className="text-xl font-bold text-ink-900">Envie sua mensagem</h3>
          <p className="text-sm text-ink-500 mt-1">Retornamos em poucos minutos.</p>

          <div className="mt-6 grid gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink-600">Nome *</label>
              <input className="input mt-1.5" value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-ink-600">E-mail *</label>
                <input className="input mt-1.5" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@email.com" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-ink-600">Telefone</label>
                <input className="input mt-1.5" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(21) 9 0000-0000" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink-600">Mensagem *</label>
              <textarea className="input mt-1.5" rows={5} value={msg} onChange={e => setMsg(e.target.value)} placeholder="Conte o que você precisa..." />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send size={18} />
              Enviar mensagem
            </button>

            {status && (
              <div
                className={`text-sm rounded-lg px-3 py-2 ${
                  status.type === 'err' ? 'bg-red-50 text-red-700 border border-red-100' :
                  status.type === 'ok'  ? 'bg-green-50 text-green-700 border border-green-100' :
                                          'bg-ink-50 text-ink-700 border border-ink-100'
                }`}
              >
                {status.text}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
