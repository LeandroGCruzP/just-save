import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ListMusic } from '~/interfaces/Music'
import { service } from '~/services'

export default function Musics () {
  const [musics, setMusics] = useState<ListMusic[]>()

  useEffect(() => {
    service.api.get('musics')
      .then(res => setMusics(res.data))
      .catch(err => alert(err))
  }, [])

  if (typeof musics === 'undefined') return <span className='text-white'>Nao conseguimos carregar as musicas</span>

  return (
    <div className='flex flex-col gap-3 px-10'>
      {musics.map(music => (
        <div key={music.id} className='flex gap-3 items-center'>
          <div className='h-2 w-2 bg-primary rounded-full' />

          <Link href={{ pathname: `/musics/${music.name}`, query: { id: music.id } }} className='text-primary'>
            {music.name.toUpperCase()}
          </Link>
        </div>
      ))}
    </div>
  )
}
