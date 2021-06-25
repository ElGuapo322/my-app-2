import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Form, Field } from 'react-final-form'
import {Input} from '../Components/Input/Input'
import React, {useState} from 'react';

export default function Login(){
const[isLoginOpen, setLoginOpen] = useState(localStorage.getItem('storageName')? false : true);
const[name, setName] =useState('')
    const closeLogin = () =>{
        
setLoginOpen(false)
    }

    const getName = (v:any) =>{
console.log(v)
setName(v.title);
//localStorage.setItem('storageName', name);
 setLoginOpen(false);
    }

    React.useEffect(() => {
        localStorage.setItem('storageName', name);
      }, [name]);

return(
    <Popup open={isLoginOpen} closeOnDocumentClick onClose={closeLogin}>
        <Form
      onSubmit={getName}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} >
          <Field name="title" component={Input} placeholder='Введите имя' />
          
          <div className="buttons">
            <button  type="submit" disabled={submitting}>
              Login
            </button>
          </div>
          
        </form>
      )}
    />

        </Popup>
)
}