import './App.css'
import Header from './components/header/Header.tsx'
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";

function App() {
    return (
        <>
            <Header />

            <div className="OutletContainer">
                <Outlet />
            </div>

            <Footer />
        </>
    )
}

export default App