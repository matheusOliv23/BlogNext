import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Posts from '../components/Post/[Post]'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts?_order=desc&_sort=id')
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
      {posts.map(post => (
        <li key={post}>
          <Posts conteudo={post} posts={posts} setPosts={setPosts} />
        </li>
      ))}
      <Footer />
    </div>
  )
}
