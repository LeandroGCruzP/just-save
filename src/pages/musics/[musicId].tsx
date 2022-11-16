import { useRouter } from 'next/router'
import { MusicsLayout } from '../../layout/MusicsLayout'

MusicDetail.PageLayout = MusicsLayout

export default function MusicDetail () {
  const router = useRouter()
  const { musicId } = router.query

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-3'>
        <span className='text-primary'>DESCANSAR - {musicId}</span>
        <span className='text-primary text-opacity-80'>Ministério Jovem</span>
      </div>

      <div className='text-white flex flex-col gap-3'>
        <p>
          Não quero viver pensando no amanhã,
          Eu quero é ser feliz!
          Dias vem e vão,
          Não irei temer,
          posso confiar em Ti.
        </p>

        <p>
          Se o futuro incerto é, basta olhar com os olhos da fé!
          E Descansar nos braços do Pai.
        </p>

        <p>
          [moças] Confiando em Tua proteção,
          [rapazes] Descansar
          [moças] Vou me entregar em Tuas mãos.
          [rapazes] Descansar
          [moças] Sei que cuidarás de mim Senhor,
          [rapazes] Descansar
          [todos] Ensina-me a descansar.
        </p>

        <p>
          Cada passo que eu der, seja onde estiver, quero entregar a Ti!
          Cada decisão, vou depor em Tuas mãos e esperar.
        </p>

        <p>
          Se das aves Deus cuida, sei que tenho muito mais valor.
          Posso esperar,
          [moças] e descansar nos braços do Pai.
        </p>

        <p>
          [moças] Confiando em Tua proteção,
          [rapazes] Descansar!
          [moças]Vou me entregar em Tuas mãos.
          [rapazes] Descansar!
          [moças]Sei que cuidarás de mim Senhor,
          [Todos]Ensina-me a descansar.
        </p>

        <p>
          Só em Teus braços encontro paz pra repousar;
          mesmo que os temores me vençam,
          vou descansar.
        </p>

        <p>
          [todos] Confiando em Tua proteção,
          Vou me entregar em tuas mãos.
          Sei que cuidarás de mim Senhor,
          Ensina-me a descansar.
        </p>
      </div>
    </div>
  )
}
