import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Spinner from "../../Spinner/Spinner";


let ViewContact =()=>{

    let {contactId}=useParams();
    console.log(contactId)

    let [state, setState]=useState({
        loading: false,
        contact:{},
        errorMessage: ''
    });
    useEffect(()=>{
        async function fetchUser() {
            setState({...state, loading: true});
            const url_profile = 'https://jsonplaceholder.typicode.com/users/'+contactId;
            let response = await fetch(url_profile);
            return await response.json();
        }

        fetchUser().then(data=>{
            setState({
                ...state,
                loading: false,
                contact: data
            })
        }).catch(error=>{
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        })
    },[contactId])

    let {loading, contact, errorMessage}=state;
    return (
        <React.Fragment>
            <section className="view-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis doloremque dolores dolorum fuga illo ipsa ipsum iusto laudantium libero, nam nemo neque placeat praesentium reprehenderit similique unde veritatis vitae.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/>:<React.Fragment>
                    {
                        Object.keys(contact).length>0 &&
                        <section className="view-contact mt-3">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className="contact-img"/>
                                    </div>
                                    <div className="col-md-8">
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
                                            <li className="list-group-item list-group-item-action">
                                                Company:<span className="fw-bold"> {contact.company.name}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Address:<span className="fw-bold"> {contact.address.suite} {contact.address.street} {contact.address.city} {contact.address.zipcode}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Website:<span className="fw-bold"> {contact.website}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                </React.Fragment>
            }

        </React.Fragment>
    )
}

export default ViewContact;