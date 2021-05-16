import ToolKit from "../Images/ToolKit.png"
import AnonymChatBot from "../Images/AnonymChatBot.png"
import FreedomLand from "../Images/FreedomLand.png"

import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { MDBCol, MDBRow } from "mdbreact"
import { FiLink, FiGithub, FiHome } from "react-icons/all"

var projects = [
    {
        "name": "ToolKit",
        "about": "Telegram bot for moderation and more",
        "link": "https://t.me/Tool_kit_bot",
        "github": "https://github.com/igorechek06/ToolKit",
        "logo": ToolKit
    },
    {
        "name": "Anonym chat bot",
        "about": "Russian anonymous chat",
        "link": "https://t.me/ru_anonym_chat_bot",
        "github": null,
        "logo": AnonymChatBot
    },
    {
        "name": "FreedomLand",
        "about": "Russian Minecraft server",
        "link": "https://discord.gg/yjY9pEDCZd",
        "github": null,
        "logo": FreedomLand
    }
]

class Projects extends Component {
    render() {
        const items = []
        for (const project of projects) {
            items.push(projectCard(project))
        }

        const home =
            <MDBRow around className={'m-5'}>
                <Link to="/">
                    <FiHome fontSize={26} />
                </Link>
            </MDBRow>
        return (
            <div>
                <MDBCol middle className={'text-left'}>
                    {home}
                    {items}
                    {home}
                </MDBCol>
            </div>
            // <div>
            //     <div className={"row text-center"}>
            //         <img
            //             alt="logo"
            //             className="img-fluid shadow-lg"
            //             src={ToolKit}
            //             style={{
            //                 borderRadius: "50%",
            //                 maxWidth: "120px",
            //                 maxHeight: "120px",
            //             }}
            //         />
            //         <MDBCol middle className={"text-left"}>
            //             <h1 className={"m-0"}>Igor 🐞</h1>
            //             <h3 className={"text-muted mx-0 mt-0 mb-2"}>I hate niggers</h3>
            //             <MDBRow around>
            //                 <a href={"https://t.me/igorechek06"} style={{ color: "#0088CC" }}>
            //                     <RiTelegramLine fontSize={30} />
            //                 </a>
            //                 <a href={"https://github.com/igorechek06"} style={{ color: "#211F1F" }}>
            //                     <FiGithub fontSize={26} />
            //                 </a>
            //                 <Link to="/">
            //                     Home
            //                 </Link>
            //             </MDBRow>
            //         </MDBCol>
            //     </div >
            // </div>
        )
    }
}

function projectCard(project) {
    var github
    if (project["github"] != null) {
        github =
            <a href={project["github"]} style={{ color: '#211F1F' }}>
                <FiGithub fontSize={26} />
            </a>
    }
    return <div className={'row text-center m-5'}>
        <img
            alt="logo"
            className="img-fluid shadow-lg"
            src={project["logo"]}
            style={{
                borderRadius: '50%',
                maxWidth: '120px',
                maxHeight: '120px',
            }}
        />
        <MDBCol middle className={'text-left'}>
            <h1 className={'m-0'}>{project["name"]}</h1>
            <h3 className={'text-muted mx-0 mt-0 mb-2'}>{project["about"]}</h3>
            <MDBRow around>
                {github}
                <a href={project["link"]} style={{ color: '#0088CC' }}>
                    <FiLink fontSize={26} />
                </a>
            </MDBRow>
        </MDBCol>
    </div>
}

export default Projects
