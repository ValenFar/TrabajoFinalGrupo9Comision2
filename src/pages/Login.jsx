import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "../css/login.css"
import useAuth from '../hooks/useAuth';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const { login, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
        if(user?.rol === 'Admin'){
            navigate('/Editar');
        }else if (user?.rol === 'User'){
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
      setLoginError('Por favor, ingrese un usuario y una contraseña válida.')
      return;
    }
    const result = login({ username, password });

    if (!result.success) {
      setLoginError(result.message || 'Error de autenticación.')
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="d-flex justify-content-center align-items-center h-100"
    >
      {!isAuthenticated && (
        <Container className="py-5">
          <Card className="border-0 shadow-lg overflow-hidden rounded-5" >
            <Row className="g-0">
              {/* Logo y fondo a la izquierda */}
              <Col md={6} className="bg-login bg-gradient d-flex flex-column justify-content-center align-items-center p-5" 
                >
                <div className="text-center">
                  <img
                    src="/ShoppiNineLogo.png"
                    alt="ShoppiNine Logo"
                    className="img-fluid mb-4"
                    style={{ maxHeight: "250px" }}
                    
                  />
                  <h2 className="text-white fw-bold mb-3">¡Bienvenido de vuelta!</h2>
                  <p className="text-white opacity-75">
                    Accede a tu cuenta para ver tus productos favoritos y mas.
                  </p>
                </div>
              </Col>

              {/* Formulario de login a la derecha */}
              <Col md={6}>
                <div className="p-5">
                  <h2 className="fw-bold mb-4">Iniciar Sesion</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Ingresa tu usuario"
                        value={username}
                        onChange={(e) => {setUserName(e.target.value); setLoginError('')}}
                        className="py-2"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value); setLoginError('')}}
                        className="py-2"
                      />
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="button-login w-100 py-2 mt-3 mb-3"
                    >
                      Iniciar Sesion
                    </Button>

                    <Button 
                      variant="primary" 
                      type="button" 
                      className="button-invitado w-100 py-2"
                      onClick={() => navigate("/")}
                    >
                      Entrar como Invitado!
                    </Button>

                    {loginError && (
                      <Alert variant="danger" className="mt-4">
                        <Alert.Heading className="fs-6">Ha ocurrido un error:</Alert.Heading>
                        <p className="mb-0">{loginError}</p>
                      </Alert>
                    )}

                    <div className="text-center mt-4 text-muted">
                      
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      )}
    </motion.div>
  );
}
