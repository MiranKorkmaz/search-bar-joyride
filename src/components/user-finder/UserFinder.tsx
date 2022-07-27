import { FC, useState } from "react";
import "./UserFinder.css";
import { users } from "../../data/UserFinderData";
import { IUserFinder } from "../../interfaces/interfaces";


export const UserFinder: FC = () => {
    const [userList, setUserList] = useState<Array<IUserFinder> | undefined>(users)
    const [text, setText] = useState("");

    const handleOnClick = () => {
        const findUsers = 
            userList && userList?.length > 0
            ? userList?.filter(u => u?.name === text): undefined;
        setUserList(findUsers);
    };

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
                    onChange={(e) => {setText(e.target.value); setUserList(users)}}
                    />
                <button 
                    disabled={!text} 
                    onClick={handleOnClick}
                >
                    Search
                </button>
            </div>
            <div className="body">
                {userList && userList?.length === 0 && (
                    <div className="not-found">No User Found</div>
                )}
                
                {userList && userList?.length > 0 && userList?.map(user => {
                    return (
                        <div className="body-item">
                            <h3>Name: {user?.name}</h3>
                            <p>Age: {user?.age}</p>
                            <p>Designation {user?.designation}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};