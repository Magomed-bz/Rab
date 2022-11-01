import React, {FC} from 'react';
import "./inputDate.scss"

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}


export const InputDate: FC<InputProps>= ({children,...props}) => {
    return (
        <div className="inputDateBox">
            <input {...props}/>
            <span>{children}</span>
        </div>
    )
};
