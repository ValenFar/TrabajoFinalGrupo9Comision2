const style_text = {
    display: 'unset',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4rem 1.5rem 0.4rem 1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
    position: 'relative',
    width: 'auto',
    marginRight: '0.1rem',
}



export default function Etiqueta({ children }) {
    return (
        <>
        <strong style={ style_text }>
            {children} 
        </strong>
        </>
    )
}

