import React, { Component } from 'react';
import "./style.css";
import config from "../../config/config";
/* Socket.io */
import openSocket from 'socket.io-client';

const socket = openSocket(config.serverHost);


class Chat extends Component {

    state = {
        name: '',
        msg: '',
        recieve_msg: 'placeholder'
    }
    
    componentDidMount() {

        let message = '';

        socket.on('chat message', (msg)=>{this.addMsg(msg)});
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

        let message = '';

        //console.log(this.state.msg);
        socket.emit('chat message', this.state.msg);
        this.setState({
            msg: ''
        });

    }

    addMsg = (msg) => {
        this.setState({
            recieve_msg: msg
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
                                        <li>{(this.state.recieve_msg).toString()}</li>
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

