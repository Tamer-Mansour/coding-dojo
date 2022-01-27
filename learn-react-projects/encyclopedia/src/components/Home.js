import React from "react";
import "./Home.css"
import Task from "../Images/Task.png"
const Home = (props) => {
    return ( <
        >
        <
        div >

        <
        /div> <
        div className = "card sort"
        style = {
            { width: "18rem" } } >
        <
        img className = "card-img-top"
        src = { Task }
        alt = "task" / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > Card title < /h5> <
        p className = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> <
        button className = "btn btn-primary" > Go somewhere < /button> <
        /div> <
        /div> <
        div className = "card sort"
        style = {
            { width: "18rem" } } >
        <
        img className = "card-img-top"
        src = { Task }
        alt = "task" / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > Card title < /h5> <
        p className = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> <
        button className = "btn btn-primary" > Go somewhere < /button> <
        /div> <
        /div>

        <
        />
    );
};
export default Home;