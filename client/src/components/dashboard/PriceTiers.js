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
                        This is our most basic package. Bi-monthly cleanings. 

                        <h1 className='price'>$30/month</h1>
                    </StatusCard>
                    <StatusCard
                        color="gray"
                        icon="autorenew"
                        title="Silver"
                    >
                        Bi-Weekly cleanings! This is great for...
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

               
            </div>
        </section>
    );
}
