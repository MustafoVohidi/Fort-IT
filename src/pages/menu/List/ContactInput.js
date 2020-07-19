import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}
function ContactInput({ onCreate }) {
    const input = useInputValue('')


    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()

        }
    }


    return (
        <div>
            <div className="card card-body my-3 ">


                <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler} >

                    <div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book" />

                                </div>

                            </div>

                            <input
                                {...input.bind}
                                className="form-control"
                                placeholder="Введите..."
                            />
                        </div>

                        <button type="submit" className="btn btn-block btn-primary mt-3">
                            Добавить
                        </button>
                    </div>


                </form>


            </div>
        </div>
    )
}

ContactInput.propTypes = {
    onCreate: PropTypes.func.isRequired
}



export default ContactInput