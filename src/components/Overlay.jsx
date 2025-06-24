
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Overlay({ mensaje="Esto es un overlay", direction="left", children }) {
  return (
        <OverlayTrigger
          key={direction}
          placement={direction}
          overlay={
            <Tooltip id={`tooltip-${direction}`}>
              {mensaje}
            </Tooltip>
          }
        >
          {children}
        </OverlayTrigger>
  );
}
