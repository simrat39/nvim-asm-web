import styles from "./styles/heading.module.css"

const Heading = (props) => {
  return <div>
    <h1 className={styles.heading}>{props.title.toUpperCase()}</h1>
    <div className={styles.grid}>
      {props.children}
    </div>
  </div>
}

export default Heading
