import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Add from '../Pages/Add/Add';
import Update from '../Pages/Update/Update';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch("http://localhost:5000/contacts")
            },
            {
                path: '/add',
                element: <Add/>
            },
            {
                path: '/update/:id',
                element: <Update/>,
                loader: ({params}) => fetch(`http://localhost:5000/contacts/${params.id}`)
            }
        ]
    }
])

export default Route;