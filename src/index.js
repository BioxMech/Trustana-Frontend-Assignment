import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql"
});

ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
