 import React, { Component } from 'react';
import AddItem from './component/TodoAdd/todoadd';
import TodoItem from './component/Todoitem/todoitem';

 class App extends Component {
   state = { 
      items : [
        {id : 1, name : "menna" ,age:22 },
        {id : 2, name : "ali" ,age:28 },
        {id : 3, name : "ahmad" ,age:19 },
      ]
    }
             
    deleteitem =(id)=>
    {
          let items = this.state.items.filter( item => {
            return item.id !==id ;
          })
          this.setState({items})
    }

    Addvalue =(item)=>
    {       item.id=Math.random();
         let items=this.state.items
         items.push(item)
         this.setState({items})
    }

   
   render() { 
     return (  
       <div className=" APP container">
         <h1 className="text-center"> To do list </h1>
         <TodoItem items={this.state.items} deleteitem={this.deleteitem} />
         <AddItem Addvalue={this.Addvalue} />
       </div>
     );
   }
 }
  
 export default App;