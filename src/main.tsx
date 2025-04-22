import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Welcome from "./pages/welcome/Welcome.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import ImageGeneratorSelect from "./pages/image-generator/ImageGeneratorSelect.tsx";
import TextGenerator from "./pages/image-generator/generator/TextGenerator.tsx";
import TooltipGenerator from "./pages/image-generator/generator/TooltipGenerator.tsx";
import ItemGenerator from "./pages/image-generator/generator/ItemGenerator.tsx";
import HeadGenerator from "./pages/image-generator/generator/HeadGenerator.tsx";
import RecipeGenerator from "./pages/image-generator/generator/RecipeGenerator.tsx";
import InventoryGenerator from "./pages/image-generator/generator/InventoryGenerator.tsx";
import SingleDialogueGenerator from "./pages/image-generator/generator/SingleDialogueGenerator.tsx";

const router = createBrowserRouter([
    {
        path: import.meta.env.BASE_URL,
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "",
                element: <Welcome/>,
            },
            {
                path: "Image-Generator",
                element: <ImageGeneratorSelect/>,
                children: [
                    {
                        path: "Text-Generator",
                        element: <TextGenerator/>
                    },
                    {
                        path: "Item-Full-Generator",
                        element: <TooltipGenerator/>
                    },
                    {
                        path: "Display-Item-Generator",
                        element: <ItemGenerator/>
                    },
                    {
                        path: "Multi-NPC-Dialogue-Generator",
                        element: <div>multi npc</div>
                    },
                    {
                        path: "Single-NPC-Dialogue-Generator",
                        element: <SingleDialogueGenerator/>
                    },
                    {
                        path: "Head-Generator",
                        element: <HeadGenerator/>
                    },
                    {
                        path: "Inventory-Generator",
                        element: <InventoryGenerator/>

                    },
                    {
                        path: "Recipe-Generator",
                        element: <RecipeGenerator/>
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