import React, {useState} from 'react'
import {AiFillPlusCircle,AiFillEdit,AiFillDelete} from 'react-icons/ai'

import Img from './image/ssss.png'

// const getLocalItmes = () => {
//     let list = localStorage.getItem('lists');
//     console.log(list);

//     if (list) {
//         return JSON.parse(localStorage.getItem('lists'));
//     } else {
//         return [];
//     }
// }

const Todo = () => {
const [inputData,setInputData]=useState('')
  const [items,setItems]=useState([])
  const [toggleSubmit,setToggleSubmit]=useState(true)
  const [id,setId]=useState(null)
  

  
    
const addItem=()=>{
  if(!inputData){
    alert("Enter your item")
  }
  else if(inputData && !toggleSubmit){

    setItems(items.map((elem)=>{
    if(elem.id===id){
      return {...elem,name:inputData}
    }
return elem
  }))
  setToggleSubmit(true)
  setInputData('')
  setId(null)
  }
  else{
    const createId=new Date().getTime().toString()
const updatedData={id:createId,name:inputData}
  setItems([...items,updatedData])
  setInputData('')
  }
  

}



const editItem=(id)=>{
  const editData=items.find((elem)=>{
    return id===elem.id
  })
  setToggleSubmit(false)
  setInputData(editData.name)
  setId(id)

  
}



const deleteItem=(id)=>{
  const filterElem=items.filter((elem)=>{
    return id !== elem.id
    
  })
setItems(filterElem)
}




    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={Img} alt="todologo" />
                    </figure>

                    <div className="addItems">
                        <input className={`inpt ${toggleSubmit ? "whitebbackroung" : "red"}`} type="text" placeholder=" Add Items..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) }
                        />
                        {
                            toggleSubmit ? <AiFillPlusCircle className='addItemsbtn' onClick={addItem}/>
                            
                            // <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> 
                            :
                            <AiFillEdit className='editItemsbtn' onClick={addItem}/>
                                //  <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        }
                       
                    </div>

                    <div className="showItems">
                        
                        {
                            items.map((elem,ind) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        

                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                        <AiFillEdit className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}/>
                                            <AiFillDelete className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}/>
                                            
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    {/* <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div> */}
                </div>
          </div>  
        </>
    )
}

export default Todo


 //TODO Please Subscribe to ThapaTechnical Youtube Channel
 //TODO Click Here: https://www.youtube.com/thapatechnical




 
// edit the item
//     When user clikc on edit button 

// 1: get the id and name of the data which user clicked to edit
// 2: set the toggle mode to change the submit button into edit button
// 3: Now update the value of the setInput with the new updated value to edit. 
// 4: To pass the current element Id to new state variable for reference 