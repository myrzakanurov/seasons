import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";


class App extends React.Component{
    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            positionError => {
                this.setState({errorMessage: positionError.message})
            }
        );
    }

    renderContent(){
        if (this.state.lat){
            return <div><SeasonDisplay lat={this.state.lat}/></div>
        }
        if (this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <Loader message="Please accept location request"/>
    }

    render() {
        return <div>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
