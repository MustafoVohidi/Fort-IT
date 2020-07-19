import React, { Component } from 'react'



class Breadcrumbs extends React.Component {
    render() {
        return (

            <div class="breadcrumbs">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1>Панель</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active">Панель</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default Breadcrumbs;