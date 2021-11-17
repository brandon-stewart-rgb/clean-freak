import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
// import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';
import Services from 'pages/Services';
import Checkout from 'pages/Checkout';
import "@material-tailwind/react/tailwind.css";

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  }); 

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <ApolloProvider client={client}>
        <Router>
        <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/checkout" component={Checkout} />
            <Redirect from="*" to="/" />
        </Switch>
        </Router>
    </ApolloProvider>
    );
}

export default App;
