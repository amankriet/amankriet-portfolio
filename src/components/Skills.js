import React from "react";

export default function Skills() {
    return (
        <section id="skills" className="snap-start w-full h-full flex flex-col justify-center items-center">
            <div className={'container w-full h-full'}>
                <h2 className={'text-4xl font-bold flex flex-col items-center'}>Skills</h2>
                <ul className={'list'}>
                    <li>JavaScript (Node.js)</li>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>HTML5 & CSS3</li>
                    <li>Python</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>
        </section>
    );
}
