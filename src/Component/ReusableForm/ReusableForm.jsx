

const ReusableForm = ({formTitle,handleSubmit, submitBtnText ='submit'}) => {
   
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            
        }
       
    
    }
    return (
        <div>
            <h2>{formTitle}</h2>
             <form onSubmit={handleLocalSubmit}>
            <input type="text" name="name"/>
            <br/>
            <input type="email" name="email"/>
           <br/>
           <input type="Submit" value={submitBtnText} />
            </form> 
        </div>
    );
};

export default ReusableForm;