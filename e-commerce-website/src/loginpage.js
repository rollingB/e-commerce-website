import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React  from "react";


class Loginpage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {firstname: '',
                        lastname: '',
                        email:'',
                        password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handlelastnamechange = this.handlelastnamechange.bind(this);
        this.handleemailchange = this.handleemailchange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handle_lastnamechange(event) {this.setState({lastname: event.target.value});  }
    handle_firstnamechange(event) {this.setState({firstname: event.target.value});  }
    handle_emailchange(event) {this.setState( {email: event.target.value } ) }


    handleSubmit(event) {
        alert('entered fields: ' + this.state.firstname + this.state.lastname + this.state.email );

        event.preventDefault();
    };


  render() {
      return (
          <div className="whole">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>
                      Please log-in with your credentials.
                  </p>
              </header>
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <table className="login">
                          <tr>
                              <td align="left">First Name:</td>
                              <td align="right"><input type="text" value={this.state.firstname} onChange={this.handle_firstnamechange}  name="first"/></td>
                          </tr>
                          <tr>
                              <td align="left">Last Name:</td>
                              <td align="right"><input type="text" value={this.state.lastname
                              } onChange={this.handle_lastnamechange} name="last"/></td>
                          </tr>
                          <tr>
                              <td align="left">Email:</td>
                              <td align="right"><input type="text" value={this.state.email} onChange={this.handle_emailchange} name="email"/></td>
                          </tr>
                      </table>
                      <input type="submit" name="submit" value="Submit"/>
                  </form>
              </div>
          </div>
      );
  }
}

export default Loginpage;
