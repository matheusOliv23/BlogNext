import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Form.module.css'

const valorInicial = {
  titulo: '',
  descricao: '',
  autor: '',
  texto: ''
}

export default function Form() {
  const [valores, setValor] = useState(valorInicial)

  function onChange(e) {
    const { name, valor } = e.target

    setValor({ ...valores, [name]: valor })
  }

  function onSubmit(e) {}

  return (
    <div className={styles.container}>
      <form className={styles.box}>
        <Link href="/" className={styles.link}>
          Pagina principal
        </Link>
        <div className={styles.form}>
          <label>Titulo</label>
          <input id="titulo" name="titulo" type="text" onChange={onChange} />
        </div>
        <div className={styles.form}>
          <label>Descrição</label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className={styles.form}>
          <label>Autor</label>
          <input id="autor" name="autor" type="text" onChange={onChange} />
        </div>
        <div className={styles.form}>
          <label>Publicação</label>
          <textarea
            onChange={onChange}
            id="texto"
            name="texto"
            type="text"
            className={styles.text_area}
          />
        </div>
        <button className={styles.btn_sub}>Publique</button>
      </form>
    </div>
  )
}
