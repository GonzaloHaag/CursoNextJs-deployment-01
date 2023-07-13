
import MainLayout from '@/componentes/layouts/MainLayout'
import Link from 'next/link'
import DarkLayout from '@/componentes/layouts/DarkLayout'



export default function AboutPage() { //No se tiene que llamar igual que el componente
  return (
    <>
     
           {/*Aqui dentro ira lo que se manda como children
      es decir, lo unico que cambia en cada pagina */}
        <h1>About page</h1>
      <p>
            Get started by editing&nbsp;
            <code>pages/about.tsx</code>
          </p>
        <h3 className={'title'}>
          {/* Ir a <a href='/about'>About</a> */}
          Ir a <Link href='/contact'>Contact</Link>
          {/*Esto evita el refresh al moverme a otra pagina */}
        </h3>
    </>
 
  )
}

AboutPage.getLayout = function getLayout ( page : JSX.Element ) {
  //Indicamos que page sera un elemento de javascript
  return (
    //Aqui va el orden de los layout
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}