import React, {useState} from 'react';

const BasicsInput = props => {
    
 
    const [enteredName, setEnteredName] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    
    
    
    let formIsValid = false;
    if(isValidName && isValidEmail){
        formIsValid =true;
    } 
    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
        if(event.target.value.trim().length > 0){
            setIsValidName(true);
            return;
        }
         
    };
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        if(event.target.value.trim().length > 0 ){
            setIsValidEmail(true);
            return;
        }
    }
    const nameInputBlurHandler = () => {
        if(enteredName.trim() === ''){
            setIsValidName(false);
        }
        
    }
    const emailInputBlurHandler = () => {
        if(enteredEmail.trim() === ''){
            setIsValidEmail(false)
        }
    }
    
    const formSubmitHandler = event => {
        event.preventDefault();
        if(enteredName.trim() === ''){
            setIsValidName(false);
        
        };
        if(enteredEmail.trim() === ''){
            setIsValidEmail(false);
            
        };
        if(!enteredEmail.includes('@')){
            setIsValidEmail(false);
            return;
        }
        console.log(enteredName);
        setEnteredName('');
        setEnteredEmail('');
        
    };
    let checkStyleForName;
    let checkStyleForEmail;
    if(formIsValid){
        checkStyleForName= 'form-control';
        checkStyleForEmail = 'form-control'
    }else{
        checkStyleForName= 'form-control invalid'
        checkStyleForEmail= 'form-control invalid'
    }
     
    return(
        <form onSubmit={formSubmitHandler}>
            <div className={checkStyleForName}>
                <label>Your Name</label>
                <input onBlur={nameInputBlurHandler} value={enteredName} type='text' id='name' onChange={nameChangeHandler}/>
                {!isValidName && <p style={{color:'red'}}>Should enter something</p>}
            </div>
            <div className={checkStyleForEmail}>
                <label>E-mail</label>
                <input onBlur={emailInputBlurHandler} value={enteredEmail} type='text' id='name' onChange={emailChangeHandler}/>
                {!isValidEmail && <p style={{color:'red'}}>Should enter correct email</p>}
            </div>
           
            <div className="form-actions">
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    );
};
export default BasicsInput;
