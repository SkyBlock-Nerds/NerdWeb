import {Outlet, useNavigate} from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import textImage from "../../assets/image_generator/text.png";
import itemFullImage from "../../assets/image_generator/item_full.png";
import itemDisplayImage from "../../assets/image_generator/item_display.png";
import dialogueMultiImage from "../../assets/image_generator/dialogue_multi.png";
import dialogueSingleImage from "../../assets/image_generator/dialogue_single.png";
import headImage from "../../assets/image_generator/head.png";
import inventoryImage from "../../assets/image_generator/inventory.png";
import recipeImage from "../../assets/image_generator/recipe.png";

const baseGenCommand = "/gen2 "

const imageGeneratorList = [
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
        link: "Multi-NPC-Dialogue-Generator"
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

    return (
        <>
            <div className="OutletContainer">
                <Outlet />
            </div>

            <div className="container mt-5">
                <div className="row">
                    {imageGeneratorList.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card quaternary-color image-generator-item">
                                <img src={item.exampleImg} className="card-img-top px-2 pt-2" alt={item.name + " example image"}/>
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
            </div>
        </>
    )
}

export default ImageGeneratorSelect;