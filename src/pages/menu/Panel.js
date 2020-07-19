import React, { Component } from 'react'


class Panel extends React.Component {
    render() {
        return (
            <div>
                {/* График */}
                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h4 class="card-title mb-0">Аналитика продаж</h4>
                                    <div class="small text-muted">October 2017</div>
                                </div>

                                <div class="col-sm-8 hidden-sm-down">
                                    <button type="button" class="btn btn-primary float-right bg-flat-color-1"><i class="fa fa-cloud-download"></i></button>
                                    <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                                            <label class="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option1" /> День
                            </label>
                                            <label class="btn btn-outline-secondary active">
                                                <input type="radio" name="options" id="option2" checked="" /> Месяц
                            </label>
                                            <label class="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option3" /> Год
                            </label>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div class="chart-wrapper mt-4">
                                <canvas id="trafficChart" height="200"></canvas>
                            </div>

                        </div>
                        <div class="card-footer">
                            <ul>
                                <li>
                                    <div class="text-muted">Visits</div>
                                    <strong>29.703 Users (40%)</strong>
                                    <div class="progress progress-xs mt-2" >
                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li class="hidden-sm-down">
                                    <div class="text-muted">Unique</div>
                                    <strong>24.093 Users (20%)</strong>
                                    <div class="progress progress-xs mt-2" >
                                        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="text-muted">Pageviews</div>
                                    <strong>78.706 Views (60%)</strong>
                                    <div class="progress progress-xs mt-2">
                                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li class="hidden-sm-down">
                                    <div class="text-muted">New Users</div>
                                    <strong>22.123 Users (80%)</strong>
                                    <div class="progress progress-xs mt-2" >
                                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li class="hidden-sm-down">
                                    <div class="text-muted">Bounce Rate</div>
                                    <strong>40.15%</strong>
                                    <div class="progress progress-xs mt-2">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>





                {/* Заказы */}
                <div class="col-xl-3 col-lg-6 ">
                    <div class="card header-right">
                        <div class="card-body">
                            <div class="stat-widget-one">
                                {/* <div class="stat-icon dib"><i class="ti-money text-success border-success"></i></div> */}
                                <div class="stat-content dib">
                                    <div class="stat-text">Заказы</div>
                                    <div class="stat-digit">1,012</div>
                                    <div class="stat-text">Подробнее</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Распродажа */}
                <div class="col-xl-3 col-lg-6 ">
                    <div class="card header-right">
                        <div class="card-body">
                            <div class="stat-widget-one">
                                {/* <div class="stat-icon dib"><i class="ti-money text-success border-success"></i></div> */}
                                <div class="stat-content dib">
                                    <div class="stat-text">Распродажа</div>
                                    <div class="stat-digit">1,012</div>
                                    <div class="stat-text">Подробнее</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ОНЛАЙН */}
                <div class="col-xl-3 col-lg-6">
                    <div class="card header-right">
                        <div class="card-body">
                            <div class="stat-widget-one">
                                {/* <div class="stat-icon dib"><i class="ti-user text-primary border-primary"></i></div> */}
                                <div class="stat-content dib">
                                    <div class="stat-text">Онлайн</div>
                                    <div class="stat-digit">961</div>
                                    <div class="stat-text">Подробнее</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ОБЩИЕ */}
                <div class="col-xl-3 col-lg-6">
                    <div class="card header-right">
                        <div class="card-body">
                            <div class="stat-widget-one">
                                {/* <div class="stat-icon dib"><i class="ti-layout-grid2 text-warning border-warning"></i></div> */}
                                <div class="stat-content dib">
                                    <div class="stat-text">Общие</div>
                                    <div class="stat-digit">770</div>
                                    <div class="stat-text">Подробнее</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* КАРТА */}

                <div class="col-xl-8 footer-panel">
                    <div class="card footer-panel1">
                        <div class="card-header">
                            <h4>На карте</h4>
                        </div>
                        <div class="Vector-map-js">
                            <div id="vmap" class="vmap"></div>
                        </div>
                    </div>


                </div>




                <section class="card footer-panel2">
                    <div class="twt-feed blue-bg">
                        <div class="corner-ribon black-ribon">
                            <i class="fa fa-twitter"></i>
                        </div>
                        <div class="fa fa-twitter wtt-mark"></div>

                        <div class="media">
                            <a href="#">
                                <img class="align-self-center rounded-circle mr-3" alt="" src="images/admin.jpg" />
                            </a>
                            <div class="media-body">
                                <h2 class="text-white display-6">Jim Doe</h2>
                                <p class="text-light">Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="weather-category twt-category">
                        <ul>
                            <li class="active">
                                <h5>750</h5>
                    Tweets
                </li>
                            <li>
                                <h5>865</h5>
                    Following
                </li>
                            <li>
                                <h5>3645</h5>
                    Followers
                </li>
                        </ul>
                    </div>
                    <div class="twt-write col-sm-12">
                        <textarea placeholder="Write your Tweet and Enter" rows="1" class="form-control t-text-area"></textarea>
                    </div>
                    <footer class="twt-footer">
                        <a href="#"><i class="fa fa-camera"></i></a>
                        <a href="#"><i class="fa fa-map-marker"></i></a>
            New Castle, UK
            <span class="pull-right">
                            32
            </span>
                    </footer>
                </section>

            </div>
        )
    }
}

export default Panel;