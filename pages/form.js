import Link from 'next/link'
import styles from '../styles/Form.module.css'

export default function Form() {
  return (
    <div className={styles.container}>
      <form className={styles.box}>
        <Link href="/" className={styles.link}>
          Pagina principal
        </Link>
        <div className={styles.form}>
          <label>Titulo</label>
          <input id="titulo" name="titulo" type="text" />
        </div>
        <div className={styles.form}>
          <label>Descrição</label>
          <input id="descricao" name="descricao" type="text" />
        </div>
        <div className={styles.form}>
          <label>Autor</label>
          <input id="autor" name="autor" type="text" />
        </div>
        <div className={styles.form}>
          <label>Publicação</label>
          <textarea
            id="texto"
            name="texto"
            type="text"
            className={styles.text_area}
          />
        </div>
        <button className={styles.btn_sub} type="submit">
          Publique
        </button>
      </form>
    </div>
  )
}
