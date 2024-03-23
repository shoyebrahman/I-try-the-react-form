import { useLoaderData } from "react-router-dom";


const User = () => {
    const users = useLoaderData();
    return (
        <div>
           <h1>User: {users.length}</h1> 
        </div>
    );
};

export default User;