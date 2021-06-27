import Column from "../Components/Column/column";
import React, {useState, useRef} from "react";
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Form, Field } from 'react-final-form'
import {Input} from '../Components/Input/Input'
import Login from '../Components/Login'  


const columnData =[
    {id : uuidv4(),
    columnName: "TODO",}, 
    {id : uuidv4(),
    columnName: "In Progress",}, 
    {id : uuidv4(),
    columnName: "Testing",}, 
    {id : uuidv4(),
    columnName: "Done",}];

export default function MainPage(){

    

const [columns, setColumns] = useState(columnData);
const [isModalOpen, setModalOpen] = useState(false);
const [add, setAdd] = useState(false);
const [cards, setCards] = useState([])

const addBtn =()=>{
setAdd(true)
}
const closeBtn =()=>{
setAdd(false)
}


const deleteColumn = (e:any) => {
const newData = columns.filter((i)=> (e.target.id !== i.id))
console.log(newData)
setColumns(newData)
}
const changeColumn =(v:any)=>{
console.log(v)
const newColumns = columns.map((i:any)=>{if(v.id === i.id){
    let index = columns.indexOf(i)
     columns[index].columnName = v.title
}return i})

setColumns(newColumns)
}

const addColumn =(v:any) =>{
    let createObj ={
        id: uuidv4(),
        columnName: `${v.title}`
    }
    console.log(createObj)
    setColumns([...columns, createObj])
    
}
const addCard =(v:any)=>{
let createObj ={

}
}

    return(
        <div className="main">
            <div>Привет,{localStorage.getItem('storageName')? localStorage.getItem('storageName'): 'Пользователь'}!</div>
         {columns.map((i)=>(
         <div>
            <Column key={i.id} title ={i.columnName}>
              
            <Form
      onSubmit={addCard}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title" component={Input} placeholder='Введите название карточки' />
          
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              +Добавить
            </button>
            <button onClick={closeBtn}>X</button>
          </div>
          
        </form>
      )}
    />

              </Column>
               
           
        <Popup trigger={<button id ={i.id} onClick={()=>setModalOpen(!isModalOpen)}>Change</button>} >
        <Form
        initialValues ={{
            
            id:`${i.id}`
        }}
      onSubmit={changeColumn}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title" component={Input} placeholder='Введите название карточки' value={i.columnName} />
          
          <div className="buttons">
            <button id={i.id} type="submit" disabled={submitting}>
              Изменить
            </button>
          </div>
          
        </form>
      )}
    />

        </Popup>
        <button onClick={deleteColumn} id ={i.id}>X</button></div>))}
        <Popup trigger={<button onClick={()=>setModalOpen(!isModalOpen)}>Add Column</button>}>
        <Form
      onSubmit={addColumn}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} >
          <Field name="title" component={Input} placeholder='Введите название карточки' />
          
          <div className="buttons">
            <button  type="submit" disabled={submitting}>
              Добавить
            </button>
          </div>
          
        </form>
      )}
    />

        </Popup>
   <Login/>
        </div>
    )
}