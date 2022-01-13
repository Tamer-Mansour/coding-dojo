import React from "react";
import { Link } from 'react-router-dom';
export function Home() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>Error 404</h2>
            <nav>
                <Link to="">Home</Link>
                <Link to="about">about</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}
export function About() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>Error 404</h2>
        </div>
    );
}
export function Events() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>Error 404</h2>
        </div>
    );
}
export function Contact() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>Error 404</h2>
        </div>
    );
}
export function Whooooooops404(){
    return(
        <div>
            <h1>This Page Is Not Exist!</h1>
        </div>
    );

    
}