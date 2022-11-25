import Image from 'next/image'

export default function Home () {
  return (
    <div className='w-full h-full'>
      <div className='bg-gray-700 h-44 w-full mb-10'>
        <Image
          src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d1b7a96-177e-451d-b605-89d9f80a4ccd%2FIMG-20221014-WA0001.jpg?table=block&id=f5cec6b7-c803-4282-a3aa-0df614e11e5d&spaceId=3614065e-34fd-4dc6-b748-6decc6487d23&width=2000&userId=26e330f6-54bf-4fe8-ab38-4ab02a098293&cache=v2'
          alt='Banner 170 anos da escola sabatina'
          width={500}
          height={500}
          className='h-full w-full object-cover'
        />
      </div>

      <div>
        <div className='px-10'>
          <span className='text-sm text-primary'>FIQUE POR DENTRO</span>
        </div>

        <div className='bg-gray-700 h-96 w-full'>
          <Image
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2de67eb4-d8b8-4ad0-a220-2e9bab78741f%2FWhatsApp_Image_2022-11-25_at_16.53.53.jpeg?table=block&id=f3d64738-9b69-478c-b4bf-bdb65fc4a75d&spaceId=3614065e-34fd-4dc6-b748-6decc6487d23&width=1720&userId=26e330f6-54bf-4fe8-ab38-4ab02a098293&cache=v2'
            alt='Image of Activities'
            width={500}
            height={500}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}
