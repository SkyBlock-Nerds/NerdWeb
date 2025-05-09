import NerdBotIcon from '../../assets/icon.svg';
import HeaderButton from "./HeaderButton.tsx";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../Routes.ts";

const headerButtons = [
    {
        text: "Image Generators",
        link: ROUTES.IMAGE_GENERATOR,
    },
    {
        text: "Generator History",
        link: ROUTES.HISTORY,
    }
];

function Header() {
    const navigate = useNavigate();

    return (
        <div className="main d-flex align-items-center secondary-color text-white">
            <a href={import.meta.env.BASE_URL} className="d-flex m-2 align-items-center text-white text-decoration-none">
                <img src={NerdBotIcon} alt="NerdBot Icon" className="me-2" height="40" />
                <h4 className="mb-0">{import.meta.env.VITE_APP_NAME}</h4>
            </a>
            <div className="ps-2">
                {headerButtons.map((item, index) => (
                    <HeaderButton key={index} text={item.text} onClick={() => navigate(item.link)} />
                ))}
            </div>
        </div>
    );
}

export default Header;