import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ListMusic } from '~/interfaces/Music'
import { Layout } from '~/layouts'
import { service } from '~/services'

MusicDetail.PageLayout = Layout.MusicsLayout

export default function MusicDetail () {
  const router = useRouter()
  const { id } = router.query

  const [music, setMusic] = useState<ListMusic>()

  useEffect(() => {
    if (id !== undefined) {
      service.api.get(`musics/${id}`)
        .then(res => setMusic(res.data))
        .catch(err => alert(err))
    }
  }, [id])

  if (typeof music === 'undefined') return <span className='text-white'>Nao conseguimos carregar a musica</span>

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-3'>
        <span className='text-primary'>
          {music.name.toUpperCase()}
        </span>
        <span className='text-primary text-opacity-80'>
          {music.compositor}
        </span>

        <p className='whitespace-pre-line text-white'>{music.lyric}</p>
      </div>
    </div>
  )
}
