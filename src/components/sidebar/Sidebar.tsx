import { useState } from "react";
import "./Sidebar.css";
import Accordion from "./Accordion";
import colorCodesMap from "../style-code-parser/ColorCodes.ts"
import formatCodesMap from "../style-code-parser/FormatCodes";
import StyleCodeParser from "../style-code-parser/StyleCodeParser";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`Sidebar primary-color ${isOpen ? "open" : ""}`}>
                <h2>Sidebar</h2>
                <Accordion
                    children={
                        <div className="quaternary-color">{
                            Object.entries(colorCodesMap).map(([code, color]) => (
                                <div key={code} style={{ display: "flex", alignItems: "center", margin: "5px" }}>
                                    <span style={{ fontFamily: "monospace" }} >{code}</span>
                                    <div
                                        style={{
                                            backgroundColor: color,
                                            width: "20px",
                                            height: "20px",
                                            border: "1px solid black",
                                            margin: "0 0 0 10px"
                                        }}
                                    />
                                </div>
                            ))}
                        </div>}
                    title={"Color Codes"}
                />
                <Accordion
                    children={
                        <div className="quaternary-color">{
                            Object.entries(formatCodesMap).map(([code, name]) => (
                                <div key={code} style={{ display: "flex", alignItems: "center", margin: "5px" }}>
                                    <span style={{ fontFamily: "monospace" }} >{code}</span>
                                    <span className="color-code-item" style={{ margin: "0 0 0 10px"}}>
                                        <StyleCodeParser textToBeParsed={code+name} />
                                    </span>
                                </div>
                            ))}
                        </div>}
                    title={"Format Codes"}
                />
            </div>
            <button
                className={`SidebarToggle primary-color ${isOpen ? "move-right" : ""}`}
                onClick={toggleSidebar}
            >
                {isOpen ? "Close" : "Open"}
            </button>
        </>
    );
}

export default Sidebar;