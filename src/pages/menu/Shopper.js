import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import uuid from 'uuid';
import InputShopper from './List/Input';
import ListShopper from './List/List';
class Shopper extends React.Component {



//     state = {
//         items: [],
//         id: 0,
//         item: '',
//         editItem: false
//     };

//     handleChange = e => {
//         this.setState({
//             Item: e.target.value
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         const newItem = {
//             id: this.state.id,
//             title: this.state.item
//         };

//         const updateItems = [...this.state.items, newItem];
//         this.setState({
//             items: updateItems,
//             item: "",
//             id: 0,
//             editItem: false
//         });
//     };

//     clearList=()=>{
// this.setState({
//     items:[]
// })
//     }

    render() {
        return (


            <div className="container">
                <h3>Список покупателей</h3>
                {/* <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">
                            To do Input
                        </h3>
                        <InputShopper 
                        item={this.state.Item}  
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit} 
                        ></InputShopper>
                        <ListShopper  
                        items={this.state.items}
                        clearList={this.clearList}
                        > </ListShopper>
                    </div>
                </div> */}

            </div>

        )
    }
}

export default Shopper;