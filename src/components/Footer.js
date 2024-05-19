import React from "react";
import fbIcon from "../assets/svg/fb.svg";
import ytIcon from "../assets/svg/yt.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import githubIcon from "../assets/svg/github.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";
import googleIcon from "../assets/svg/google.svg";

export default function Footer() {
    return (
        <section
            id="footer"
            className="snap-start w-full h-auto flex flex-col">
            <footer
                className="md:container mx-auto w-full h-56 flex flex-col items-center text-4xl p-8 text-gray-600 bg-varanasi-ghat bg-no-repeat bg-cover md:bg-bottom">
                <div className="w-3/4 h-fit text-xl font-semibold text-primary">
                    <h2>No <span>&#169;</span> copyright issues.</h2>
                </div>
                <div className="text-xl w-3/4 text-primary">
                    <a href={'%PUBLIC_URL%/PrivacyPolicy.html'}>Privacy Policy</a>
                </div>
                <div className="text-xl w-3/4 text-primary">
                    <p>You can find me here:</p>
                </div>
                <div className="text-xl w-3/4 flex flex-row gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100002247261527">
                        <img
                            src={fbIcon}
                            alt="Facebook"
                            loading="lazy"
                            className="h-5"/>
                    </a>
                    <a href="https://www.youtube.com/@amankriet">
                        <img
                            src={ytIcon}
                            alt="Youtube"
                            loading="lazy"
                            className="h-5"/>
                    </a>
                    <a href="https://www.instagram.com/nawaab.zaade/">
                        <img
                            src={instagramIcon}
                            alt="Instagram"
                            loading="lazy"
                            className="h-5"/>
                    </a>
                    <a href="https://github.com/amankriet">
                        <img
                            src={githubIcon}
                            alt="Github"
                            loading="lazy"
                            className="h-5"/>
                    </a>
                    <a href="https://twitter.com/amanmanojpreeti">
                        <img
                            src={twitterIcon}
                            alt="Twitter"
                            loading="lazy"
                            className="h-5"/>
                    </a>
                    <a href="https://www.linkedin.com/in/amankriet/">
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            loading="lazy"
                            className="h-5"/>
                    </a>
                    <a href="mailto:amankriet@gmail.com">
                        <img
                            src={googleIcon}
                            alt="Gmail"
                            loading="lazy"
                            className="h-5"/>
                    </a>
                </div>
            </footer>
        </section>
    );
}
