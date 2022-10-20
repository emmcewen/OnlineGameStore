import React, { useState } from 'react';
// import Nav from './Nav';
import Store from '../pages/Store';
import SignupForm from '../components/SignupForm'
import LoginForm from './LoginForm'
import SingleGame from '../pages/SingleGame'


export default function GameContainer() {
  const [currentPage, setCurrentPage] = useState('Store');

  const renderPage = () => {
    if (currentPage === 'Store') {
      return <Store />;
    }
    if (currentPage === 'SignIn') {
      return <SignupForm />;
    }
    if (currentPage === 'SignIn') {
      return <LoginForm />;
    }
    if (currentPage === 'SingleGame'){
      return <SingleGame />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {renderPage()}
    </div>
  );
}
 