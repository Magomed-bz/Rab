import React, {FC} from 'react';
import "./input.scss"

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}


export const Input: FC<InputProps>= ({children,...props}) => {
    return (
            <div className="inputBox">
                <input  {...props}/>
                <span>{children}</span>
            </div>
    )
};
