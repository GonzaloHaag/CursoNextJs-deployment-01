
import Link from 'next/link'
import MainLayout from '@/componentes/layouts/MainLayout'


export default function HomePage() {
  return (
    <MainLayout>
      {/*Aqui dentro ira lo que se manda como children
      es decir, lo unico que cambia en cada pagina */}
        <h1>Home page</h1>
      <p>
            Get started by editing&nbsp;
            <code>pages/index.tsx</code>
          </p>
        <h3 className={'title'}> {/*Como es una clase global la pongo asi*/}
        
          {/* Ir a <a href='/about'>About</a> */}
          Ir a <Link href='/about'>About</Link>
          {/*Esto evita el refresh al moverme a otra pagina */}
        </h3>
    </MainLayout>
 
  )
}
