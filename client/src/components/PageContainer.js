import React, { useState } from 'react';
import Navbar from "./Nav";
import Store from '../pages/Store';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Signup from '../pages/Signup'
import SingleGame from '../pages/SingleGame'
<<<<<<< HEAD


=======
>>>>>>> 9fec2ec3524afb451de82e7d87d7512a3bd48ac1

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Store');
  const [currentGame, setCurrentGame] = useState('');

  const renderPage = () => {
    if (currentPage === 'Store') {
      return <Store setCurrentPage={setCurrentPage} setCurrentGame={setCurrentGame}/>;
    }
    if (currentPage === 'SingleGame'){
      return <SingleGame currentGame={currentGame}/>;
    }
    if (currentPage === 'Cart'){
      return <Cart />;
    }
    if (currentPage === 'SingleGame') {
      return <SingleGame setCurrentGame={setCurrentGame}/>
    }
    if (currentPage === 'Login'){
      return <Login />;
    }
    if (currentPage === 'Signup'){
      return <Signup />;
    }

  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>

      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
 