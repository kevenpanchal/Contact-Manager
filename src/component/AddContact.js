import React,{Component} from 'react';


export default class AddContact extends Component {

    state = {
        name : "",
        no:"",
        email : "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "" || this.state.no === ""){
            alert("All the credentials are necessary !");
            
        }
        else{
            this.props.addEventHandler(this.state);
            this.setState({name:"",no:"",email:""});
            
        }
    }


    render(){
  return (
    <div className='ui main'>
        <h3>ADD Contact</h3>
        <div>
            <form className='ui form' onSubmit={this.add}>
                <div className='field'>
                    <lable><h3>NAME</h3>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder='Enter Your Name' 
                    value ={this.state.name}
                    onChange={ (e) =>  this.setState({ name : e.target.value})}>

                    </input>
                    </lable>
                </div>


                <div>
                    <lable><h3>Email</h3>
                    <input 
                    type="text" 
                    name="email" 
                    placeholder='Enter Your Email'
                    value={this.state.email}
                    onChange={ (e) =>  this.setState({ email : e.target.value})}>
                    </input>
                    </lable>
                </div>
                <div>
                    <lable><h3>Phone Number</h3>
                    <input
                    type="number"
                    placeholder='Enter Your Number'
                    name="no"
                    value={this.state.no}
                    onChange={ (e) => this.setState({ no :e.target.value })}>       
                    </input>
                    </lable>
                </div>
                <div>
                    <button className='ui button blue'>
                        Add
                    </button>
                </div>
            
            </form>
        </div>
    </div>
  );
}
}

