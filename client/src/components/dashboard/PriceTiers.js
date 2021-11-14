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
        <section className="pb-10 pt-10 bg-gray-100 mt-10">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="brown" icon="stars" title="Bronze">
                         Bi-monthly cleanings. 

                        <h1 className='price'>$30/month</h1>
                       
                        <button href='/' 
                        class="font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5">
                        Add To Cart</button>


                    </StatusCard>
                    <StatusCard
                        color="gray"
                        icon="autorenew"
                        title="Silver"
                    >
                        Bi-Weekly cleanings.
                        <h1 className = 'price'> $60/month </h1>

                        <button href='/' 
                        class="font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5">
                        Add To Cart</button>

                    </StatusCard>
                    <StatusCard
                        color="yellow"
                        icon="fingerprint"
                        title="Gold"
                    >
                        
                        Daily Cleanings.

                        <h1 className='price'>$90/month</h1>
                        <button href='/' 
                        class="font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5">
                        Add To Cart</button> 

                    </StatusCard>
                </div>

               
            </div>
        </section>
    );
}
