import React, {useState, FC} from "react"
import '../components.css'
import { Form, Field } from 'react-final-form'
import {Input} from "../Input/Input"
import { v4 as uuidv4 } from 'uuid';

interface Props {
    title: string;
//children:JSX.Element,
key: string,
id:any;

    }

export default function Column(props:Props){
    const [add, setAdd] = useState(false);
    const [cards, setCards]:any = useState([]);
    //const [cardName, setCardName] = useState<{id: string; title: string}>()
    
    console.log("cards", cards)
    

const addBtn = ():any =>{
    if (add ===false){
    setAdd(true)
    }else {
        setAdd(false)
    }
}
const closeBtn =() =>{
    setAdd(false)
}
// const inputCardName = (v: any) =>{
//     let obj ={
//         id: uuidv4(),
//         title: `${v.target.title}`

//     }
//     setCardName(obj);
// }
const addCard = (v:any) =>{
    // e.preventDefault();
    //console.log(v)
    // setCards([...cards, cardName])
}
    return(
        <div className="column">
            <div className="column-title">{props.title}</div>
            
            {cards && <div>{cards.map((i:any) => <div className = "card">{i.title}</div>)}</div>}
             {add ? (
            // <form onSubmit={addCard}><Input onChange={inputCardName} placeholder="Введите название"/>
            // <button type="submit" className="add-card">Добавить карточку</button>
            // <button onClick={closeBtn}>X</button></form>

           

            <Form
            initialValues ={{
            
              ParentId:`${props.id}`
          }}
      onSubmit={(v,{reset})=>{
        console.log(v.title)
        let obj ={
            id: uuidv4(),
            title: `${v.title}`,
            parentId:props.id
        }
        
        if(cards){
            setCards([...cards, obj])
        }else setCards(obj)
        
        
        
        }}
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

            

            ):( 
            <div className="add" onClick={addBtn}>+Добавить</div>)} 
            
        </div>
    )
}