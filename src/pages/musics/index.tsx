import Link from 'next/link'

const musics = [
  { name: 'A MINHA ESPERANÇA' },
  { name: 'DESCANSAR' },
  { name: 'DESCASAREI' },
  { name: 'EM ESPÍRITO, EM VERDADE' },
  { name: 'ESCONDERIJO' },
  { name: 'ESPÍRITO, ENCHE A MINHA VIDA' },
  { name: 'GRANDE DEUS' },
  { name: 'ME CURA' },
  { name: 'O TEU PODER' },
  { name: 'OUSADO AMOR' },
  { name: 'SEJA O CENTRO' },
  { name: 'SOMOS TEUS' },
  { name: 'SONDA ME' },
  { name: 'TEU SANTO NOME' },
  { name: 'VOLTA' }
]

export default function Musics () {
  return (
    <div className='flex flex-col gap-3 px-10'>
      {musics.map((music, index) => (
        <div key={index} className='flex gap-3 items-center'>
          <div className='h-2 w-2 bg-primary rounded-full' />
          <Link href={`/musics/${music.name}`} className='text-primary'>{music.name}</Link>
        </div>
      ))}
    </div>
  )
}
