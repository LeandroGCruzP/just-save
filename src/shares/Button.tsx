import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function Button ({ label, ...rest }: ButtonProps) {
  return (
    <button
      className='p-2 rounded-md bg-primary text-white font-semibold'
      {...rest}
    >
      {label}
    </button>
  )
}
