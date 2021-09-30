import styles from '../../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logo} href="/">
            &lt;FRONT&frasl;&gt;
          </a>
        </Link>

        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a className={styles.title}>Artigos</a>
            </Link>
          </li>
          <li>
            <Link href="/form">
              <a className={styles.title}>Criar Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.title}>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
