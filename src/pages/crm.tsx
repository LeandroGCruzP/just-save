const questions = [
  { question: 'Possui Lição da Escola Sabatina?' },
  { question: 'Estudou a Bíblia, ou a Lição durante a semana?' },
  { question: 'Ajudou alguém durante essa semana?' }
]

export default function Crm () {
  return (
    <div className='w-1/2 flex flex-col self-center gap-20'>
      {questions.map((question, index) => (
        <div key={index} className='flex flex-col gap-3'>
          <div className='text-white text-xl bg-primary bg-opacity-10 p-10 rounded-xl'>
            <span>{question.question}</span>
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
