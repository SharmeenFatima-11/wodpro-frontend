import React from 'react'

const Button = (props) => {

    const style = {
        backgroundColor: props.bgColor === 'transparent' ? 'transparent' : props.bgColor,
        borderColor: props.borderColor,
        color: props.textColor,
        padding: '8px 16px',
        borderRadius: '0.375rem',
        borderStyle: 'solid',
        borderWidth: '2px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    };
    return (
        <div style={style} className='flex-[1] font-semibold' onClick={props.handleClick}>
            {props.text}
        </div>
    )
}

export default Button