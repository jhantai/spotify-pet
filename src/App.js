import React from 'react';
import "./App.css"
import SideBar from "./modules/sideBar/sideBar";
import MainRoutes from "./MainRoutes/MainRoutes";


const App = () => {
    return (
   <div className={'App'}>
       <SideBar />
       <div>
           <MainRoutes />
       </div>
   </div>
    );
};

export default App;