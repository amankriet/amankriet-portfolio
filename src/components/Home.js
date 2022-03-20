import React from 'react'
// import programmingSvg from './assets/svg/programming.svg'

function Home() {

    return (
        <section id='home' className='snap-start w-screen h-screen flex relative mt-12 bg-no-repeat bg-right-bottom bg-programming-svg bg-75% md:bg-auto'>
            <div className='w-full flex flex-col text-center justify-center content-center'>
                <h1 className='text-6xl'>Hi, I'm Aman Kumar</h1>
                <h2 className='text-4xl'>Frontend Developer</h2>
                <div className='text-2xl mt-8'>
                    <ul className='list-disc list-inside'>
                        <li>Building cool apps that makes life easier.</li>
                        <li>Building projects from scratch.</li>
                        <li>Learning new techs.</li>
                        <li>Coding.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home