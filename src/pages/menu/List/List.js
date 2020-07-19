import React, { Component } from 'react'
import ItemShopper from './Item'

export default class ListShopper extends Component {
    render() {
        const {items}=this.props
        return (
            <div className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo List
                </h3>
                {
                items.map( item => {
                    return(
                      <ItemShopper key={item.id} title={item.title}/>  
                    )
                })
            }
                
                <button
                type="button"
                className="btn btn-danger btn-block text-capitalize mt-5">
                    clear list
                </button>
            </div>
        )
    }
}
