
import StatusCard from 'components/landing/StatusCard';
import SingleCal from 'components/services/SingleCal'
import MultipleCal from 'components/services/MultipleCal'
import '../PriceModals.css'
import { useQuery } from '@apollo/client';
import {QUERY_ME} from '../../utils/queries';

export default function PriceModals() {
	const {loading, data: userData} = useQuery(QUERY_ME);
	console.log(userData)
	if(loading){
		return <div>Loading...</div>
	}
	return (
		<section className="pb-10 pt-10 bg-gray-100 mt-10 mb-6">
			<div className="container max-w-7xl mx-auto px-4">
				<div className="flex flex-wrap relative z-50">
					<StatusCard color="brown" icon="stars" title="Bronze">
					Bi-monthly cleanings.
						<h1 className="price">$30/month</h1>
								
						
				<div className="collapse bg-gray-100 rounded-box border-base-300   collapse-arrow">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium ">Get Started</div>
							
						<div className="collapse-content ">  
						<p className="text-l font-medium" >	
						Hello: {userData.me.username}
                        </p>  
                                
    					<MultipleCal />
                                
								<button
									href="/"
									className="mt-5 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5"
								>
									Purchase Service
								</button>
								
						</div>
				</div>



	

					</StatusCard>

					<StatusCard color="gray" icon="autorenew" title="Silver">
						Bi-Weekly cleanings.
						<h1 className="price"> $60/month </h1>
					
						<div className="collapse bg-gray-100 rounded-box border-base-300   collapse-arrow">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium ">Get Started</div>
							
						<div className="collapse-content ">  
						<p className="text-l font-medium" >	
						Hello: {userData.me.username}
                        </p>  
                                
    					<MultipleCal />
                                
								<button
									href="/"
									className="mt-5 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5"
								>
									Purchase Service
								</button>
								
						</div>
				</div>


					</StatusCard>



					<StatusCard color="yellow" icon="fingerprint" title="Gold">
						Daily Cleanings.
						<h1 className="price">$80/month</h1>
						

						<div className="collapse bg-gray-100 rounded-box border-base-300   collapse-arrow">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium ">Get Started</div>
							
						<div className="collapse-content "> 
						  
						<p className="text-l font-medium" >		
						Select Start Dates 
                        </p>  
						<p className="text-l font-medium">
							{userData.me.username}
						</p>
                                
    					<SingleCal />
                                
								<button
									href="/"
									className="mt-5 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5"
								>
									Purchase Service
								</button>
								
						</div>
				</div>



					</StatusCard>
				</div>
			</div>
		</section>
	);
}


//   // Bronze: {   WE NEED THIS INFO IN THE FRONT END SO IT CAN BE SAVED TO USER TO BE SAVED ON BUTTON PRESS
    //     type: String,
    //     required: true,
    //     unique: false,
    //     price: 49.99
    // },
    // Silver: {
    //     type: String,
    //     required: true,
    //     unique: false,
    //     price: 59.99
    // },
    // Gold: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     price: 69.99
    // }

	// drop down package if select gold list person and send to collect all the data of everything i want and model 