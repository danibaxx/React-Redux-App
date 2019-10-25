import React from 'react';

function Pokemon() {
  return (
    <>
    <h1>Pokemon Type Selector App</h1>

      <select>
        <option value='doberman'>Doberman</option>
        <option value='bullterrier'>Pitbull</option>
        <option value='dane'>Dane</option>
      </select>

      <input 
        type='number'
        placeholder='Image Count'
        // value={count}
        // onChange={e => setCount(e.target.value)}
      />
      <div>
        {/* {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt='Dog' 
          />
        ))} */}
      </div>
    </>
  );
};

export default Pokemon;