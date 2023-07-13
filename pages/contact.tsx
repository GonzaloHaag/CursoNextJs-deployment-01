
import { Inter } from 'next/font/google'

import MainLayout from '@/componentes/layouts/MainLayout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() { //No se tiene que llamar igual que el componente
  return (
    <MainLayout>
      {/*Aqui dentro ira lo que se manda como children
      es decir, lo unico que cambia en cada pagina */}
        <h1>Contact page</h1>
      <p>
            Get started by editing&nbsp;
            <code>pages/contact.tsx</code>
          </p>
        <h3 className={'title'}>
          {/* Ir a <a href='/about'>About</a> */}
          Ir a <Link href='/'>Home</Link>
          {/*Esto evita el refresh al moverme a otra pagina */}
        </h3>
    </MainLayout>
 
  )
}