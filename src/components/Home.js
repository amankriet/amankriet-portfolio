import React from "react";

function Home() {
    return (
        <section
            id="home"
            className="snap-start w-full h-full">
            <div
                className="container mx-auto text-4xl flex flex-col h-full justify-center items-start text-primary text-left bg-no-repeat bg-contain bg-[position:max(72px,88%)] bg-my-pic bg-fixed">
                <div className="w-fit md:max-w-md h-fit text-center">
                    <h2 className="text-6xl font-semibold md:animate-pulse">Welcome! I'm Aman Kumar,</h2>
                    <h3 className="text-3xl text-gray-500 font-bold">a seasoned Full-Stack Developer (SDE-1) with 4+ years of
                        experience in Software Development.</h3>
                    <p className={'text-xl max-w-md text-white'}>I specialize in NodeJs, ExpressJs, ReactJs, MySQL, MongoDB,
                        AWS, Firebase, GCP and I'm passionate about travelling, gaming, music, etc.</p>
                    <a className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                       data-twe-ripple-init
                       data-twe-ripple-color="light"
                       href="#contact"
                       title={'Click to get my contact details'}
                       role="button">
                        Contact Me
                    </a>
                    <a className="inline-block rounded m-4 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                       data-twe-ripple-init
                       data-twe-ripple-color="light"
                       href="https://drive.google.com/file/d/1-die7l5PsNrFeISLLZ7wV7cd6nX6buNO/view?usp=drive_link"
                       target="_blank"
                       title={'Click to open my resume'}
                       role="button">
                        My Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
