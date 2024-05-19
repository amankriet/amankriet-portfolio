import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="snap-start h-full">
            <div className="container mx-auto w-full h-full text-4xl grid content-center justify-center text-gray-500">
                <h2 className="text-7xl">Contact</h2>
                <p className="text-2xl text-white">If you'd like to get in touch, please email me at <a className={'text-primary hover:text-primary-700'} href="mailto:amankriet@gmail.com">amankriet@gmail.com</a></p>
            </div>
        </section>
    );
}
