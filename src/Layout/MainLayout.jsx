import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const MainLayout = () => {
    return (
        <div className='min-h-screen dark:bg-gray-700'>
            <div className="max-w-3xl mx-auto ">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;