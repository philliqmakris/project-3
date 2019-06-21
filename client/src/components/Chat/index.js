import React, { Component } from 'react';
import "./style.css";
import config from "../../config/config";
/* Socket.io */
import openSocket from 'socket.io-client';
const socket = openSocket(config.serverHost);

var msg_recieved = '';

socket.on('chat message', function(msg){
    console.log(msg);
  });


class Chat extends Component {

    state = {
        name: '',
        msg: '',
        chatArr: msg_recieved
    }

    
    componentDidMount() {
        //
    }
    
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const value = event.target.value;

      // Updating the input's state
      this.setState({
        msg: value
      });
    };

    handleClick = () => {
        console.log(this.state.msg);
        socket.emit('chat message', this.state.msg);
        this.setState({
            msg: ''
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="panel panel-primary">
                            <div className="panel-heading" id="accordion">
                                <span className="glyphicon glyphicon-comment"></span> Chat
                                <div className="btn-group pull-right">
                                    <a type="button" className="btn btn-default btn-xs" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                        <span className="glyphicon glyphicon-chevron-down"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="panel-collapse collapse" id="collapseOne">
                                <div className="panel-body">
                                    <ul className="chat">
                                        <li>{this.state.chatArr}</li>
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
                </div>
            </div>
        );
    }
}

export default Chat;

