import React from 'react';
import ReactDOM from 'react-dom';
import Buses from './Buses';
import Home from './Home';
import Routes from './Routes';
import Settings from './Settings';
import Users from './Users';


class AdminMenu extends React.Component{

    constructor(props){
        super(props);
        this.handleClick.bind(this);
    }

    handleClick(comp){
        alert(comp);
    }
    render(){
        return <div>
            <div className="menu-wrapper" onClick={() => ReactDOM.render(<Home />, document.getElementById("admin-wrapper"))}>
                <div>
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={() => ReactDOM.render(<Users />, document.getElementById("admin-wrapper"))}>
                <div>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span>Users</span>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={() => ReactDOM.render(<Buses />, document.getElementById("admin-wrapper"))}>
                <div>
                    <i className="fa fa-bus" aria-hidden="true"></i>
                    <span>Buses</span>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={() => ReactDOM.render(<Routes />, document.getElementById("admin-wrapper"))}>
                <div>
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                    <div>
                        <span>Routes</span>
                    </div>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="menu-wrapper" onClick={() => ReactDOM.render(<Settings />, document.getElementById("admin-wrapper"))}> 
                <div>
                    <i className="fa fa-cogs" aria-hidden="true"></i>
                    <div>
                            <span>Settings</span>
                    </div>
                </div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>

        </div>
    }
}

ReactDOM.render(<AdminMenu />, document.getElementById('menu'));