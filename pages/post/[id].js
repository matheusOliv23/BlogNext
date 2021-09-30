import styles from '../../styles/Artigo.module.css'
import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Artigo({ artigo }) {
  const router = useRouter()

  return (
    <div>
      <Header />
      <main className={styles.artigo}>
        <div className={styles.titulo_artigo}>
          <h2>Post:{router.query.id}</h2>
          <h2>{artigo.titulo}</h2>
        </div>
        <div className={styles.texto_artigo}>{artigo.texto}</div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const artigo = await fetch('http://localhost:5000/posts')
    .then(resposta => resposta.json())
    .then(respostaObjeto => respostaObjeto)

  const paths = artigo.map(item => ({
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
  const artigo = await fetch(`http://localhost:5000/posts/${params.id}`)
    .then(resposta => resposta.json(resposta))
    .then(respostaObjeto => respostaObjeto)

  return {
    props: {
      artigo
    }
  }
}
