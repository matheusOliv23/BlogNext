import Image from 'next/image'
import Card1 from '../components/Cards/Card1'
import Card2 from '../components/Cards/Card2'
import Card3 from '../components/Cards/Card3'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Posts from '../components/Post/Post'
import { useState } from 'react'

export default function Home() {
  const [cards, setCards] = useState([])

  return (
    <div>
      <Header />
      <Link href="/form">Ir para formulario</Link>
      {cards.map(card => (
        <Posts conteudo={card} />
      ))}
      <Card1 />
      <Footer />
    </div>
  )
}
