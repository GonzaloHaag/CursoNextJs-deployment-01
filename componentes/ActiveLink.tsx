
//Debo indicar de q tipo de dato seran los parametros q voy a recibir

import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";


const stylesLink: CSSProperties = {
  //Importante el CSSPropiertes para poder ponerle una clase
  color : '#0070f3',
  textDecoration : 'underline'
}

interface Props {
  //Debo poner que tipo de dato seran las props que recibo
  text : string,
  href : string
}

const ActiveLink: FC<Props> = ({ text , href } ) => {

  // const router = useRouter();
  // console.log(router); //Me da mucha info de la pagina donde estoy parado

   const {asPath} = useRouter(); //Me da el nombre exacto de la ruta donde estoy parado

  return (
    <Link href={href} style={ asPath === href ? stylesLink : undefined }>
      {text}
    </Link>
  
  )
}

export default ActiveLink