import React from "react";
import {state} from "../state/State";
import {NavLink} from "react-router-dom";


export function PageAuthorsAll() {
    return (
        state.map((item) => {
                return (
                    <>
                        <div className="allAuthorsPage">
                            <NavLink to="/">На главную</NavLink>
                            <div className="authorsBlock">
                                <div><img className="circleAuthorsImg" src={item.img} alt={"logo"}/></div>
                                <h1>{item.name + '' + item.surname}</h1>
                                <p>возраст: {item.age}</p>
                                <p>адрес: город {item.city}, улица {item.street}, дом {item.house}</p>
                                <p>почта: {item.email}</p>
                                <p>образование: {item.education}</p>
                            </div>
                        </div>
                    </>
                )
            }
        )
    )
}

export function AuthorInfo(id) {
    return (
        <>
            <div className="authorsBlock">
                <div><img className="circleAuthorsImg" src={state[id].img} alt={"logo"}/></div>
                <h1>{state[id].name + '' + state[id].surname}</h1>
                <p>возраст: {state[id].age}</p>
                <p>адрес: город {state[id].city}, улица {state[id].street}, дом {state[id].house}</p>
                <p>почта: {state[id].email}</p>
                <p>образование: {state[id].education}</p>
                <NavLink to="/">На главную</NavLink>
            </div>
        </>
    )

}

