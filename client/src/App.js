import React from 'react';
import "./output.css";
import Store from './pages/Store';
import SingleGame from './pages/SingleGame';
import { Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Nav from './components/Nav';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className='navbar'>
                    <Nav />
                    <div className='container'>
                        <Routes>
                            <Route path="/"
                                element={<Store />}
                            />
                            <Route path="/games:gameId"
                                element={<SingleGame />}
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ApolloProvider>
    )
}