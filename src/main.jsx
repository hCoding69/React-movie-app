import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviePage from './MoviePage.jsx';


const router = createBrowserRouter([{
    path:'/',
    element: <App />,
    errorElement: <div>404 not found</div>
},
{
    path: '/:movieId',
    element: <MoviePage />
},


    
])
createRoot(document.getElementById('root')).render(

    <RouterProvider router = {router} />

)
