import styles from "./Index.module.css"

const Index = ({children}) => {
  return (
    <nav className={styles.nav}>
      {children}
    </nav>
  )
}

export default Index