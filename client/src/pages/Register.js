import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
// import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
// import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import "../assets/styles/image-styles.css";

const Register = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log({...formState})
        try {
            const {data} = await addUser({
                variables: { email: formState.email, username: formState.username, password: formState.password }
            })
            console.log(data)
            Auth.login(data.addUser.token);
        } 
        catch (e) {
            console.log(e);
        }
    };
    return (
        <Page>
            <DefaultNavbar />
            <Container>
            {/* <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
              {error && <div>Login failed</div>}
            </form> */}
                <Card>
                    <form onSubmit={handleFormSubmit}>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Register
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                className='form-input'
                                id='username'
                                name='username'
                                color="lightBlue"
                                placeholder="Your username"
                                iconName="account_circle"
                                value={formState.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                color="lightBlue"
                                iconName="email"
                                className='form-input'
                                placeholder='Your email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                color="lightBlue"
                                iconName="lock"
                                className='form-input'
                                placeholder='******'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <button
                                type='submit'
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Register
                            </button>
                            {error && <div>Sign up failed</div>}
                        </div>
                    </CardFooter>
                    </form> 
                 </Card>
            </Container>
            {/* <SimpleFooter /> */}
        </Page>
    );
}
export default Register;