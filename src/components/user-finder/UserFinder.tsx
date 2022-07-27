import { FC, useState } from "react";
import "./UserFinder.css";


export const UserFinder: FC = () => {
    const users = [
        {
            name: "Ronni",
            age: 23,
            designation: "Stockbroker"
        },
        {
            name: "Miran",
            age: 25,
            designation: "Software Engineer"
        },
        {
            name: "Matin",
            age: 24,
            designation: "Law Student"
        },
        {
            name: "Ala",
            age: 1.5,
            designation: "A Cat"
        },
    ];

    const [text, setText] = useState("");
    return (
        <div>
            <div className="title">
                <h1>User Finder</h1>
            </div>
            <div className="input-wrapper">
                <input 
                    type="text"
                    placeholder="Search User"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    />
                <button>Search</button>
            </div>
            <div className="body">

            </div>
        </div>
    )
};