import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Bakudiscount from "./pages/discount";
import Home1Page from "./pages/Home1";
import HomeOnePage from "./pages/HomeOne";

import Bodythemeagoda from "./pages/Bodythemeagoda";
import Hotel from "./pages/Hotel";
const ProjectRoutes = () => { 
     let element = useRoutes(
        [    
            { path: "/", element: <Bakudiscount /> }, 
               { path: "*", element: <NotFound /> },
               {      path: "/bakudiscount",      element: <Bakudiscount />,    },
               {path: "/home1",      element: <Home1Page />,    },  
                 {      path: "/homeone",      element: <HomeOnePage />,    }, 
                    
                       {      path: "/bodythemeagoda",      element: <Bodythemeagoda />,    },   
                        {      path: "/hotel",      element: <Hotel />,    },  
                    ]); 
                     return element;};
                     export default ProjectRoutes;


