import { useState } from 'react';
import './Enter.css'


function Enter()    {    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>    {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted value:', inputValue);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className="input">
                        <div className='submit'>
                            <button className = "submit" type="submit" >Submit</button>
                        </div>
                        <div className='inputed'>
                            <input className = "input" type = "password" value = {inputValue} onChange = {handleInputChange} placeholder = 'fi$pond' />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Enter;