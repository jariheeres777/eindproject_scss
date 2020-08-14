import React from "react";

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'hey how is it going'
    },
    {
        senderId: 'jandoe',
        text: 'great'
    },
    {
        senderId: 'perborgen',
        text: 'yeah im fine too thanks for asking -_-'
    }

]

const MassegeList = () => {
    return (
        <div className="message-list">
            {DUMMY_DATA.map((message, index) => {
                return (
                    <div key={index} className="message">
                        <div className="message-username">{message.senderId}</div>
                        <div className="message-text">{message.text}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default MassegeList
