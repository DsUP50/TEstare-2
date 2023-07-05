import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Image, Button, Flex, Spacer, Alert, AlertIcon } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Cart from './Cart';

const App = () => {
  const [produse, setProduse] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderComplete, setOrderComplete] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/produse/')
      .then(res => {
        setProduse(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      const groupedCart = savedCart.reduce((acc, item) => {
        const found = acc.find(i => i.id === item.id);
        if (found) {
          found.count++;
        } else {
          acc.push({ ...item, count: 1 });
        }
        return acc;
      }, []);
      setCart(groupedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const Header = ({ cart }) => (
  <Flex bg="blue.500" p="2" color="white">
    <Heading as="h1" size="md">Magazinul nostru</Heading>
    <Spacer />
    <Box mr="4">
      <Link to="/cart">Coșul meu ({cart.reduce((acc, item) => acc + item.count, 0)})</Link>
    </Box>
    <Box mr="4">
      <Link to="/produse">Produse</Link>
    </Box>
    {user ? (
      <Button ml="4" colorScheme="red" onClick={() => setUser(null)}>Deconectare</Button>
    ) : (
      <>
        <Link to="/login">
          <Button ml="4" colorScheme="blue">Autentificare</Button>
        </Link>
        <Link to="/register">
          <Button ml="2" colorScheme="blue">Înregistrare</Button>
        </Link>
      </>
    )}
  </Flex>
);

  const addToCart = (produs) => {
    const found = cart.find(i => i.id === produs.id);
    if (found) {
      found.count++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...produs, count: 1 }]);
    }
  };

  const removeFromCart = (produsToRemove) => {
    const found = cart.find(i => i.id === produsToRemove.id);
    if (found.count > 1) {
      found.count--;
      setCart([...cart]);
    } else {
      setCart(cart.filter(produs => produs.id !== produsToRemove.id));
    }
  };

  const finalizeazaComanda = () => {
    setOrderComplete(true);
    setCart([]);
    localStorage.removeItem('cart');
  };

  const handleLogin = (username, password) => {
    setUser({ username });
  };

  const handleRegister = (username, password) => {
    setUser({ username });
  };

  const Produse = () => (
    <Box p="4" mt="4">
      <Heading as="h2" size="lg" mb="4">Produse</Heading>
      <Flex flexWrap="wrap">
        {produse.map(produs => (
          <Box key={produs.id} borderWidth="1px" borderRadius="md" p="4" m="2" width="300px">
            <Image src={produs.imagine} alt={produs.nume} height="200px" objectFit="cover" mb="2" />
            <Heading as="h3" size="md" mb="2">{produs.nume}</Heading>
            <Text mb="2">{produs.descriere}</Text>
            <Text mb="4" fontWeight="bold">{produs.pret} lei</Text>
            <Button colorScheme="blue" onClick={() => addToCart(produs)}>Adaugă în coș</Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} finalizeazaComanda={finalizeazaComanda} />} />
        <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm handleRegister={handleRegister} />} />
        <Route path="/produse" element={<Produse />} />
        <Route path="/" element={<Navigate to="/produse" />} />
      </Routes>
      {orderComplete && (
        <Alert status="success">
          <AlertIcon />
          Comanda ta a fost finalizată cu succes!
        </Alert>
      )}
    </Router>
  );
};

export default App;

