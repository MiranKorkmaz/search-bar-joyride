import "./UserFinder.css"

import { FC } from "react";

export const UserFinder: FC = () => {
    return (
        <div>
            <div className="title">
                <h1>User Finder</h1>
            </div>
            <div className="input-wrapper">
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    )
}