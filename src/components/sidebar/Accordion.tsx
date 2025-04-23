import React, { useState } from "react";
import "./Accordion.css";


function Accordion({ title, children }: {
    title: string;
    children: React.ReactElement;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Accordion">
            <div className="AccordionTitle tertiary-color" onClick={toggleAccordion}>
                <h5>{title}</h5>
                <h4>{isOpen ? "=" : "+"}</h4>
            </div>
            {isOpen && <div className="AccordionContent quaternary-color">{children}</div>}
        </div>
    );
}

export default Accordion;