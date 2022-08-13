import styles from "./styles/plugin.css"

const Plugin = (props: { title: string; desc: string, key: React.Key }) => {
  return (
    <div className={styles.pluginCard}>
      <div className={styles.pluginTitle}>{props.title}</div>
      <div className={styles.pluginDesc}>{props.desc}</div>
    </div>
  )
}

export default Plugin
