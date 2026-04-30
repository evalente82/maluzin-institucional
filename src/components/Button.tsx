import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', children, ...rest }: Props){
  const base = 'px-5 py-2 rounded-md font-medium'
  const cls = variant === 'primary' ? `${base} bg-primary-500 text-white` : `${base} bg-transparent border`
  return <button className={cls} {...rest}>{children}</button>
}
