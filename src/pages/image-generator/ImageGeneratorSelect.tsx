import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import textImage from "../../assets/image-generator/text.png";
import itemFullImage from "../../assets/image-generator/item_full.png";
import itemDisplayImage from "../../assets/image-generator/item_display.png";
import dialogueMultiImage from "../../assets/image-generator/dialogue_multi.png";
import dialogueSingleImage from "../../assets/image-generator/dialogue_single.png";
import headImage from "../../assets/image-generator/head.png";
import inventoryImage from "../../assets/image-generator/inventory.png";
import recipeImage from "../../assets/image-generator/recipe.png";

const baseGenCommand = "/gen2 "

const imageGeneratorList: {
    name: string;
    discordEquivalent: string;
    description: string;
    exampleImg: string;
    link: string;
}[] = [
    {
        name: "Text Generator",
        discordEquivalent: baseGenCommand + "text",
        description: "Generate some text.",
        exampleImg: textImage,
        link: "Text-Generator"
    },
    {
        name: "Full Item Generator",
        discordEquivalent: baseGenCommand + "item full",
        description: "Generate a full item image. Supports displaying items, recipes, and tooltips.",
        exampleImg: itemFullImage,
        link: "Item-Full-Generator"
    },
    {
        name: "Item Display Generator",
        discordEquivalent: baseGenCommand + "item display",
        description: "Display an item.",
        exampleImg: itemDisplayImage,
        link: "Display-Item-Generator"
    },
    {
        name: "Inventory Generator",
        discordEquivalent: baseGenCommand + "inventory",
        description: "Generate an inventory.",
        exampleImg: inventoryImage,
        link: "Inventory-Generator"
    },
    {
        name: "Recipe Generator",
        discordEquivalent: baseGenCommand + "recipe",
        description: "Generate a recipe.",
        exampleImg: recipeImage,
        link: "Recipe-Generator"
    },
    {
        name: "Multi NPC Dialogue Generator",
        discordEquivalent: baseGenCommand + "dialogue multi",
        description: "Generate dialogue for multiple NPCs.",
        exampleImg: dialogueMultiImage,
        link: "Multi-NPC-Dialogue-Generator"
    },
    {
        name: "Single NPC Dialogue Generator",
        discordEquivalent: baseGenCommand + "dialogue single",
        description: "Generate dialogue for a single NPC.",
        exampleImg: dialogueSingleImage,
        link: "Single-NPC-Dialogue-Generator"
    },
    {
        name: "Head Generator",
        discordEquivalent: baseGenCommand + "head",
        description: "Generate a player head.",
        exampleImg: headImage,
        link: "Head-Generator"
    },
];

function ImageGeneratorSelect() {
    usePageTitle('Image Generators');
    const navigate = useNavigate();

    const [numColumns, setNumColumns] = useState(getNumColumns());

    useEffect(() => {
        const handleResize = () => {
            setNumColumns(getNumColumns());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function getNumColumns() {
        const width = window.innerWidth;
        if (width < 768) return 1; // Mobile
        if (width < 992) return 2; // Tablet
        return 3; // Desktop
    }

    const columnItems: { name: string; discordEquivalent: string; description: string; exampleImg: string; link: string; }[][] = Array.from({ length: numColumns }, () => []);    imageGeneratorList.forEach((item, index) => {
        const colIndex = index % numColumns;
        columnItems[colIndex].push(item);
    });

    return (
        <>
            <div className="OutletContainer">
                <Outlet/>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {columnItems.map((column, colIndex) => (
                        <div key={colIndex} className={`col-${12 / numColumns}`}>
                            {column.map((item, itemIndex) => (
                                <div key={itemIndex} className="mb-4">
                                    <div className="card quaternary-color image-generator-item">
                                        <img src={item.exampleImg} className="card-img-top px-2 pt-2"
                                             alt={`${item.name} example image`}/>
                                        <div className="card-body">
                                            <h3 className="card-title">{item.name}</h3>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text">
                                                Discord Equivalent:
                                                <a className="rounded-4 px-2 py-1 ms-1 tertiary-color text-decoration-none">{item.discordEquivalent}</a>
                                            </p>
                                            <button onClick={() => navigate(item.link)} className="btn btn-primary">
                                                Go to {item.name}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImageGeneratorSelect;