import React, {useState} from "react"
import '../components.css'
import { Form, Field } from 'react-final-form'
import {Input} from "../Input/Input"
import { v4 as uuidv4 } from 'uuid';

interface Props {
    title: string;

    }

export default function Column(props:Props){
    const [add, setAdd] = useState(false);
    const [cards, setCards]:any = useState([]);
    const [cardName, setCardName] = useState<{id: string; title: string}>()
    const [countId, setCountId]:any = useState(1)
    console.log(cards)

const addBtn = () =>{
    if (add ===false){
    setAdd(true)
    }else {
        setAdd(false)
    }
}
const closeBtn =() =>{
    setAdd(false)
}
const inputCardName = (e: any) =>{
    let obj ={
        id: `${uuidv4()}`,
        title: `${e.target.value}`

    }
    setCardName(obj);
}
const addCard = (v:any) =>{
    // e.preventDefault();
    console.log(v)
    // setCards([...cards, cardName])
}
    return(
        <div className="column">
            {/* <div className="column-title">{props.title}</div>
            {cards && <div>{cards.map((i:any) => <div className = "card">{i.title}</div>)}</div>}
             {add ? (<form onSubmit={addCard}><Input onChange={inputCardName} name="Введите название"/>
            <button type="submit" className="add-card">Добавить карточку</button>
            <button onClick={closeBtn}>X</button></form>):(
            <div className="add" onClick={addBtn}>+Добавить</div>)} */}
            <Form
      onSubmit={addCard}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title" component={Input} placeholder='adsasd' />
            {/* {({ input, meta }) => (
              <div>
                <label>First Name</label>
                <input {...input} type="text" placeholder="First Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )} */}
          {/* </Field> */}
          
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          
        </form>
      )}
    />
        </div>
    )
}