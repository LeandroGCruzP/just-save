import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input ({ ...rest }: InputProps) {
  return (
    <input
      type='text'
      className='p-2 rounded-md'
      {...rest}
    />
  )
}
