import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MusicsLayout } from '../../layout/MusicsLayout'
import { api } from '../../services/api'

MusicDetail.PageLayout = MusicsLayout

type MusicData = {
  name: string
  compositor: string
  lyric: string
}

export default function MusicDetail () {
  const router = useRouter()
  const { id } = router.query

  const [music, setMusic] = useState<MusicData>()

  useEffect(() => {
    if (id !== undefined) {
      api.get(`musics/${id}`).then(res => setMusic(res.data))
    }
  }, [id])

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-3'>
        <span className='text-primary'>{music?.name.toUpperCase()}</span>
        <span className='text-primary text-opacity-80'>{music?.compositor}</span>

        <p className='whitespace-pre-line text-white'>{music?.lyric}</p>
      </div>
    </div>
  )
}
