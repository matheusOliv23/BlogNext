import styles from '../../styles/Card.module.css'
import Link from 'next/link'
import Artigo from '../../pages/[artigo]'

export default function Posts({ conteudo, excluirPost, excluircard }) {
  return (
    <div className={styles.cards}>
      <div className={styles.custom_card}>
        <div className={styles.img_card}></div>
        <div className={styles.card_text}>
          <Link href="/artigo/id">
            <a> {conteudo.titulo} </a>
          </Link>

          <div className={styles.text}>{conteudo.descricao}</div>
          <div className={styles.text}>Publicado em 20/09/2021</div>
          <div className={styles.text}>{conteudo.autor}</div>
          <div>{conteudo.texto}</div>
          <div className={styles.btn_del}>
            <button onClick={excluirPost}>Deletar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
