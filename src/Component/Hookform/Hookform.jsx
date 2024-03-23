import useInputState from "./useinputstate";


const Hookform = () => {
    const [name, handleNameChange] = useInputState('rojoni');

    const handleSubmit = e =>{
        console.log('form data', name);
        e.preventDefault();
    }
    return (
        <div>
               <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} type="text" name="name"/>
            <br/>
            <input   type="email" name="email" id=""/>
           <br/>
           <input type="submit" value="submit" />
           <input  type="password" name="password"/>
           
            </form> 
        </div>
    );
};

export default Hookform;