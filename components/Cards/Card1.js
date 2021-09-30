import styles from '../../styles/Card.module.css'

export default function Card1() {
  return (
    <div className={styles.cards}>
      <div className={styles.custom_card}>
        <div className={styles.img_card}></div>
        <div className={styles.card_text}>
          <a>Por que escolhi JavaScript</a>
          <div className={styles.text}>
            Porque você deveria aprender JavaScript
          </div>
          <div className={styles.text}>Publicado em 20/09/2021</div>
          <div className={styles.text}>Autor: Matheus Oliveira</div>
        </div>
      </div>
    </div>
  )
}
