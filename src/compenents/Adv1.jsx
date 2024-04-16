import React from 'react';

function Adv1({ yugiohIndex, setYugiohIndex, yugiohList }) {
  return (
    <div className="Player1">
      {yugiohList.map((yugioh, index) => (
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

export default Adv1;