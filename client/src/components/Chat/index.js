import React, { Component } from 'react';
import "./style.css";
//import config from "../../config/config";
/* Socket.io */
import openSocket from 'socket.io-client';

const socket = openSocket(process.env.REACT_APP_API_URL);

class Chat extends Component {

    state = {
        name: '',
        msg: '',
        recieve_msg: []
    }

    componentDidMount() {

        socket.on('chat message', (msg) => { this.addMsg(msg) });

        if(typeof this.props.userInfo[0] !== 'undefined'){
            
                this.setState({
                    name: this.props.userInfo[0].firstName
                });
        }

    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;

        // Updating the input's state
        this.setState({
            name: this.props.userInfo[0].firstName,
            msg: value
        });
    };

    handleClick = () => {

        this.setState({
            name: this.props.userInfo[0].firstName
        });

        socket.emit('chat message', this.state.name+': '+this.state.msg);
        this.setState({
            msg: ''
        });

    }

    addMsg = (msg) => {
        this.setState({
            recieve_msg: [...this.state.recieve_msg, msg]
        })
    }

    render() {

        return (
            <div className="container chatContainer"> 
                <div className="" id="collapseExample">
                    <div className="card card-body">
                        <div className="panel-body">
                            <ul className="chat text-left">
                                {this.state.recieve_msg.map((item, idx) => (
                                    <li key={`${idx}-${item}`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="panel-footer">
                            <div className="input-group">
                                <input id="btn-input" type="text" name="message" className="form-control input-sm" onChange={this.handleInputChange} value={this.state.msg} placeholder="Type your message here..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-warning btn-sm" id="btn-chat" onClick={this.handleClick}>
                                        Send</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;

