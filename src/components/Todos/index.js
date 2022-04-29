import propTypes from "prop-types"
import styles from './Todos.module.css'
import classNames from "classnames"

import PlusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = (props) =>  {
  const {todos, onSubstraction, onAddition} = props

  return(
    <>
      <div className={styles.todos}>
        { todos.map( (todo, index, arr) => {
          return (
            <div 
              key={index} 
              // className={`todo ${!(arr.length === index +1) && 'todo-divider'}`}
              className={classNames(styles.todo, {
                [styles.todoDivider]: !(arr.length === index +1)
              })} 
            > 
              
              {todo.title}

              <div className={styles.todoIconWrapper}>

                <div className={styles.todoCount}>{todo.count}</div>

                <button className={styles.todoActionButton} onClick={() => onSubstraction(index)}>
                  <img src={minusIcon} alt="minus-icon" />
                </button>
                
                <button className={styles.todoActionButton} onClick={() => onAddition(index)}>
                  <img src={PlusIcon} alt="plus-icon" />
                </button>

              </div>

            </div>
          )
        })}
      </div>   
    </>
  )
}

Todos.propTypes = {
  onSubstraction: propTypes.func,
  onAddition: propTypes.func,
  todos: propTypes.object
}

export default Todos