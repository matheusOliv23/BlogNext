import axios from 'axios'
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

  function onSubmit() {
    axios
      .post('url', valores)
      .then(() => {
        console.log('deu certo')
      })
      .catch(() => {
        console.log('deu errado')
      })
  }

  return (
    <div className={styles.container}>
      <form className={styles.box}>
        <Link href="/" className={styles.link}>
          Pagina principal
        </Link>
        <div className={styles.form}>
          <label>Titulo</label>
          <input
            required
            id="titulo"
            name="titulo"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className={styles.form}>
          <label>Descrição</label>
          <input
            required
            id="descricao"
            name="descricao"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className={styles.form}>
          <label>Autor</label>
          <input
            required
            id="autor"
            name="autor"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className={styles.form}>
          <label>Publicação</label>
          <textarea
            required
            onChange={onChange}
            id="texto"
            name="texto"
            type="text"
            className={styles.text_area}
          />
        </div>
        <button className={styles.btn_sub} onClick={onSubmit}>
          Publique
        </button>
      </form>
    </div>
  )
}
