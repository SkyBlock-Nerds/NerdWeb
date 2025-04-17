import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Welcome from "./pages/welcome/Welcome.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import ImageGeneratorSelect from "./pages/image-generator/ImageGeneratorSelect.tsx";
import FieldType from "./components/generator-fields/FieldType.ts";
import GeneratorInterface from "./pages/image-generator/generator/GeneratorInterface.tsx";
import GeneratorField from "./components/generator-fields/GeneratorField.ts";

const baseGenEndpoint = "/generator"

const router = createBrowserRouter([
    {
        path: import.meta.env.BASE_URL,
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: import.meta.env.BASE_URL,
                element: <Welcome/>,
            },
            {
                path: import.meta.env.BASE_URL + "/Image-Generator",
                element: <ImageGeneratorSelect/>,
                children: [
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Text-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "Text:",
                                true,
                                undefined,
                                FieldType.BigText,
                                "Enter the text to be generated.",
                                true
                            ),
                            new GeneratorField(
                                "Centered:",
                                false,
                                "centered",
                                FieldType.Checkbox,
                                "Check if the text should be centered.",
                            ),
                            new GeneratorField(
                                "Alpha:",
                                false,
                                "alpha",
                                FieldType.Number,
                                "Enter the alpha value (transparency) for the text.",
                            ),
                            new GeneratorField(
                                "Padding:",
                                false,
                                "padding",
                                FieldType.Number,
                                "Enter the padding value for the text.",
                            ),
                            new GeneratorField(
                                "Max Line Length",
                                false,
                                "maxLineLength",
                                FieldType.Number,
                                "Enter the maximum line length for the text.",
                            ),
                            new GeneratorField(
                                "Render Border",
                                false,
                                "renderBorder",
                                FieldType.Checkbox,
                                "Check if a border should be rendered around the text.",
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/text"}
                        />,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Item-Full-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "Item Name:",
                                false,
                                "itemName",
                                FieldType.Line,
                                "Name of the item to be generated (required).",
                                true
                            ),
                            new GeneratorField(
                                "Item Lore:",
                                false,
                                "itemLore",
                                FieldType.BigText,
                                "Lore of the item to be generated (required).",
                                true
                            ),
                            new GeneratorField(
                                "Type:",
                                false,
                                "type",
                                FieldType.Line,
                                "Type of the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Rarity:",
                                false,
                                "rarity",
                                FieldType.Line,
                                "Rarity of the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Item ID:",
                                false,
                                "itemId",
                                FieldType.Line,
                                "ID of the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Skin Value:",
                                false,
                                "skinValue",
                                FieldType.Line,
                                "Skin value of the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Recipe:",
                                false,
                                "recipe",
                                FieldType.BigText,
                                "Recipe for the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Alpha:",
                                false,
                                "alpha",
                                FieldType.Number,
                                "Alpha value (transparency) for the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Padding:",
                                false,
                                "padding",
                                FieldType.Number,
                                "Padding value for the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Disable Rarity Line Break:",
                                false,
                                "disableRarityLineBreak",
                                FieldType.Checkbox,
                                "Check to disable rarity line break (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Enchanted:",
                                false,
                                "enchanted",
                                FieldType.Checkbox,
                                "Check if the item is enchanted (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Centered:",
                                false,
                                "centered",
                                FieldType.Checkbox,
                                "Check if the text should be centered (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Padding First Line:",
                                false,
                                "paddingFirstLine",
                                FieldType.Checkbox,
                                "Check to add padding to the first line (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Max Line Length:",
                                false,
                                "maxLineLength",
                                FieldType.Number,
                                "Maximum line length for the text (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Tooltip Side:",
                                false,
                                "tooltipSide",
                                FieldType.Line,
                                "Tooltip side for the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Render Border:",
                                false,
                                "renderBorder",
                                FieldType.Checkbox,
                                "Check to render a border around the item (optional).",
                                false
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/tooltip"}
                        />,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Display-Item-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "Item ID:",
                                true,
                                undefined,
                                FieldType.Line,
                                "ID of the item (required).",
                                true
                            ),
                            new GeneratorField(
                                "Data:",
                                false,
                                "data",
                                FieldType.Line,
                                "Additional data for the item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Enchanted:",
                                false,
                                "enchanted",
                                FieldType.Checkbox,
                                "Check if the item is enchanted (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Hover Effect:",
                                false,
                                "hoverEffect",
                                FieldType.Checkbox,
                                "Check to enable hover effect (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Skin Value:",
                                false,
                                "skinValue",
                                FieldType.Line,
                                "Skin value of the item (optional).",
                                false
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/item"}
                        />,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Multi-NPC-Dialogue-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "NPC Names:",
                                false,
                                "npcNames",
                                FieldType.Line,
                                "Names of the NPCs involved in the dialogue.",
                                true
                            ),
                            new GeneratorField(
                                "Dialogue:",
                                false,
                                "dialogue",
                                FieldType.BigText,
                                "Dialogue text to be displayed.",
                                true
                            ),
                            new GeneratorField(
                                "Max Line Length:",
                                false,
                                "maxLineLength",
                                FieldType.Number,
                                "Maximum line length for the dialogue (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Abiphone:",
                                false,
                                "abiphone",
                                FieldType.Checkbox,
                                "Check if the dialogue is for Abiphone (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Skin Value:",
                                false,
                                "skinValue",
                                FieldType.Line,
                                "Skin value for the NPC (optional).",
                                false
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/dialogue/multi"}
                        />,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Single-NPC-Dialogue-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "NPC Name:",
                                false,
                                "npcName",
                                FieldType.Line,
                                "Name of the NPC involved in the dialogue.",
                                true
                            ),
                            new GeneratorField(
                                "Dialogue:",
                                false,
                                "dialogue",
                                FieldType.BigText,
                                "Dialogue text to be displayed.",
                                true
                            ),
                            new GeneratorField(
                                "Max Line Length:",
                                false,
                                "maxLineLength",
                                FieldType.Number,
                                "Maximum line length for the dialogue (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Abiphone:",
                                false,
                                "abiphone",
                                FieldType.Checkbox,
                                "Check if the dialogue is for Abiphone (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Skin Value:",
                                false,
                                "skinValue",
                                FieldType.Line,
                                "Skin value for the NPC (optional).",
                                false
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/dialogue/single"}
                        />,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Head-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "Texture:",
                                true,
                                undefined,
                                FieldType.Line,
                                "Skin/Texture that the head will have (required).",
                                true
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/head"}
                        />,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Inventory-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "Inventory String:",
                                false,
                                "inventoryString",
                                FieldType.BigText,
                                "String representation of the inventory (required).",
                                true
                            ),
                            new GeneratorField(
                                "Rows:",
                                false,
                                "rows",
                                FieldType.Number,
                                "Number of rows in the inventory (required).",
                                true
                            ),
                            new GeneratorField(
                                "Slots Per Row:",
                                false,
                                "slotsPerRow",
                                FieldType.Number,
                                "Number of slots per row in the inventory (required).",
                                true
                            ),
                            new GeneratorField(
                                "Hovered Item String:",
                                false,
                                "hoveredItemString",
                                FieldType.BigText,
                                "String representation of the hovered item (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Container Name:",
                                false,
                                "containerName",
                                FieldType.Line,
                                "Name of the container (optional).",
                                false
                            ),
                            new GeneratorField(
                                "Draw Border:",
                                false,
                                "drawBorder",
                                FieldType.Checkbox,
                                "Check to draw a border around the inventory (optional).",
                                false
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/inventory"}
                        />,

                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Recipe-Generator",
                        element: <GeneratorInterface Fields={[
                            new GeneratorField(
                                "Recipe:",
                                true,
                                undefined,
                                FieldType.Line,
                                "Recipe identifier (required).",
                                true
                            ),
                            new GeneratorField(
                                "Render Background:",
                                false,
                                "renderBackground",
                                FieldType.Checkbox,
                                "Check to render a background (optional).",
                                false
                            ),
                        ]}
                                                     GeneratorEndpoint={baseGenEndpoint + "/recipe"}
                        />,
                    },
                ]
            }
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)