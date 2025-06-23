import '../css/mensajeEmergente.css'

export default function MensajeEmergente({ mensaje, showMensaje = false }) {

  return (
    <>
      {showMensaje && (
        <div className="mensaje-emergente">
          <strong>{mensaje}</strong>
        </div>
      )
      }
    </>
  );
}