import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function Login () {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const { login, isAuthenticated, user } = useAuth();

  const navigate = useNavigate();


  useEffect(() => {
    if(isAuthenticated) {
        if(user?.rol === 'ADMINISTRADOR'){
            navigate('/Favoritos');
        }else if (user?.rol === 'USUARIO COMUN'){
            navigate('/Favoritos');
        }else{
            navigate('/Productos');
        }
    }
  },[isAuthenticated,navigate,user]);



  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginError('');

    if (!username || !password) {
        setLoginError('Por favor, ingrese un usuario y una contraseña valida.')
        return;
    }
    const result = login({ username, password });

    if(!result.success) {
        setLoginError(result.message || 'Error de autenticaión.')
    }
  };

  return (
    !isAuthenticated &&
    (<Container className="mt-5 py-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Usuario</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => {setUserName(e.target.value); setLoginError('')}}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => {setPassword(e.target.value); setLoginError('')}}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Iniciar Sesión
            </Button>
            {loginError && (<Alert variant="danger" className="my-3">
                <Alert.Heading >A ocurrido un error:</Alert.Heading>
                <p>
                {loginError}
                </p>
            </Alert>)}
          </Form>
        </Col>
      </Row>
    </Container>)
  );
};

