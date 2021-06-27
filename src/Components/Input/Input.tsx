import React, {FC} from "react"
import { FieldRenderProps } from "react-final-form"

interface InputProps extends FieldRenderProps<string> {
    placeholder?: string;

     onChange: any;
    }
 export const Input: FC<InputProps> = ({placeholder='VVEDITE TEXT', input, meta}) => {
    console.log(input)
    console.log(meta)
    return(
        <div>
            <input placeholder={placeholder} onChange={input.onChange} value={input.value}/>
        </div>
    )
}