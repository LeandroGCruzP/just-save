import { FormEventHandler, useState } from 'react'
import { service } from '~/services'
import { Share } from '~/shares'

export default function Add () {
  const [name, setName] = useState<string>()
  const [compositor, setCompositor] = useState<string>()
  const [lyric, setLyric] = useState<string>()

  const handleCreateMusic: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (typeof name === 'undefined' || typeof compositor === 'undefined' || typeof lyric === 'undefined') {
      alert('ERROR: Without all registers')

      return
    }

    const data = {
      name,
      compositor,
      lyric
    }

    service.api.post('musics', data)
      .then(() => {
        setName(undefined)
        setCompositor(undefined)
        setLyric(undefined)
      })
      .catch(err => alert(err))
  }

  return (
    <form className='flex flex-col gap-2 p-4' onSubmit={handleCreateMusic}>
      <Share.Input
        placeholder='Nome'
        onChange={e => setName(e.target.value)}
      />
      <Share.Input
        placeholder='Compositor'
        onChange={e => setCompositor(e.target.value)}
      />
      <Share.TextArea
        placeholder='Letra completa com espaçamento entre parágrafos'
        onChange={e => setLyric(e.target.value)}
      />

      <Share.Button type='submit' label='Criar' />
    </form>
  )
}
