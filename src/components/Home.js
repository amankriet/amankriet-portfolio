import React from 'react'
// import programmingSvg from './assets/svg/programming.svg'

function Home() {

    return (
        <section id='home' className='box-border snap-start w-screen h-screen flex relative bg-no-repeat bg-right-bottom bg-programming-svg bg-contain md:bg-auto'>
            <div className='w-full max-h-36 md:mt-20 mt-14 flex flex-col text-4xl justify-items-center bg-sky-600 text-gray-200 text-left md:p-8 px-8 py-4'>
                <h1>Welcome, <br className='md:hidden' />I'm Aman Kumar.</h1>
                <h2 className='text-2xl'>Frontend Developer</h2>
            </div>
        </section>
    )
}

export default Home