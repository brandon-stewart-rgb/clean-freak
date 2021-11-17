import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/1.jpeg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="brown" icon="stars" title="Bronze">
                        This is our most basic package. Bi-monthly cleanings. Have your home cleaned well! Enjoy More time for you. 

                        <h1 className='price'>$30/month</h1>
                    </StatusCard>
                    <StatusCard
                        color="gray"
                        icon="autorenew"
                        title="Silver"
                    >
                        Bi-Weekly cleanings! Keep your home sparkling clean all the time. Let us do the hard work!
                        <h1 className = 'price'> $60/month </h1>
                    </StatusCard>
                    <StatusCard
                        color="yellow"
                        icon="fingerprint"
                        title="Gold"
                    >
                        The gold package is great for AirBNB's and offices, receive a special rate for daily cleanings.

                        <h1 className='price'>$90/month</h1>
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Working with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            “Cleaning and organizing is a practice, not a project.”
                            — Meagan Francis
                        </LeadText>
                        <LeadText color="blueGray">
                            “For every minute spent on organizing, an hour is earned.”
                            — Benjamin Franklin
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Top Notch Services</H6>
                                <Paragraph color="blueGray">
                                    “When your environment is clean you feel happy motivated and healthy.”
                                    — Lailah Gifty Akita

                                    “When all else fails, cleaning house is the perfect antidote to most of life’s ills.”
                                    — Sue Grafton
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
