import styles from '../../styles/Card.module.css'

export default function Posts({ conteudo }) {
  return (
    <div className={styles.cards}>
      <div className={styles.custom_card}>
        <div className={styles.img_card}></div>
        <div className={styles.card_text}>
          <a href="/">{conteudo.titulo}</a>
          <div className={styles.text}>{conteudo.descricao}</div>
          <div className={styles.text}>Publicado em 20/09/2021</div>
          <div className={styles.text}>{conteudo.autor}</div>
          <div>{conteudo.texto}</div>
        </div>
      </div>
    </div>
  )
}
