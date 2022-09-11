import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import ViewContact from "./components/contacts/ViewContact/ViewContact";

let App= ()=> {

    return (
        <React.Fragment>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
                <Route path={'/contacts/list'} element={<ContactList/>}/>
                <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
            </Routes>
        </React.Fragment>
    );
}

export default App;
