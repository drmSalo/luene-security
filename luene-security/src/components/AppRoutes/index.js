import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../../Pages/Home";
import Sicherheitsdienst from "../../Pages/Sicherheitsdienst";
import Zeitarbeit from "../../Pages/Zeitarbeit";
import Kontakt from "../../Pages/Kontakt";

function AppRoutes(props){
    return(
        <>
        <Routes>
            <Route
            path="/"
            element={
                <Sicherheitsdienst/>
            } 
            />
        
            <Route
            path="/reinigungsdienst"
            element={
                <Home/>
            }
            />
            <Route
            path="/zeitarbeit"
            element={
                <Zeitarbeit/>
            }
            />
            <Route
            path="/kontakt"
            element={
                <Kontakt/>
            }
            />
                
            
        </Routes>
        </>
    )
}

export default AppRoutes