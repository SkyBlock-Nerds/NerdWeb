import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTES from "./Routes.ts";
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
import MultiDialogueGenerator from "./pages/image-generator/generator/MultiDialogueGenerator.tsx";
import History from "./pages/history/History.tsx";

const router = createBrowserRouter([
    {
        path: ROUTES.BASE,
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: ROUTES.WELCOME,
                element: <Welcome />,
            },
            {
                path: ROUTES.IMAGE_GENERATOR,
                element: <ImageGeneratorSelect />,
                children: [
                    {
                        path: ROUTES.TEXT_GENERATOR,
                        element: <TextGenerator />
                    },
                    {
                        path: ROUTES.ITEM_FULL_GENERATOR,
                        element: <TooltipGenerator />
                    },
                    {
                        path: ROUTES.DISPLAY_ITEM_GENERATOR,
                        element: <ItemGenerator />
                    },
                    {
                        path: ROUTES.MULTI_NPC_DIALOGUE_GENERATOR,
                        element: <MultiDialogueGenerator />
                    },
                    {
                        path: ROUTES.SINGLE_NPC_DIALOGUE_GENERATOR,
                        element: <SingleDialogueGenerator />
                    },
                    {
                        path: ROUTES.HEAD_GENERATOR,
                        element: <HeadGenerator />
                    },
                    {
                        path: ROUTES.INVENTORY_GENERATOR,
                        element: <InventoryGenerator />
                    },
                    {
                        path: ROUTES.RECIPE_GENERATOR,
                        element: <RecipeGenerator />
                    },
                ]
            },
            {
                path: ROUTES.HISTORY,
                element: <History />,
            }
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);