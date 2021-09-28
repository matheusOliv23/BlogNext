import axios from 'axios'
import { Router } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

import styles from '../styles/Form.module.css'

export default function Form() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [autor, setAutor] = useState('')
  const [texto, setTexto] = useState('')

  const addPost = {
    titulo,
    descricao,
    autor,
    texto
  }
  console.log(addPost)
  function onSubmit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:5000/posts', addPost)
      .then(() => {
        console.log('deu certo')
        Router.push('/')
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
            value={titulo}
            type="text"
            onChange={e => setTitulo(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <label>Descrição</label>
          <input
            required
            id="descricao"
            name="descricao"
            value={descricao}
            type="text"
            onChange={e => setDescricao(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <label>Autor</label>
          <input
            required
            id="autor"
            name="autor"
            value={autor}
            type="text"
            onChange={e => setAutor(e.target.value)}
          />
        </div>
        <div className={styles.form}>
          <label>Publicação</label>
          <textarea
            required
            className={styles.text_area}
            id="texto"
            name="texto"
            value={texto}
            type="text"
            onChange={e => setTexto(e.target.value)}
          />
        </div>
        <button className={styles.btn_sub} onClick={onSubmit}>
          Publique
        </button>
        <p>{autor}</p>
      </form>
    </div>
  )
}
