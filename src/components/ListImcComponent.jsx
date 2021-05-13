import React, { Component } from 'react'
import ImcService from '../services/ImcService'

class ListImcComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.login = this.login.bind(this);
        this.cerrarSesion = this.cerrarSesion.bind(this);

        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        ImcService.deleteEmployee(id).then( res => {
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

        ImcService.getImcs().then((res) => {
            console.log('imcs ');
            console.log(res);
            this.setState({ employees: res.data.devices});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    login(){
        this.props.history.push('/login/_add');
    }

    cerrarSesion(){
        localStorage.setItem('token', null);
        alert('Sesion cerrada');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Devices demo (token)</h2>
                 
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> nombre</th>
                                    <th> descripcion </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee._id}>
                                             <td> { employee._id} </td>   
                                             <td> {employee.name}</td>
                                             <td> {employee.description}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListImcComponent
