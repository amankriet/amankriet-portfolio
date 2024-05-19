import React from "react";

export default function Skills() {
    return (
        <section id="skills" className="snap-start w-full min-h-full flex flex-col justify-around items-center">
            <h2 className={'animate-bounce min-h-full'}>Skills</h2>
            <div className={'container w-full h-full grid md:grid-cols-3 gap-16 text-center'}>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>Programming Languages</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>JavaScript (Node.js)</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>Web Development</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>HTML5 & CSS3</li>
                        <li>React.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>Mobile App Development</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>Android App Development</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>Database Management</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>MySQL</li>
                        <li>PostgresSQL</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>FirebaseDB</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>Cloud Platform</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>Amazon Web Services</li>
                        <li>Microsoft Azure</li>
                        <li>Google Cloud Platform</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>UI/UX Design Tools</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>Adobe XD</li>
                        <li>Figma</li>
                        <li>Sketch.io</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>Testing Frameworks</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>Jest</li>
                        <li>Mocha</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <h3 className={'animate-pulse'}>Tools</h3>
                    <ul className={'*:text-gray-500'}>
                        <li>Git & GitHub</li>
                        <li>BitBucket</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>Jenkins</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
