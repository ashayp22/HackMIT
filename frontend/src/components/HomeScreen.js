import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';


export default class HomeScreen extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  render() {
      return (
            <div className = "homeScreenContainer">

                <div>
                    Stock App
                </div>
                <div>
                    <Button onClick = {() => this.props.onClick(0)} variant="primary">fdjdf</Button>
                    <Button onClick = {() => this.props.onClick(1)} variant="secondary">Secondary</Button>
                </div>
            </div>
      );
  }
}

