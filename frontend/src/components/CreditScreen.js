import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './style/extra.css'

export default class InstructionScreen extends React.Component{

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
    let divStyle = {
        width: "100%",
        height: (document.body.clientHeight) + "px",
        textAlign: 'center',
    }
    let bgStyle = {
        backgroundColor: 'white',
        borderRadius: '25px',
        padding: '3em',
    }
    let centerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      border: '5px solid',
      backgroundColor: '#FBCDC2',
      borderRadius: '25px',
      padding: '10px',
      width: '800px',
      height: '600px',
      boxShadow: "-4px 4px 2px gray",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }

      return (
            <div style = {divStyle}>
                <div style = {centerStyle}>
                    <h1 className = "header">Credits</h1>
                    <p>Buy or $hort is an open-source game created for <a href = "https://hackmit.org/" target = "_blank">HackMIT 2020</a>, 
                    a virtual hackathon hosted by MIT with over 
                    1600 participants and 
                    400 projects. 
                    The game took under 36 hours to create and was submitted to the Educational Track. If you want to see our code, 
                    you can view it <a href = "https://github.com/ashayp22/HackMIT" target = "_blank">here.</a></p>

                    <h3>Developers</h3>
                    <ol style = {{backgroundColor: 'white', borderRadius: '25px', padding: '3em',lineHeight: "2em"}}>
                        <li>
                            <a href = "http://ashayp.com/" target = "_blank">Ashay Parikh</a>
                        </li>
                        <li>
                            <a href = "https://www.linkedin.com/in/labdhi-jain/" target = "_blank">Labdhi Jain</a>
                        </li>
                        <li>
                            <a href = "https://github.com/ashayp22/HackMIT" target = "_blank">Arvind Ganeshkumar</a>
                        </li>
                        <li>
                            <a href = "https://www.linkedin.com/in/yug-mittal-2baa34197/" target = "_blank">Yug Mittal</a>
                        </li>
                    </ol>
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <button className = "coolButton back" onClick = {() => this.props.onClick(0)} variant = "warning">Back</button>
                    </div>
                </div>
            </div>
      );
  }
}

