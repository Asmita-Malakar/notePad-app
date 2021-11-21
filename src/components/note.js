import React from "react";
import './noteList.css'
import Moment from 'react-moment';

const Note = ({id, header, text, date}) => {
    return(
        <div className="note">
            <h1>{header}</h1>
            <h3>{text}</h3>
            <div className="footer">
                {date}
            </div>
        </div>
    )
}

export default Note;