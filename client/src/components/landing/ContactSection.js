import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Build something">
                    “Cleaning is my favorite way to relax. I clear things out and get rid of the stuff I don’t need. When the food pantry and the refrigerator are organized, I feel less stressed.”
                    — Jennifer Morrison

                    “The objective of cleaning is not just to clean, but to feel happiness living within that environment.”
                    — Marie Kondo
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="Excellent Services">
                        “Outer order contributes to inner calm.”
                        — Gretchen Ruben
                        “Clean your space, clear your mind.”
                        — Unknown
                        Do what you can, and concentrate on the areas that have the most impact. See how you feel about your space — and yourself — after a week or a month, and adjust from there.
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Grow Your Market">
                        “Once you learn how to see how your inner turmoil manifests itself through your surroundings, you can reverse engineer this, mastering yourself by mastering the space in which you live.”
                        — Shoukei Matsumoto, A Monk’s Guide to a Clean House and Mind
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                        “Spring cleaning isn’t just about sorting through things, and getting rid of clutter.  It’s about taking stock of who you are, and how others see you.  It’s a chance to redefine yourself, to change expectations, and to remember that it’s never too late to recapture who you were, or to aim for where you want to be.”
                        — Unknown

                        
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
