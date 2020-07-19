import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from './context'
import { Button } from 'react-bootstrap';
const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',

    }
}

function ContactItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }
    return (

        <li className="list-group-item list-capitalize d-flex justify-content-between my-2 ">
            <span className={classes.join('')}>
                {/* <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)} /> */}

                <strong className="todo-icon mx-2 text-success">{index + 1}</strong>
            &nbsp;
            {todo.title}

            </span>




            <div className="todo-icon">

                <span className="Button1 mx-2 text-danger">
                    <Button variant="danger" 
                        onClick={removeTodo.bind(null, todo.id)}>
                        {/* &times; */}
                       Удалить
                    </Button>{' '}
                </span>
            </div>

        </li>

    )
}
ContactItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ContactItem