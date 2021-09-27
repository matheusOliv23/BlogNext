import Image from 'next/image'
import Card1 from '../components/Cards/Card1'
import Card2 from '../components/Cards/Card2'
import Card3 from '../components/Cards/Card3'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
      <Footer />
    </div>
  )
}
