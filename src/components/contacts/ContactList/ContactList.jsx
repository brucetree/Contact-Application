import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

let ContactList =()=>{

    let [state, setState]=useState({
        loading: false,
        contacts:[],
        errorMessage: ''
    });
    useEffect(()=>{
        async function fetchUser() {
            setState({...state, loading: true});
            const url_profile = 'https://jsonplaceholder.typicode.com/users';
            let response = await fetch(url_profile);
            return await response.json();
        }
        fetchUser().then(data=>{
            setState({
                ...state,
                loading: false,
                contacts: data
            })
        }).catch(error=>{
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        })
    },[]);

    let {loading, contacts, errorMessage}=state;
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="rol1">
                                <p className="h3 fw-bold">Contact Application</p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis neque reiciendis rem? Aliquam debitis delectus deleniti deserunt distinctio dolorum eius expedita, facilis, molestiae nostrum quas quia ratione similique ut velit!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {loading ?<Spinner/>:<React.Fragment>
                <section className="contact-list">
                    <div className="container">
                        <div className="row">
                            {
                                contacts.length>0 &&
                                    contacts.map(contact=>{
                                        return(
                                            <div className="col-md-6" key={contact.id}>
                                                <div className="card my-2">
                                                    <div className="card-body">
                                                        <div className="row align-items-center d-flex justify-content-around">
                                                            <div className="col-md-4">
                                                                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className="contact-img"/>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Name:<span className="fw-bold"> {contact.name}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Phone:<span className="fw-bold"> {contact.phone}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Email:<span className="fw-bold"> {contact.email}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                                <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                                                    <i className="fa fa-eye"/>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }

                        </div>
                    </div>
                </section>
            </React.Fragment>}

        </React.Fragment>
    )
}

export default ContactList;