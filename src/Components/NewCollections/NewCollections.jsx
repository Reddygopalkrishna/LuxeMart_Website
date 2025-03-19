import React, { useRef } from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Items/Item';

const NewCollections = () => {
  const collectionRef = useRef(null);

  const scroll = (direction) => {
    if (collectionRef.current) {
      const scrollAmount = 300; // Adjust scroll speed
      collectionRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections-wrapper">
        <button className="scroll-button scroll-left" onClick={() => scroll('left')}>&#8249;</button>
        <div className="collections" ref={collectionRef}>
          {new_collection.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}
        </div>
        <button className="scroll-button scroll-right" onClick={() => scroll('right')}>&#8250;</button>
      </div>
    </div>
  );
};

export default NewCollections;
