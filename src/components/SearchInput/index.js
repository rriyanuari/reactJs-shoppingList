import propTypes from 'prop-types'
import styles from './SearchInput.module.css'

const SearchInput = (props) => {
  const {onSubmit, onChange, value} = props;

  return(
    <>
      <form className={styles.form} onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={value}
            className={styles.input}
            type='text'
            placeholder='Type list...'
          />
          <button className={styles.addButton} type='submit'>add</button>
        </form>
    </>
  )
}

SearchInput.propTypes= {
  onSubmit: propTypes.func,
  onChange: propTypes.func,
  value: propTypes.string
}

export default SearchInput