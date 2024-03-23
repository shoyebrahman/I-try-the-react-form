import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Opps Something wrong</h1>
            <p>{error.statusText || error.message}</p>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default ErrorPage;