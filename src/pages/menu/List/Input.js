import React, { Component } from 'react'

export default class InputShopper extends Component {
    render() {
        const{Item,handleChange, handleSubmit}=this.props
        return (
            <div>
                <div className="card card-body my-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book" />

                                </div>

                            </div>

                            <input type="text"
                                className="form-control"
                                placeholder="Введите..."
                                value={Item}
                                onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-block btn-primary mt-3">
                            add item
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
