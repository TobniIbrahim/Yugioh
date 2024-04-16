import React from 'react';

function Adv2({ yugiohIndex, setYugiohIndex, yugioh }) {
  return (
    <div className="Player2">
      {yugioh.map((yugioh, index) => (
        <button
          key={index}
          onClick={() => setYugiohIndex(index)}
          className={index === yugiohIndex ? 'active' : ''}
        >
          {yugioh.name}
        </button>
      ))}
    </div>
  );
}

export default Adv2;