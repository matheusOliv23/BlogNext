import { useEffect, useState, useParams } from 'react'
import styles from '../styles/Artigo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Artigo() {
  const [artigo, setArtigo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts/4')
      .then(response => {
        setArtigo(response.data)
      })
      .catch(() => {
        console.log('deu errado')
      })
  }, [])

  return (
    <div>
      <Header />
      <main className={styles.artigo}>
        <div className={styles.titulo_artigo}>
          <h2>{artigo.titulo}</h2>
        </div>
        <div className={styles.texto_artigo}>{artigo.texto}</div>
      </main>
      <Footer />
    </div>
  )
}
