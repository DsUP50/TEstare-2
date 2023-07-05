import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [produse, setProduse] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/produse/')
      .then(res => {
        setProduse(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Produse</h1>
      {produse.map(produs => (
        <div key={produs.id}>
          <h2>{produs.nume}</h2>
          <p>{produs.descriere}</p>
          <img src={produs.imagine} alt={produs.nume} style={{width: "200px", height: "200px"}}/>
          <h3>{produs.pret} lei</h3>
          <button onClick={() => addToCart(produs)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

