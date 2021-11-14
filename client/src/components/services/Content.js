// import Button from '@material-tailwind/react/Button';
// import Image from '@material-tailwind/react/Image';
// import H3 from '@material-tailwind/react/Heading3';
// import Icon from '@material-tailwind/react/Icon';
// import LeadText from '@material-tailwind/react/LeadText';
// import ProfilePicture from 'assets/img/team-2-800x800.jpg';
import PriceModals from './PriceModals';


export default function Content() {
    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                          
                        <h1 class="text-black text-5xl font-serif font-bold leading-normal mt-4 mb-2">Services</h1>
  
                        </div>


                        <PriceModals />
        
                    </div>
                </div>
            </div>
        </section>
    );
}
