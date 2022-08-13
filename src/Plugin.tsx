import styles from "./styles/plugin.css"
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Plugin = (props: { title: string; desc: string, key: React.Key }) => {
  return (
    <div className={styles.pluginCard}>
      <div className={styles.text}>
        <div className={styles.pluginTitle}>{props.title}</div>
        <div className={styles.pluginDesc}>{props.desc}</div>
      </div>
      <div className={styles.end}>
        <button className={styles.copy} onClick={
          () => navigator.clipboard.writeText(props.title)
        }>
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  )
}

export default Plugin
