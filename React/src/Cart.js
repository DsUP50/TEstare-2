import React from 'react';
import { Box, Button } from '@chakra-ui/react';

function Cart({ cart, removeFromCart, finalizeazaComanda }) {
  return (
    <Box p="4" mt="4">
      <h1>Coș de cumpărături</h1>
      {cart.map(produs => (
        <div key={produs.id}>
          <h2>{produs.nume}</h2>
          <p>{produs.descriere}</p>
          <img src={produs.imagine} alt={produs.nume} style={{ width: "200px", height: "200px" }} />
          <h3>{produs.pret} lei</h3>
          <button onClick={() => removeFromCart(produs)}>Remove from cart</button>
        </div>
      ))}
      <Button mt="4" colorScheme="blue" onClick={finalizeazaComanda}>Finalizează comanda</Button>
    </Box>
  );
}

export default Cart;

