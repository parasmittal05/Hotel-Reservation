import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>
                  Discover a selection of our most popular dishes, handpicked by our chefs to showcase the finest flavors we offer. From succulent meats to fresh seafood and vibrant vegetarian options, each dish is crafted with precision and passion. These are the plates our guests rave about—an unforgettable culinary journey awaits.
                </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
