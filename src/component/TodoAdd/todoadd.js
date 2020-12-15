import React, { Component } from 'react';

class AddItem extends Component {
    state = { 
           name:"",
           age:""
     }

     handelchange= (e)=>
     {
          this.setState({
              [e.target.id]:e.target.value
          })

     }

     handelsubmit =(e)=>
     {
           e.preventDefault();
          
        if (e.target.name.value && e.target.age.value==="")
        {
            return false;
        }
        else
        {
            this.props.Addvalue(this.state)
            this.setState({
                name:"",
                age:""
            })
           
        }
           
     }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handelsubmit}>
                    <input type="text" placeholder="enter name" onChange={this.handelchange} id="name" value={this.state.name}/>
                    <input type="number" placeholder="enter age" onChange={this.handelchange}  id="age" value={this.state.age}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
         );
    }
}
 
export default AddItem;

