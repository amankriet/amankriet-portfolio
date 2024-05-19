import React from "react";

function Home() {
    return (
        <section
            id="home"
            className="snap-start w-screen h-full bg-no-repeat bg-contain bg-right bg-my-pic bg-fixed">
            <div
                className="container mx-auto text-4xl flex flex-col h-full justify-center items-start text-primary text-left">
                <div className="w-fit md:max-w-md h-fit text-center">
                    <h2 className="text-7xl font-semibold">Welcome! I'm Aman Kumar,</h2>
                    <h3 className="text-3xl">a seasoned Full-Stack Developer (SDE-1) with 4+ years of
                        experience in Software Development.</h3>
                    {/*<p className="text-xl max-w-md text-white">*/}
                    {/*    NodeJs, ExpressJs, ReactJs, MySQL, MongoDB,*/}
                    {/*    AWS, Firebase, GCP*/}
                    {/*</p>*/}
                    <p className={'text-xl max-w-md text-white'}>I specialize in NodeJs, ExpressJs, ReactJs, MySQL, MongoDB,
                        AWS, Firebase, GCP and I'm passionate about travelling, gaming, music, etc.</p>
                    <a className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                       data-twe-ripple-init
                       data-twe-ripple-color="light"
                       href="#contact"
                       role="button">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
