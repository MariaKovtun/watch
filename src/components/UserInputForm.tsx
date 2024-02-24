import { useState } from 'react'

type UserInputProps = {
    onSubmit: (newRow: {title: string, offset: number}) => void
}

const UserInputForm = (props: UserInputProps) => {

    const [state, setState] = useState<{title: string,offset: number}>({title: "", offset: 0});

    const handleTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {title,value} = event.target;
        setState(prevState => ({...prevState, title: value}));
     } 

     const handleOffsetChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {offset,value} = event.target;
        setState(prevState => ({...prevState,offset:+value}));
     }

    return (
    <form onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        props.onSubmit(state);
    }}>
        <label htmlFor="title"></label>
            <input type='text' id='title' name='title' onChange={handleTitleChanged} placeholder="Название зоны"/> 
        
        <label htmlFor="offset"></label>
            <input type='text' id='offset' name='offset' onChange={handleOffsetChanged} placeholder="Смещение по UTC: число от -12 до +14"/>
        
        <input type="submit" value="Добавить"/>
</form>)
    
}

export default UserInputForm;