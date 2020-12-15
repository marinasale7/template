import React from 'react';


 const TodoItem =(propse)=>
 {
       const {items ,deleteitem}=propse
       let len =items.length 
         const theitem = len ? (
            items.map(item =>
                {
                    return(
                        <div key={item.id}>
                            <span className="name"  >{item.name}</span>
                            <span className="age" >{item.age}</span>
                            <span className="action icon"  onClick={ ()=>deleteitem(item.id)}>&times;</span>
                        </div>
                    )
                })
         ) :
         (
             <p>No items to show</p>
         )
        return(
            <div className ="listitems">
               <div>
                 <span className="name title">Name</span>
                 <span className="age title">Age</span>
                 <span className="action title">Action</span>
               </div>
                {theitem}
            </div>
        )
 }
 export default TodoItem

 