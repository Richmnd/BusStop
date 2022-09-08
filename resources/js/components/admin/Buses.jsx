import React from 'react';
import ReactDOM from 'react-dom';

export default class Buses extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            error: null,
            isLoaded: false,
            items: [],
            buses_url: location.protocol+"//"+location.host+"/admin/buses"
        }
    }

    useEffect(){
        this.setState({
            loading: true
        });
        setTimeout(() => {
        this.setState({
            loading:false
        });
        }, 500);
    }
    
    componentDidMount(){
        this.useEffect();
        fetch(this.state.buses_url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render(){
        return(
            <div>
            {this.state.loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div>
                    {this.state.items.map(bus => (
                        <div key={bus.id} className='inner-card'>
                            <img src={bus.image} className="bus-image" alt="" />
                            <span className='user-data'>{bus.model}</span>
                            <span className='user-data'>{bus.plate}</span>
                            {/* <button value={bus.id} onClick={() => this.handleEdit(user.id, "edit", bus.name, bus.email)}>Edit</button>
                            <button value={bus.id} onClick={() => this.handleRemove(event, bus.id)}>Remove</button> */}
                        </div>
                    ))}
                </div>
                
        )}
        </div>
        );
    }
}