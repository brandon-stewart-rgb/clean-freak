import Button from '@material-tailwind/react/Button';
import DashCard from 'components/dashboard/DashCard';
import History from 'components/dashboard/History';
// import StatusCard from 'components/landing/StatusCard';
import H4 from '@material-tailwind/react/Heading4';
import DateDisplay from 'components/dashboard/DateDisplay';
// import MultipleCal from 'components/services/MultipleCal'
import '../../assets/styles/custom-styles.css'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from 'utils/queries';

export default function Content() {
	const {loading, data: userData} = useQuery(QUERY_ME);
	console.log(userData)
	if(loading){
		return <div>Loading...</div>
	}
	return (
		<section className="relative py-16 bg-gray-100">
			<div className="container max-w-7xl px-4 mx-auto">
				<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
					<div className="px-6">
						<div className="flex flex-wrap justify-center">
							<div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10lg:justify-end lg:mt-0">
								<Button color="lightBlue" ripple="light" className=" mr-5">
									<i class="fas fa-user " size="xl"></i>
									You have (x) items in cart
								</Button>
							</div>

							<div className="w-full lg:w-4/12 px-4 lg:order-1">
								<div className="flex justify-center py-4 lg:pt-4 pt-8">
									<div className="mr-4 p-3 text-center">
										<span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
											Welcome: {userData.me.username}
										</span>
										<span className="text-sm font-light block uppercase tracking-wide text-gray-900">
											4 star customer
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="text-center my-3">
							<H4 color="gray">Your Cleaning Package</H4>
						</div>

						<section className="pb-10 pt-10 bg-gray-100 mt-10 mb-6">
							<div className="container max-w-full mx-auto px-4">
								<div className="flex flex-wrap relative z-50">
									<DashCard
										color="brown"
										icon="stars"
										title="Bronze | Bi-monthly cleanings."
									>
										{/* need to grab orders here as well conditionally render their personal order */}
										<h1 className="price-2">$30/month</h1>
										<p className="text-l font-medium">
											<span>Start Date One</span> 11/12/21 |
											<span>Start Date Two</span> 11/17/21
										</p>

										<p>
											<DateDisplay />
										</p>

										<button
											href="/"
											className="mt-5 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5"
										>
											Check Out
										</button>
									</DashCard>

									<History>
										<h1 className="price">Next Service Date</h1>

										<ul className="history" style={{marginBottom: '50%'}}>
											{/* need to grab order date from order query */}
											<li>Bronze Package 11/30/21</li>
										</ul>

										<p className="text-l font-medium"></p>
									
										<h1 className="price">Last Service Date</h1>

										<ul className="history">
											{/* need to grab order date from order query */}
											<li>Bronze Package 11/15/21</li>
										</ul>

										<p className="text-l font-medium"></p>
									</History>

								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
}
