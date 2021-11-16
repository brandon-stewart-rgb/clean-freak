import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
// import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import "../assets/styles/image-styles.css";

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
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

        try {
            const { data } = await login({
                variables: { ...formState }
            });
            console.log(data)
            Auth.login(data.login.token);
        }
        catch (e) {
            console.log(e);
        }
        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <Page>
            <DefaultNavbar />
            <Container>
                <Card>
                <form onSubmit={handleFormSubmit}>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 5 }}>
                            Login
                        </H5>
                    </CardHeader>
                    
                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                className='form-input'
                                name='email'
                                id='email'
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                className='form-input'
                                name='password'
                                id='password'
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                                value={formState.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Remember Me"
                                id="remember"
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType='link'
                                type='submit'
                                size="lg"
                                ripple="dark"
                               
                            >
                                Login
                            </Button>
                            {error && <div>Login failed</div>}
                        </div>
                    </CardFooter>
                    </form>
                </Card>
            </Container>
            {/* <SimpleFooter /> */}
        </Page>
    );
}

export default Login;