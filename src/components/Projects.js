import React from "react";

export default function Projects() {
    return (
        <section id="projects" className="snap-start h-full grid grid-cols-2 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="project">
                <h3 className={'text-2xl font-bold'}>Project Title 1</h3>
                <p>Description of Project 1. <a className={'hover:text-primary-700'} href="#github">View on GitHub</a></p>
            </div>
            <div className="project">
                <h3 className={'text-2xl font-bold'}>Project Title 2</h3>
                <p>Description of Project 2. <a className={'hover:text-primary-700'} href="#github">View on GitHub</a></p>
            </div>
        </section>
    );
}
