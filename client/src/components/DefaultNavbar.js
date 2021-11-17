import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
// import Dropdown from '@material-tailwind/react/Dropdown';
// import DropdownItem from '@material-tailwind/react/DropdownItem';
// import Icon from '@material-tailwind/react/Icon';
// import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
	const [openNavbar, setOpenNavbar] = useState(false);
	const logout = event => {
		event.preventDefault();
		Auth.logout();
	}

	return (
		<Navbar color="transparent" navbar>
			<NavbarContainer>
				<NavbarWrapper>
					<a href="/" target="_self" rel="noreferrer">
						<NavbarBrand>CLEAN FREAK</NavbarBrand>
					</a>
					<NavbarToggler
						onClick={() => setOpenNavbar(!openNavbar)}
						color="white"
					/>
				</NavbarWrapper>

				<NavbarCollapse open={openNavbar}>
					
						<Nav>
						<div className="flex flex-col z-50 lg:flex-row lg:items-center">
							<NavLink>
										<Link
											to="/"
											target="_self"
											rel="noreferrer"
											ripple="light"
										>
											home
										</Link>
									</NavLink>
							{/* comment this auth out to see all navbar and be able to work on other pages */}
							{Auth.loggedIn() ? (
									<>
									
									<NavLink>
										<Link
											to="/services"
											target="_self"
											rel="noreferrer"
											ripple="light"
										>
											services
										</Link>
									</NavLink>
									<NavLink>
										<Link
											to="/dashboard"
											target="_self"
											rel="noreferrer"
											ripple="light"
										>
											dashboard
										</Link>
									</NavLink>
									<NavLink>
										<Link
											to="/checkout"
											target="_self"
											rel="noreferrer"
											ripple="light"
										>
											checkout
										</Link>
									</NavLink>
									<NavLink>
										<Link
											to="/"
											onClick={logout}
											target="_self"
											rel="noreferrer"
											ripple="light"
										>
											logout
										</Link>
									</NavLink>


									{/* <div className="text-white">
								<Dropdown
									color="transparent"
									size="sm"
									buttonType="link"
									buttonText={
										<div className="py-2.5 font-medium flex items-center">
											<Icon name="view_carousel" size="2xl" color="white" />
											<span className="ml-2">Templates</span>
										</div>
									}
									ripple="light"
								>
									<Link to="/">
										<DropdownItem color="lightBlue">Landing</DropdownItem>
									</Link>
									<Link to="/profile">
										<DropdownItem color="lightBlue">Profile</DropdownItem>
									</Link>
									<Link to="/login">
										<DropdownItem color="lightBlue">Login</DropdownItem>
									</Link>
									<Link to="/register">
										<DropdownItem color="lightBlue">Register</DropdownItem>
									</Link>
								</Dropdown>
							</div> */}
									{/* <NavLink
										href="https://github.com/brandon-stewart-rgb/clean-freak"
										target="_blank"
										rel="noreferrer"
										ripple="light"
									>
										<Icon family="font-awesome" name="fab fa-github" size="xl" />
										&nbsp;Github
									</NavLink>

									<a
										href="https://www.creative-tim.com/product/material-tailwind-kit-react"
										target="_blank"
										rel="noreferrer"
									>
										<Button
											color="transparent"
											className="bg-white text-black ml-4"
											ripple="dark"
										>
											Free Download
										</Button>
									</a> */}
									</>
									
							) :
									<>
									<NavLink>
										<Link
											to="/login"
											target="_self"
											rel="noreferrer"
											ripple="light"
										>
											login
										</Link>
									</NavLink>
									<NavLink>
										<Link
											to="/register"
											target="_self"
											rel="noreferrer"
											ripple="light"
										>
											register
										</Link>
									</NavLink>
									
								</>
						 } 

						</div>
					</Nav>			
				</NavbarCollapse>
			</NavbarContainer>
		</Navbar>
	);
}
