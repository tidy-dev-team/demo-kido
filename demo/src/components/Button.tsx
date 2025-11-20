import React from 'react'
import './Button.css'

type Size = 's' | 'm'
type Variant = 'contained' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  variant?: Variant
  iconL?: React.ReactNode
  active?: boolean
}

export default function Button({
  size = 'm',
  variant = 'ghost',
  iconL,
  active,
  children,
  ...rest
}: ButtonProps) {
  const classes = ['kido-btn', `size-${size}`, `variant-${variant}`]
  if (active) classes.push('active')

  return (
    <button className={classes.join(' ')} {...rest}>
      {iconL ? <span className="kido-btn-icon">{iconL}</span> : null}
      <span className="kido-btn-label">{children}</span>
    </button>
  )
}
