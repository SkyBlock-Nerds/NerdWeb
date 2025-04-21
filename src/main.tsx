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
                        element: <TextGenerator />
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Item-Full-Generator",
                        element: <TooltipGenerator />
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Display-Item-Generator",
                        element: <ItemGenerator />
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Multi-NPC-Dialogue-Generator",
                        element: <div>multi npc</div>
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Single-NPC-Dialogue-Generator",
                        element: <div>single npc</div>
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Head-Generator",
                        element: <div>head</div>
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Inventory-Generator",
                        element: <div>inventory</div>

                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Recipe-Generator",
                        element: <div>recipe</div>
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