import React, {FC} from 'react';
import "./button.scss"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const MyButton: FC<ButtonProps> = ({children, ...props}: any) => {

    return (
        <div className="buttonBox">
            <button {...props}>
                {children}
            </button>
        </div>
    )
}
export default MyButton;