import { FC } from "react";

interface DartLayoutProps {
  //Para indicar que voy a recibir childr
  children : React.ReactNode;
}


const DarkLayout : FC<DartLayoutProps> = ( {children} ) => {
  return (
    <div style={{
        backgroundColor : 'red',
        padding : '10px',
        borderRadius : '10px',
    }}>
        <h3>Dark Layout</h3>
        <div>
        { children }
        </div>

    </div>
  )
}

export default DarkLayout
