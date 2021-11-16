import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/BBB.jpg';
import Image2 from 'assets/img/BW.jpg';
import Image3 from 'assets/img/WP.jpg';
import Image4 from 'assets/img/GG.jpg';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="We pair you with great local companies and idividuals to fit your needs">
                Radiation suit, of course, cause all of the fall out from the atomic wars.  This is truly amazing, a portable television studio.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Ryan Tompson"
                        position="Hi, I am Ryan. I love organizing and giving people a great experience!"
                    />
                    <TeamCard
                        img={Image2}
                        name="Romina Hadid"
                        position="I offer a flexible schedule!"
                    />
                    <TeamCard
                        img={Image3}
                        name="Alexa Smith"
                        position="Working with Clean Freak has given me the opportunity to make money on the side. It's easy to sign up and start working!"
                    />
                    <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="I joined Clean Freak because I wanted to give people more time to do more of what they love. I can offer that. I am fast and efficient. It's important to me to give you a clean space."
                    />
                </div>
            </div>
        </section>
    );
}
