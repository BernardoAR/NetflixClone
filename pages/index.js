import Head from 'next/head';

export default function Home() {
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen py-2 bg-black'
      style={{
        'background-image': 'linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%)), url(/hero-bg.jpg)',
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center '>
        <h1 className='text-5xl font-bold text-white max-w-2xl'>Filmes, séries e muito mais. Sem limites.</h1>
        <h2 className='text-2xl text-white my-4 mb-8'>Assista onde quiser. Cancele quando quiser.</h2>
        <p className='text-white text-lg'>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
        </p>
        <div className='flex mt-4'>
          <input placeholder='Email address' className='bg-white p-4 min-w-[400px]' />
          <buttion className='flex items-center bg-[#e50914] text-white text-xl px-8'>
            Vamos lá
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </buttion>
        </div>
      </main>
    </div>
  );
}
