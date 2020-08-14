import React from "react";


const privatemessage = () => {
    return (
        <div className="u-center-text">
            <div id="message-container"></div>
            <form id="send-container">
                <input type="text" id="message-input"/>
                    <button type="submit" id="send-button"> send
                    </button>
            </form>
        </div>
)
}
export default privatemessage;