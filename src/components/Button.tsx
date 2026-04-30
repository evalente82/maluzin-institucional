import React from 'react'

type Variant = 'primary' | 'ghost' | 'outline'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const cls =
    variant === 'primary' ? 'btn-primary' :
    variant === 'ghost'   ? 'btn-ghost'   :
                            'btn-outline'
  return (
    <button className={`${cls} ${className}`} {...rest}>
      {children}
    </button>
  )
}
