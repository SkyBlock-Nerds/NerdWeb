import usePageTitle from "../../hooks/usePageTitle.ts";
import {useNavigate} from "react-router-dom";
import ROUTES from "../../Routes.ts";

function Welcome() {
    usePageTitle("Welcome - Nerd Bot");
    const navigate = useNavigate();

    return (
        <div className="text-center mt-3 justify-content-center">
            <h1>Welcome to the Nerd Bot website!</h1>
            <p>
                This website serves as an easier way to use Nerd Bot than using the Discord commands.
                <br/>
                <i><sup>UI's on top!</sup></i>
            </p>

            <h2>This website is still in development.</h2>
            <h5>Want to help out?</h5>
            <p>
                <a href="http://github.com/skyblock-nerds/nerdweb" target="_blank" rel="noopener noreferrer">
                    NerdWeb Repo
                </a> - all contributions are welcome!
            </p>
            <h5>Bug Reports:</h5>
            <p>
                Go to the Nerds Discord and make a bug report in the Bug Report channel.
                <br/>
                Not a True nerd?{" "}
                <a href="https://github.com/SkyBlock-Nerds/NerdWeb/issues/new" target="_blank"
                   rel="noopener noreferrer">
                    Create a GitHub Issue
                </a>
            </p>

            <button className="btn btn-primary mt-3" onClick={() => navigate(ROUTES.IMAGE_GENERATOR)}>
                Get Started
            </button>
        </div>
    );
}

export default Welcome;