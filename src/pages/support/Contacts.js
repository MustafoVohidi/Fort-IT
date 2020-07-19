import React, { useEffect } from 'react'
import ContactList from '../menu/List/ContactList';
import Context from '../menu/List/context'
import ContactInput from '../menu/List/ContactInput';
import { func } from 'prop-types';

function Contact() {
    const [todos, setTodos] = React.useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=0')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }))
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))

    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ]))
    }
    return (
        <Context.Provider value={{ removeTodo: removeTodo }}>
            <div class="col-xl-6">
                <h1>Контакты</h1>
                <ContactInput onCreate={addTodo} />
                {todos.length ? (
                    <ContactList todos={todos} onToggle={toggleTodo} />
                ) : (
                        <p>Добавить контакт</p>
                    )}
            </div>
            <div class="col-xl-12">

            </div>
        </Context.Provider>
    )
}

export default Contact;