import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardIntegrante = ({ nombre, git, correo }) => {
    return (
                  <Card className="text-center h-100 shadow-sm border-0 animate__animated animate__fadeInUp">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Desarrollador</Card.Text>
              </div>
              <div className="d-grid gap-2">
                <Button
                  variant="outline-primary"
                  href={correo}
                  className="mt-3"
                >
                  Correo de contacto
                </Button>
                <Button
                  variant="dark"
                  href={git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Perfil de GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
    );
};

export default CardIntegrante;