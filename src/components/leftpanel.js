import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class LeftPanel extends React.Component {
    render() {
        return (
            <aside id="left-panel" class="left-panel">
                <nav class="navbar navbar-expand-sm navbar-default">

                    <div class="navbar-header">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand" href="./"><img src="images/logo.png" alt="Logo" /></a>
                        <a class="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo" /></a>
                    </div>

                    <div id="main-menu" class="main-menu collapse navbar-collapse">
                        <ul class="nav navbar-nav">

                            <h3 class="menu-title">Меню</h3>

                            {/* <!-- /.menu-title --> */}
                            <li class="active">
                            <Link to="/rightPanel"><i class="menu-icon fa fa-dashboard"></i>Панель</Link>
                           
                            </li>

                            <li class="active ">
                            <Link to="/expansion"><i class="menu-icon fa fa-id-badge"></i>Расширения</Link>
                                
                            </li>

                            
                            <li class="active ">
                            <Link to="/Design"><i class="menu-icon fa fa-bars"></i>Дизайн</Link>
                   
                            </li>
                            
                            <li class="active ">
                            <Link to="/Sales"><i class="menu-icon fa fa-book"></i>Продажи</Link>
                              
                            </li>

                            
                            <li class="active ">
                            <Link to="/shopper"><i class="menu-icon fa fa-id-card-o"></i>Покупатели</Link>
                                
                            </li>

                            
                            <li class="active ">
                            <Link to="/marketing"><i class="menu-icon fa fa-th"></i>Маркетинг</Link>
                             
                            </li>

                            
                            <li class="active ">
                            <Link to="/Systems"><i class="menu-icon fa fa-table"></i>Система</Link>
                                
                            </li>


                            <h3 class="menu-title">Поддрежка</h3>

                            {/* <!-- /.menu-title --> */}

                            <li class="active ">
                            <Link to="/Contacts"><i class="menu-icon ti-email"></i>Контакты</Link>
                            
                                
                            </li >
                            <li class="active ">
                            <Link to="/Help"><i class="menu-icon fa fa-exclamation-triangle"></i>Нужна помощь </Link>
                             
                            </li>

                            <h3 class="menu-title">Settings</h3>
                            <li class="active ">
                            <Link to="/Settings"><i class="menu-icon fa fa-puzzle-piece"></i>Настройки</Link>
                                
                            </li>
                            <li class="active ">
                            <Link to="/Themes"><i class="menu-icon fa fa-laptop"></i>Темы </Link>
                             
                            </li>
                            <li class="active ">
                            <Link to="/LogOut"><i class="menu-icon fa fa-sign-in"></i>Выйти</Link>
                                
                            </li>

                           
                        </ul>
                    </div>
                  
                </nav>
            </aside>


        )
    }
}

export default LeftPanel;