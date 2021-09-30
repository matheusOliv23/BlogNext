import { useEffect, useState, useParams } from 'react'
import styles from '../../styles/Artigo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Artigo({ posts }) {
  const router = useRouter()
 /* const [artigo, setArtigo] = useState([])

  axios
    .get('http://localhost:5000/posts')
    .then(response => {
      setArtigo(response.data)
    })
    .catch(() => {
      console.log('deu errado')
    })*/

  return (
    <div>
      <Header />
      <main className={styles.artigo}>
        <div className={styles.titulo_artigo}>
          <h2>Post:{router.query.id}</h2>
          <h2>{posts.titulo}</h2>
        </div>
        <div className={styles.texto_artigo}>{posts.texto}</div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await fetch('http://localhost:5000/posts').then(resposta =>
    resposta.json()
  )

  const paths = posts.map(item => ({
    params: {
      id: item.id.toString()
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const posts = await fetch(`http://localhost:5000/posts/${params.id}`).then(
    resposta => resposta.json()
  )

  return {
    props: {
      posts
    }
  }
}
