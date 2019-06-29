import React, { Component } from 'react';
import config from "../../config/config"
import "./style.css"

class Form extends Component {

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-4 ">
                                <label htmlFor="classId">Class ID</label>
                            </div>
                            <div className={(this.props.isAuth)? 'col-4 ml-0 invisible':'col-4 ml-0 visible'}>
                                <input
                                    disabled={this.props.isAuth}
                                    value={this.props.search}
                                    onChange={this.props.handleInputChange}
                                    type="input"
                                    className="form-control"
                                    id="classId"
                                    placeholder="Class ID"
                                />
                            </div>
                            <div className={(this.props.isAuth)? 'col-4 invisible':'col-2 visible'}>
                                <button type="button"
                                    disabled={this.props.isAuth}
                                    onClick={this.props.handleFormSubmit}
                                    className="btn btn-success">                                 
                                    Go </button>
                            </div>
                            
                                
                            </div>
                            {/* <div class="row">
                            <div className={(!this.props.isAuth)? 'col-2 invisible':'col-2 visible'}>
                                <button id="loginButt" type="submit"
                                className ={(!this.props.isAuth)? 'invisible':'visible'}
                                    className="btn btn-success">
                                    <a href={config.serverHost + "/auth/google"}>Login</a> </button>
                            </div>
                            
                            
                            
                            </div> */}
                    </div>
                </form>
                {(this.props.classIdNotSucess) && <div className="errClass text-align-center">
                    <h1>Enter the correct Bootcamp Class Id</h1>
                </div>}
            </div>
        );
    }
}
//<a href={(this.props.isAuth)? "/auth/google":""}>
export default Form;