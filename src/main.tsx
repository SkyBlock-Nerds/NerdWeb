import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Welcome from "./pages/welcome/Welcome.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import ImageGeneratorSelect from "./pages/image_generator/ImageGeneratorSelect.tsx";

const router = createBrowserRouter([
    {
        path: import.meta.env.BASE_URL,
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: import.meta.env.BASE_URL,
                element: <Welcome />,
            },
            {
                path: import.meta.env.BASE_URL + "/Image-Generator",
                element: <ImageGeneratorSelect />,
                children : [
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Text-Generator",
                        element: <div>Text Generator</div>,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Item-Full-Generator",
                        element: <div>Full Item Generator</div>,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Display-Item-Generator",
                        element: <div>Item Display Generator</div>,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Multi-NPC-Dialogue-Generator",
                        element: <div>Multi NPC Dialogue Generator</div>,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Multi-NPC-Dialogue-Generator",
                        element: <div>Single NPC Dialogue Generator</div>,
                    },
                    {
                        path: import.meta.env.BASE_URL + "/Image-Generator/Head-Generator",
                        element: <div>Head Generator</div>,
                    },
                    {
                        path : import.meta.env.BASE_URL + "/Image-Generator/Inventory-Generator",
                        element: <div>Inventory Generator</div>,

                    },
                    {
                        path : import.meta.env.BASE_URL + "/Image-Generator/Recipe-Generator",
                        element: <div>Recipe Generator</div>,

                    },
                ]
            }
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)