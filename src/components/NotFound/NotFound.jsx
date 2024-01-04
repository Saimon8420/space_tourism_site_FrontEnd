import './NotFound.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p><Link to="/">Go Back</Link></p>
        </div>
    );
};

export default NotFound;