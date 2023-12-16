import React, {ChangeEvent, useState} from 'react';

type FullInputFullType  = {
    addMessage: (title: string)=> void
}

export const FullInput = (props: FullInputFullType) => {
    let[title,setTitle]=useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = ()=> {
        props.addMessage(title)
        setTitle('')
    }
    return (
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={(onClickButtonHandler)}>+</button>
            </div>
    );
};

