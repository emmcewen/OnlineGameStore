import React, { useState } from 'react';
// import Nav from './Nav';
import Store from '../pages/Store';
import SingleGame from '../pages/SingleGame'


export default function GameContainer() {
  const [currentPage, setCurrentPage] = useState('Store');
  const [currentGame, setCurrentGame] = useState('');

  const renderPage = () => {
    if (currentPage === 'Store') {
      return <Store setCurrentPage={setCurrentPage} setCurrentGame={setCurrentGame}/>;
    }
    if (currentPage === 'SingleGame'){
      return <SingleGame currentGame={currentGame}/>;
    }
  };


  return (
    <div>
      {/* <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      {renderPage()}
    </div>
  );
}
 