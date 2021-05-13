import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.login = this.login.bind(this);
        this.imc = this.imc.bind(this);

        this.cerrarSesion = this.cerrarSesion.bind(this);

        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        //localStorage.setItem('token', null);

    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    imc(){
        this.props.history.push('/add-imc/_add');
    }

    login(){
        this.props.history.push('/login/_add');
    }

    cerrarSesion(){
       // localStorage.setItem('token', null);
       // localStorage.removeItem('token');

       sessionStorage.removeItem('token');
       
       alert('Sesion cerrada');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Demo React - Mongo</h2>
                 
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.imc}> Devices  </button>
                    <button className="btn btn-primary" onClick={this.login}> Login </button>

                    <button className="btn btn-primary" onClick={this.cerrarSesion}> Cerrar Sesion </button>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
