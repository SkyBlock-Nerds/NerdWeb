import { useEffect, useState, useRef } from "react";
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
import Flavor from "../../api-client/api-models/Flavor.ts";
import getFlavor from "../../api-client/requests/GetFlavor.ts";

function Sidebar() {
    const [width, setWidth] = useState(250);
    const [isResizing, setIsResizing] = useState(false);
    const [stats, setStats] = useState<Stat[]>([]);
    const [icons, setIcons] = useState<Icon[]>([]);
    const [gemstones, setGemstones] = useState<Gemstone[]>([]);
    const [flavors, setFlavors] = useState<Flavor[]>([]);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => {
        setIsResizing(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            const newWidth = window.innerWidth - e.clientX;
            if (newWidth > 50 && newWidth < 600) {
                setWidth(newWidth);
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);

    useEffect(() => {
        const fetchOptions = async () => {
            setStats(await getStat());
            setIcons(await getIcon());
            setGemstones(await getGemstone());
            setFlavors(await getFlavor());
        };
        fetchOptions();
    }, []);

    return (<>
        <div
            className="Sidebar primary-color"
            ref={sidebarRef}
            style={{ width: `${width}px` }}
        >
            <h2>Cheat sheet</h2>
            <Accordion
                children={<div className="quaternary-color">
                    {Object.entries(colorCodesMap).map(([code, color]) => (<div
                        key={code}
                        style={{ display: "flex", alignItems: "center", margin: "5px", width: "100%" }}
                    >
                        <div style={{ fontFamily: "monospace", width: "10%" }}>{code}</div>
                        <div
                            style={{
                                backgroundColor: color,
                                width: "20px",
                                height: "20px",
                                border: "1px solid black",
                                margin: "0 0 0 10px"
                            }}
                        />
                    </div>))}
                </div>}
                title={"Color Codes"}
            />
            <Accordion
                children={<div className="quaternary-color">
                    {Object.entries(formatCodesMap).map(([code, name]) => (<div
                        key={code}
                        style={{ display: "flex", alignItems: "center", margin: "5px", width: "100%" }}
                    >
                        <div style={{ fontFamily: "monospace", width: "10%" }}>{code}</div>
                        <div
                            className="color-code-item"
                            style={{ marginLeft: "10px" }}
                        >
                            <StyleCodeParser textToBeParsed={code + name} />
                        </div>
                    </div>))}
                </div>}
                title={"Format Codes"}
            />
            <Accordion
                children={<div className="quaternary-color">
                    {Array.isArray(icons) && icons.map((icon, index) => (<div
                        key={index}
                        style={{ display: "flex", alignItems: "center", margin: "5px", width: "100%" }}
                    >
                        <div style={{ fontFamily: "monospace", width: "75%" }}>{icon.name}</div>
                        <div
                            className="color-code-item"
                            style={{ fontFamily: "monospace" }}
                        >
                            {icon.icon}
                        </div>
                    </div>))}
                </div>}
                title={"Icons"}
            />
            <Accordion
                children={<div className="quaternary-color">
                    {Array.isArray(gemstones) && gemstones.map((icon, index) => (<div
                        key={index}
                        style={{ display: "flex", alignItems: "center", margin: "5px", width: "100%" }}
                    >
                        <div style={{ fontFamily: "monospace", width: "75%" }}>{icon.name}</div>
                        <div
                            className="color-code-item"
                            style={{ fontFamily: "monospace" }}
                        >
                            {`[` + icon.icon + `]`}
                        </div>
                    </div>))}
                </div>}
                title={"Gemstones"}
            />
            <Accordion
                children={<div className="quaternary-color">
                    {Array.isArray(stats) && stats.map((stat, index) => (<div
                        key={index}
                        style={{ display: "flex", alignItems: "center", margin: "5px", width: "100%" }}
                    >
                        <div style={{ fontFamily: "monospace", width: "75%" }}>{stat.name}</div>
                    </div>))}
                </div>}
                title={"Stats"}
            />
            <Accordion
                children={<div className="quaternary-color">
                    {Array.isArray(flavors) && flavors.map((flavor, index) => (<div
                        key={index}
                        style={{ display: "flex", alignItems: "center", margin: "5px", width: "100%" }}
                    >
                        <div style={{ fontFamily: "monospace", width: "75%" }}>{flavor.name}</div>
                        <div
                            className="color-code-item"
                            style={{ fontFamily: "monospace" }}
                        >
                            {flavor.display}
                        </div>
                    </div>))}
                </div>}
                title={"Flavors"}
            />
            <div
                className="ResizeHandle"
                onMouseDown={handleMouseDown}
                style={{ 
                    right: `${width}px`,
                }}
            />
        </div>
    </>);
}

export default Sidebar;