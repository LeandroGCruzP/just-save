import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea ({ ...rest }: TextAreaProps) {
  return (
    <textarea
      cols={1}
      rows={10}
      className='p-2 rounded-md'
      {...rest}
    />
  )
}
