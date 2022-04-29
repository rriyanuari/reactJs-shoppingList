import PropTypes from "prop-types"
import styles from './Info.module.css'

export default function Info(props) {
  const {todosLength, totalCounts, onDelete} = props

  return(
  <div className={styles.info}>
    <div className={styles.infoTotal}>
      <p>{`Total List : ${todosLength}`}</p>
    </div>

    <div className={styles.infoTotal}>
      <p>{`Total Count : ${totalCounts}`}</p>
    </div>

    <button onClick={onDelete} className={styles.deleteAllButton}>
      Delete All List
    </button>
  </div>
  )
}

Info.propTypes = {
  todosLength: PropTypes.number,
  totalCounts: PropTypes.number,
  onDelete: PropTypes.func, 
}
