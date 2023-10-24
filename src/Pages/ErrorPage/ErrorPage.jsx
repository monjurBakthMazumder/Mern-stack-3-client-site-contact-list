import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            ErrorPage
            <Link to={'/'} className="btn">Go Home</Link>
        </div>
    );
};

export default ErrorPage;