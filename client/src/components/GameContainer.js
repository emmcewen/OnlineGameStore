import React, { useState } from 'react';
<<<<<<< HEAD
import Navbar from "./Nav/Navbar"
=======
import Navbar from './Navbar';
>>>>>>> 3a30ca8598fe9f1823e84b37a365bb8e93c63bee
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
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
 