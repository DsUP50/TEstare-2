import React, { useState } from 'react';
import { Box, Heading, Input, Button } from '@chakra-ui/react';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <Box maxW="md" mx="auto" mt="4">
      <Heading as="h2" size="md" mb="4">Autentificare</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nume utilizator"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb="2"
        />
        <Input
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb="2"
        />
        <Button type="submit" colorScheme="blue">Autentificare</Button>
      </form>
    </Box>
  );
};

export default LoginForm;

