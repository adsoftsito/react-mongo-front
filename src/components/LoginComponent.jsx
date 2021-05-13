import React, { Component } from 'react'
import LoginService from '../services/LoginService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            password: '',
            emailId: ''
        }
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        /*
        if(this.state.id === '_add'){
            return
        }else{
            LoginService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({password: employee.password,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        } */       
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let loginData = {name: this.state.emailId, password: this.state.password};
        console.log('login data => ' + JSON.stringify(loginData));

        // step 5
        if(this.state.id === '_add'){
            LoginService.signin(loginData).then(res =>{
                console.log(res.data);

                //localStorage.setItem('token', res.data.accessToken);
                sessionStorage.setItem('token', res.data.token);
                
                //console.log(res.data.accessToken);
                
                //this.props.history.push('/employees');
            });
        }else{
           /* EmployeeService.updateEmployee(loginData, this.state.id).then( res => {
                this.props.history.push('/employees');
            }); */
        }
    }
    
    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
/*
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
*/
    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Login </h3>
        }else{
            return <h3 className="text-center">Login Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="email" name="email" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password : </label>
                                            <input placeholder="Password " name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                        
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}> Login </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent
