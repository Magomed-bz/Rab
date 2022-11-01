import React, {FC} from 'react';
import "./inputRadio.scss"

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}


export const InputRadio: FC<InputProps>= ({children,...props}) => {
    return (
        <div className="inputRadioBox">
            <input {...props}/>
            <span>{children}</span>
        </div>
    )
};
