const questions = [
  { id: 1, description: 'Possui Lição da Escola Sabatina?' },
  { id: 2, description: 'Estudou a Bíblia, ou a Lição durante a semana?' },
  { id: 3, description: 'Ajudou alguém durante essa semana?' }
]

export default function Crm () {
  return (
    <div className='w-1/2 flex flex-col self-center gap-20'>
      {questions.map(question => (
        <div key={question.id} className='flex flex-col gap-3'>
          <div className='text-white text-xl bg-primary bg-opacity-10 p-10 rounded-xl'>
            <span>{question.description}</span>
          </div>

          <div className='flex gap-3'>
            <button className='h-10 w-full bg-bg-hover rounded-xl text-primary'>Não</button>
            <button className='h-10 w-full bg-primary rounded-xl text-white'>Sim</button>
          </div>
        </div>
      ))}

      <button className='h-10 w-full bg-primary rounded-xl text-white'>Enviar</button>
    </div>

  )
}
