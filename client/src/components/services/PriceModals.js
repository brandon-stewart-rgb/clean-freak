
import StatusCard from 'components/landing/StatusCard';
import DatePicker from 'components/services/DatePicker'
import '../PriceModals.css'

export default function PriceModals() {
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
						Hello: Username
                        </p>  
                                
    					<DatePicker />
                                
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
						Hello: Username
                        </p>  
                                
    					<DatePicker />
                                
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
						<h1 className="price">$90/month</h1>
						

						<div className="collapse bg-gray-100 rounded-box border-base-300   collapse-arrow">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium ">Get Started</div>
							
						<div className="collapse-content ">  
						<p className="text-l font-medium" >	
						Hello: Username
                        </p>  
                                
    					<DatePicker />
                                
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
