import styles from '../../styles/Card.module.css'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'

export default function Posts({ conteudo, excluirPost, posts, setPosts }) {
  function excluirPost(id) {
    axios.delete(`http://localhost:5000/posts/${conteudo.id}`).then(() => {
      setPosts(posts.filter(post => post.id !== id))
    })
  }

  return (
    <div className={styles.cards}>
      <div className={styles.custom_card}>
        <div className={styles.img_card}></div>
        <div className={styles.card_text}>
          <Link href={`/post/${conteudo.id}`}>
            <a>{conteudo.titulo}</a>
          </Link>
          <div className={styles.text}>{conteudo.descricao}</div>
          <div className={styles.text}>Publicado em 20/09/2021</div>
          <div className={styles.text}>Autor: {conteudo.autor}</div>
          <div className={styles.btn_del}>
            <button onClick={() => excluirPost(conteudo.id)}>Deletar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
