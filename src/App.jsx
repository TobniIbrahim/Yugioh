import React, { useState } from 'react';
import CardYugioh from './compenents/CardYugioh';  
import Adv1 from './compenents/Adv1'; 
import Adv2 from './compenents/Adv2';
import './App.css'; 

const yugioh = [
  { name: 'Dragon blanc au Yeux Bleux', imgSrc: 'https://www.db.yugioh-card.com/yugiohdb/get_image.action?type=1&osplang=1&cid=4007&ciid=1&enc=3J23UiPfYsw_epuIXLg9Zg&app=tournament&request_locale=fr' },
  { name: 'Magicien des ténébres', imgSrc: 'https://www.otk-expert.fr/cartes/yugioh_ext/STAS/STAS-49.jpg' },
  { name: 'Exodia le maudit', imgSrc: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_398,h_581/https://yugioh-vintage.com/wp-content/uploads/2020/12/754096.jpg' },
  { name: 'Magicienne des tenebres', imgSrc: 'https://m.media-amazon.com/images/I/51TmEqM5kzL._AC_SX148_SY213_QL70_.jpg' },
];

function App() {
  const [yugiohIndex, setYugiohIndex] = useState(0);
  const [advType, setAdvType] = useState('Adv1');  

  return (
    <div className="app">
      <CardYugioh yugioh={yugioh[yugiohIndex]} />

      {advType === 'Adv1' && (
        <Adv1
          yugiohIndex={yugiohIndex}
          setYugiohIndex={setYugiohIndex}
          yugiohList={yugioh}
        />
      )}

      {advType === 'Adv2' && (
        <Adv2 yugiohList={yugioh} />
      )}
    </div>
  );
}

export default App;