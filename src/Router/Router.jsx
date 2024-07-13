import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Root from "../pages/Root";
import Blog from "../pages/Blog";
import Servics from "../pages/Servics";
import Contact from "../pages/Contact";
    
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root/>,
      children :[
        {
            path:"/",
            element:<App/>
        },
        {
            path:"/servics",
            element: <Servics/>,
            children:[
                {
                    path:'servics1',
                    element:<div>servics 1 
                         <p>Lorem ipsum dolor sit.</p>
                       </div>
                },
                {
                    path:'/servics/servics2',
                    element:<div>servics 2 
                         <p>Lorem ipsum dolor sit.</p>
                       </div>
                },
                {
                    path:'/servics/servics3',
                    element:<div>servics 3 
                         <p>Lorem ipsum dolor sit.</p>
                       </div>
                },
                {
                    path:'/servics/servics4',
                    element:<div>servics 4 
                         <p>Lorem ipsum dolor sit.</p>
                       </div>
                },
                {
                    path:'/servics/servics5',
                    element:<div>servics 5 
                         <p>Lorem ipsum dolor sit.</p>
                       </div>
                }
            ]
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/contact",
            element:<Contact/>
        }
      ]
    },
  ]);

  export default router;