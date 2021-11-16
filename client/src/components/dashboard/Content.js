import Button from '@material-tailwind/react/Button';
// import Image from '@material-tailwind/react/Image';
import StatusCard from 'components/landing/StatusCard';
// import H3 from '@material-tailwind/react/Heading3';
import H4 from '@material-tailwind/react/Heading4';
// import Icon from '@material-tailwind/react/Icon';
import MultipleCal from 'components/services/MultipleCal'
// import ProfilePicture from 'assets/img/926.jpeg';

import History from '../dashboard/History';

export default function Content() {
	return (
		<section className="relative py-16 bg-gray-100">
			<div className="container max-w-7xl px-4 mx-auto">
				<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
					<div className="px-6">
						<div className="flex flex-wrap justify-center">
							<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
								<div className="relative">
									<div className="w-40 -mt-20">
										{/*  */}
										{/* <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        /> */}
									</div>
								</div>
							</div>

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
											Welcome: Jane Doe User
										</span>
										<span className="text-sm font-light block uppercase tracking-wide text-gray-900">
											4 star customer
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="text-center my-3">
							<H4 color="gray">Your Scheduled Cleaning</H4>
						</div>



                        

						<section className="pb-10 pt-10 bg-gray-100 mt-10 mb-6">
							<div className="container max-w-7xl mx-auto px-4">
								<div className="flex flex-wrap relative z-50">

									<StatusCard color="brown" icon="stars" title="Bronze">
										Bi-monthly cleanings.
										<h1 className="price">$30/month</h1>
										<p className="text-l font-medium">
											<span>Start Date One</span> 12/25/21 <br />
											<span>Start Date Two</span> 12/25/21
										</p>
									</StatusCard>


									<div className="bg-white pb-10 pt-10">
										<div className="text-center my-8">
											<H4 color="gray">Change Date</H4>
										</div>

                                        <MultipleCal />

										<button
											href="/"
											className="mt-5 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-light-blue-500 hover:bg-light-blue-700 focus:bg-light-blue-400 active:bg-light-blue-800 shadow-md-light-blue hover:shadow-lg-light-blue  mr-5"
										>
											Check Out 
										</button>
									</div>




								</div>
							</div>
						</section>

						{/* 
                        <div className="text-center my-8">
                            <H3 color="gray">Jane Doe User</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                              Your Location <strong></strong>  Nephi, Utah
                            </div>
                           
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="account_balance" size="xl" />
                               Services paid to date:  <strong>$30.00</strong>
                            </div>
                        </div> */}

						<History />
					</div>
				</div>
			</div>
		</section>
	);
}
