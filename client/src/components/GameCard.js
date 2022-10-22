// Example code to model ours from
//create map function 

import React from 'react';
import Cart from './Cart';
import AddToCart from '../AddedToCart/AddedToCart';
import Card from '../pages/Store';

const Card = props => {
    const { 
        game,
        handleAddToCart,
        handleHover,
        hoverState,
        handleLike,
        handleHoverGame,
        handleSelectGame
      } = props;

    return (
          <div 
            className={hoverState[1].selected === false ? styles.card : game.id === 26 ? styles.fifa : game.id === 12 ? styles.tombraider : game.id === 3 ? styles.mariokart : game.id === 11 ? styles.minecraft : styles.cardHome}
            onClick={handleSelectGame}
            id={game.id}
            style={{ margin: 0, padding: 0 }}
            variants={variants}
            initial="initial"
            exit="exit"
          >
            <img src={game.cover} className={styles.img} alt="Game Image" />
    
            <div className={styles.price}>
                    {game.inCart ? <AddedToCart /> : <AddToCart 
                                          game={game} 
                                          handleHoverGame={handleHoverGame} 
                                          handleAddToCart={handleAddToCart} 
                                        />
                    }
                ${game.price}
            </div>
            <h2 className={styles.name}>{game.name}</h2>
            <button 
              className={styles.like} 
              id={game.id} 
              onClick={handleLike} 
              aria-label="Like"
            >
                <Like 
                  style={{ fill: game.isLiked ? "#F53333" : "#cccccc" }} 
                  className={styles.likeSVG}
                />
            </button>
          </div>
    );
  }
  
  export default Card;
