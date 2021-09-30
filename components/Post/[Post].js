import styles from '../../styles/Card.module.css'
import Link from 'next/link'
import axios from 'axios'

export default function Posts({ conteudo, excluirPost }) {
  function excluirPost(id) {
    axios.delete(`http://localhost:5000/posts/${conteudo.id}`)
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
            <button onClick={() => excluirPost(conteudo._id)}>Deletar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
