import { useState } from 'react';
import './Enter.css'
import { useNavigate } from 'react-router-dom';

function Enter()    {    
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleInputChange = (e) =>    {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if  (inputValue === 'fi$pond')  {
            navigate('/fi$pond');
        }   else    {
            setError('fi$er not recognized');
        }
        console.log('Submitted value:', inputValue);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className="input">
                        <div className='submit'>
                            <button className = "submit" 
                            type="submit" >Submit</button>
                        </div>
                        <div className='inputted'>
                            <input className = "input"
                            type = "password" 
                            value = {inputValue} 
                            onChange = {handleInputChange} 
                            placeholder = 'fi$pond' />
                            {error  &&  <p style={{ color: 'red', textAlign: 'center'}}>{error}</p>}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Enter;