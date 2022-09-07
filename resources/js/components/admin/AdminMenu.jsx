import React from 'react';
import ReactDOM from 'react-dom';
import Buses from './Buses';
import Home from './Home';
import Routes from './Routes';
import Settings from './Settings';
import Users from './Users';

export default function Menu() {
    const home = () => {
        if (document.getElementById('admin-wrapper')) {
            ReactDOM.render(<Home />, document.getElementById('admin-wrapper'));
        }
    }

    const users = () => {
        if (document.getElementById('admin-wrapper')) {
            ReactDOM.render(<Users />, document.getElementById('admin-wrapper'));
        }
    }

    const buses = () => {
        if (document.getElementById('admin-wrapper')) {
            ReactDOM.render(<Buses />, document.getElementById('admin-wrapper'));
        }
    }

    const routes = () => {
        if (document.getElementById('admin-wrapper')) {
            ReactDOM.render(<Routes />, document.getElementById('admin-wrapper'));
        }
    }

    const settings = () => {
        if (document.getElementById('admin-wrapper')) {
            ReactDOM.render(<Settings />, document.getElementById('admin-wrapper'));
        }
    }
    return (
        <div>
            <div className="menu-wrapper" onClick={home}>
                <div>
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={users}>
                <div>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span>Users</span>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={buses}>
                <div>
                    <i className="fa fa-bus" aria-hidden="true"></i>
                    <span>Buses</span>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={routes}>
                <div>
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                    <div>
                        <span>Routes</span>
                    </div>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={settings}> 
                <div>
                    <i className="fa fa-cogs" aria-hidden="true"></i>
                    <div>
                            <span>Settings</span>
                    </div>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>

        </div>
    );
}

if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}