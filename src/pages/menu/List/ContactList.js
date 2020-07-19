import React from 'react'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}
function ContactList(props) {

    return (
        <div className="list-group my-5">
            <h3 className="text-capitalize text-center">
                {props.todos.map((todo, index) => {
                    return (
                        <ContactItem
                            todo={todo}
                            key={todo.id}
                            index={index}
                            onChange={props.onToggle}
                        />
                    )
                })}

            </h3>

        </div>
    )
}
ContactList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default ContactList
