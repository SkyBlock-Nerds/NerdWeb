import {StrictMode, lazy, Suspense} from "react";
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTES from "./Routes.ts";
import NotFound from "./pages/error/NotFound.tsx";
import Welcome from "./pages/welcome/Welcome.tsx";

const ImageGeneratorSelect = lazy(() => import('./pages/image-generator/ImageGeneratorSelect.tsx'));
const TextGenerator = lazy(() => import('./pages/image-generator/generator/TextGenerator.tsx'));
const TooltipGenerator = lazy(() => import('./pages/image-generator/generator/TooltipGenerator.tsx'));
const ItemGenerator = lazy(() => import('./pages/image-generator/generator/ItemGenerator.tsx'));
const HeadGenerator = lazy(() => import('./pages/image-generator/generator/HeadGenerator.tsx'));
const RecipeGenerator = lazy(() => import('./pages/image-generator/generator/RecipeGenerator.tsx'));
const InventoryGenerator = lazy(() => import('./pages/image-generator/generator/InventoryGenerator.tsx'));
const SingleDialogueGenerator = lazy(() => import('./pages/image-generator/generator/SingleDialogueGenerator.tsx'));
const MultiDialogueGenerator = lazy(() => import('./pages/image-generator/generator/MultiDialogueGenerator.tsx'));
const History = lazy(() => import('./pages/history/History.tsx'));
const Share = lazy(() => import('./pages/share/Share.tsx'));

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
                element: <Suspense fallback={null}><ImageGeneratorSelect /></Suspense>,
                children: [
                    {
                        path: ROUTES.TEXT_GENERATOR,
                        element: <Suspense fallback={null}><TextGenerator /></Suspense>
                    },
                    {
                        path: ROUTES.ITEM_FULL_GENERATOR,
                        element: <Suspense fallback={null}><TooltipGenerator /></Suspense>
                    },
                    {
                        path: ROUTES.DISPLAY_ITEM_GENERATOR,
                        element: <Suspense fallback={null}><ItemGenerator /></Suspense>
                    },
                    {
                        path: ROUTES.MULTI_NPC_DIALOGUE_GENERATOR,
                        element: <Suspense fallback={null}><MultiDialogueGenerator /></Suspense>
                    },
                    {
                        path: ROUTES.SINGLE_NPC_DIALOGUE_GENERATOR,
                        element: <Suspense fallback={null}><SingleDialogueGenerator /></Suspense>
                    },
                    {
                        path: ROUTES.HEAD_GENERATOR,
                        element: <Suspense fallback={null}><HeadGenerator /></Suspense>
                    },
                    {
                        path: ROUTES.INVENTORY_GENERATOR,
                        element: <Suspense fallback={null}><InventoryGenerator /></Suspense>
                    },
                    {
                        path: ROUTES.RECIPE_GENERATOR,
                        element: <Suspense fallback={null}><RecipeGenerator /></Suspense>
                    },
                ]
            },
            {
                path: ROUTES.HISTORY,
                element: <Suspense fallback={null}><History /></Suspense>,
            },
            {
                path: ROUTES.ERROR,
                element: <NotFound />,
            },
            {
                path: `${ROUTES.SHARE.BASE}/*`,
                element: <Suspense fallback={null}><Share /></Suspense>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);