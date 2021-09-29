import Image from 'next/image'
import useSWR from 'swr'
import Card1 from '../components/Cards/Card1'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Link from 'next/link'
import Posts from '../components/Post/[Post]'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFetch } from '../components/Hooks/useFetch'

export default function Home() {
  const [posts, setPosts] = useState([])

  /*const fetcher = (...args) => axios.get(args).then(resp => resp)
  const swrClient = useSWR('http://localhost:5000/posts', fetcher)
*/
  /* if (!data) {
    return <p>Carregando</p>
  }*/

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

  /*function excluirPost(id) {
    axios.delete(`http://localhost:5000/posts/${posts.id}`).then(() => {
      setPosts(posts.filter(post => post.id !== id))
    })
  }*/

  return (
    <div>
      <Header />
      <Link href="/form">Ir para formulario</Link>
      {posts.map(post => (
        <Posts conteudo={post} />
      ))}
      <Card1 />
      <Footer />
    </div>
  )
}
