import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

type MusicData = {
  id: string
  name: string
  compositor: string
  lyric: string
}

export default function Musics () {
  const [musics, setMusics] = useState<MusicData[]>([])

  useEffect(() => {
    api.get('musics').then(res => setMusics(res.data))
  }, [])

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
