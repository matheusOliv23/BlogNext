import Image from 'next/image'
import Card1 from '../components/Cards/Card1'
import Card2 from '../components/Cards/Card2'
import Card3 from '../components/Cards/Card3'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Posts from '../components/Post/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [cards, setCards] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then(response => {
        setPosts(response.data)
      })
      .catch(() => {
        console.log('deu errado')
      })
  }, [])

  return (
    <div>
      <Header />
      <Link href="/form">Ir para formulario</Link>
      {cards.map(card => (
        <Posts conteudo={card} />
      ))}
      {posts.map(posts => (
        <Posts conteudo={posts} />
      ))}
      <Card1 />
      <Footer />
    </div>
  )
}
