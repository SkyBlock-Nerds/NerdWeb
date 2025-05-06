import {useEffect, useState} from "react";
import "./Sidebar.css";
import Accordion from "./Accordion";
import colorCodesMap from "../style-code-parser/ColorCodes.ts";
import formatCodesMap from "../style-code-parser/FormatCodes";
import StyleCodeParser from "../style-code-parser/StyleCodeParser";
import getIcon from "../../api-client/requests/GetIcon.ts";
import Stat from "../../api-client/api-models/Stat.ts";
import getStat from "../../api-client/requests/GetStat.ts";
import Icon from "../../api-client/api-models/Icon.ts";
import Gemstone from "../../api-client/api-models/Gemstone.ts";
import getGemstone from "../../api-client/requests/GetGemstone.ts";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [stats, setStats] = useState<Stat[]>([]);
    const [icons, setIcons] = useState<Icon[]>([]);
    const [gemstones, setGemstones] = useState<Gemstone[]>([]);


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const fetchOptions = async () => {
            setStats(await getStat());
            setIcons(await getIcon());
            setGemstones(await getGemstone());
        };
        fetchOptions();
    }, []);

    return (
        <>
            <div className={`Sidebar primary-color ${isOpen ? "open" : ""}`}>
                <h2>Cheat sheet</h2>
                <Accordion
                    children={
                        <div className="quaternary-color">{
                            Object.entries(colorCodesMap).map(([code, color]) => (
                                <div
                                    key={code}
                                    style={{display: "flex", alignItems: "center", margin: "5px", width: "100%"}}
                                >
                                    <div style={{fontFamily: "monospace", width: "10%"}}>{code}</div>
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
                                <div key={code}
                                     style={{display: "flex", alignItems: "center", margin: "5px", width: "100%"}}
                                >
                                    <div style={{fontFamily: "monospace", width: "10%"}}>{code}</div>
                                    <div className="color-code-item" style={{marginLeft: "10px"}}>
                                        <StyleCodeParser textToBeParsed={code + name}/>
                                    </div>
                                </div>
                            ))}
                        </div>}
                    title={"Format Codes"}
                />
                <Accordion
                    children={
                        <div className="quaternary-color">{
                            icons.map((icon, index) => (
                                <div key={index}
                                     style={{display: "flex", alignItems: "center", margin: "5px", width: "100%"}}
                                >
                                    <div style={{fontFamily: "monospace", width: "75%"}}>{icon.name}</div>
                                    <div className="color-code-item" style={{fontFamily: "monospace"}}>
                                        {icon.icon}
                                    </div>
                                </div>
                            ))}
                        </div>}
                    title={"Icons"}
                />
                <Accordion
                    children={
                        <div className="quaternary-color">{
                            gemstones.map((icon, index) => (
                                <div key={index}
                                     style={{display: "flex", alignItems: "center", margin: "5px", width: "100%"}}
                                >
                                    <div style={{fontFamily: "monospace", width: "75%"}}>{icon.name}</div>
                                    <div className="color-code-item" style={{fontFamily: "monospace"}}>
                                        [{icon.icon}]
                                    </div>
                                </div>
                            ))}
                        </div>}
                    title={"Gemstones"}
                />
                <Accordion
                    children={
                        <div className="quaternary-color">{
                            stats.map((stat, index) => (
                                <div key={index}
                                     style={{display: "flex", alignItems: "center", margin: "5px", width: "100%"}}
                                >
                                    <div style={{fontFamily: "monospace", width: "75%"}}>{stat.name}</div>
                                </div>
                            ))}
                        </div>}
                    title={"Stats"}
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