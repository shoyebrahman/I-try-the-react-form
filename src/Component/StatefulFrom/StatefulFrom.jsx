import { useState } from "react";


const StatefulFrom = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e =>{
        e.priventDefault( );
        console.log(email, password);

    }

    

    const handleEmailChage = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);

    }

    const handlepasswordchage = e => {
        setPassword(e.target.value);
        if(password.length < 6) {
            setError('password must be six character')
        }
        else{
            setError('');
            console.log( name, email, password);
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <br/>
            <input onChange={handleEmailChage} type="email" name="email" id=""/>
           <br/>
           <input type="submit" value="submit" />
           <input onChange={handlepasswordchage} type="password" name="password"/>
            {
                error && <p>{error}</p>
            }
            </form> 
        </div>
    );
};

export default StatefulFrom;