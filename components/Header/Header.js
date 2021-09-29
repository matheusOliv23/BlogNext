import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="/">
          &lt;FRONT&frasl;&gt;
        </a>

        <ul className={styles.menu}>
          <li>
            <a href="/" className={styles.title}>
              Artigos
            </a>{' '}
          </li>
          <li>
            <a href="" className={styles.title}>
              Sobre Mim
            </a>{' '}
          </li>
          <li>
            <a href="" className={styles.title}>
              Contato
            </a>{' '}
          </li>
        </ul>
      </nav>
    </header>
  )
}
