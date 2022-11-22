import { FormEventHandler, useState } from 'react'
import { api } from '../services/api'

export default function Add () {
  const [name, setName] = useState('')
  const [compositor, setCompositor] = useState('')
  const [lyric, setLyric] = useState('')

  const handleCreateMusic: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (name === '' || compositor === '' || lyric === '') {
      console.log('ERROR: Without all registers')

      return
    }

    const data = {
      name,
      compositor,
      lyric
    }

    api.post('musics', data)
      .then(() => {
        setName('')
        setCompositor('')
        setLyric('')
      })
      .catch(err => console.log(err))
  }

  return (
    <form className='flex flex-col gap-2 p-4' onSubmit={handleCreateMusic}>
      <input
        type='text'
        onChange={e => setName(e.target.value)}
        placeholder='Name'
        className='p-2 rounded-md'
      />
      <input
        type='text'
        onChange={e => setCompositor(e.target.value)}
        placeholder='Compositor'
        className='p-2 rounded-md'
      />
      <textarea
        cols={1}
        rows={10}
        onChange={e => setLyric(e.target.value)}
        className='p-2 rounded-md'
        placeholder='Lyric with spaces separated'
      />

      <button className='p-2 rounded-md bg-primary text-white font-semibold' type='submit'>
        Create
      </button>
    </form>
  )
}
