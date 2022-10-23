import { ApolloProvider } from '@apollo/client';
import React from 'react';
import PageContainer from './components/PageContainer';
import "./output.css"
export default function App() {
    return (
        <>
            <ApolloProvider>
                <PageContainer />
            </ApolloProvider>
        </>
    )
}