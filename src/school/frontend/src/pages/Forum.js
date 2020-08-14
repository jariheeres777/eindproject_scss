import React from "react";
import Nav from "../compoments/Navigation";
import Footer from "../compoments/Footer";
import Massegelist from "../compoments/ForumCompoments/MessageList"
import SendMessageList from "../compoments/ForumCompoments/SendMessageList"
import RoomList from "../compoments/ForumCompoments/RoomList"
import NewRoomForm from "../compoments/ForumCompoments/NewRoomForm"


const Forumpage = () => {
    return (
        <div>
            <Nav/>
            <RoomList/>
            <Massegelist/>
            <NewRoomForm/>
            <SendMessageList/>
            {/*<Footer/>*/}
        </div>
    );
};

export default Forumpage;