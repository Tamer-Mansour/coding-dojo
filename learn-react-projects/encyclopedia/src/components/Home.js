import React from "react";
import "./Home.css"
import Task from "../Images/Task.png"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ToDoList from "../ToDo/ToDoList";

const Home = (props) => {
    return (
        <>
            <div>
                <h1 className="text-center">Welcome to my web site</h1>
            </div>
            <div className="card sort" style={{ width: "18rem" }}>
                <img className="card-img-top" src={Task} alt="task" />
                <div className="card-body">
                    <h5 className="card-title">To Do list</h5>
                    <p className="card-text">I made this task when i learn react coding dojo.</p>
                    <button className="btn btn-primary"><Link to="/todo" style={{ "color": "white" }}>Go to task</Link></button>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/todo">
                            <ToDoList />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
};
export default Home;