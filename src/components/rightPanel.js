import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header'
import Breadcrumbs from './Breadcrumbs'

import Design from '../pages/menu/Design';
import Panel from '../pages/menu/Panel';
import Expansion from '../pages/menu/expansion';
import marketing from '../pages/menu/marketing';
import Sales from '../pages/menu/Sales';
import Shopper from '../pages/menu/Shopper';
import Systems from '../pages/menu/Systems';
import Settings from '../pages/setting/Settings';
import LogOut from '../pages/setting/LogOut';
import Themes from '../pages/setting/Themes';
import Contact from '../pages/support/Contacts';
import Help from '../pages/support/Help';
import LeftPanel from './leftpanel';



class RightPanel extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <LeftPanel />

                    <div id="right-panel" class="right-panel  ">

                        <Header></Header>
                        <Breadcrumbs></Breadcrumbs>

                        <div class="content mt-3 col-xl-12">

                            <div class="col-sm-12">
                                <div class="alert  alert-success alert-dismissible fade show" role="alert">
                                    <span class="badge badge-pill badge-success">Success</span> You successfully read this important alert message.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>

                            {/* <SocialBox/> */}


       <div class="col-xl-12 container">
                            <Switch>
                                <Route exact path='/' component={Panel} />
                                <Route path='/Design' component={Design} />
                                <Route path='/Expansion' component={Expansion} />
                                <Route path='/marketing' component={marketing} />
                                <Route path='/Sales' component={Sales} />
                                <Route path='/Shopper' component={Shopper} />
                                <Route path='/Systems' component={Systems} />
                                <Route path='/LogOut' component={LogOut} />
                                <Route path='/Settings' component={Settings} />
                                <Route path='/Themes' component={Themes} />
                                <Route path='/Contacts' component={Contact} />
                                <Route path='/Help' component={Help} />
                                <Route path='/' component={Panel} />
                            </Switch>

                     

                            </div>


                        </div>

                    </div>
                </Router>
            </div>
        )
    }
}

export default RightPanel;