import usePageTitle from "../../hooks/usePageTitle.ts";

function Welcome() {
    usePageTitle("");

    return (
        <div className="text-center mt-3 justify-content-center">
            <h1> Welcome to the Nerd Bot website!</h1>
            <p> This website will serve as an easier way to use Nerd Bot than using the discord commands.</p>
            <br/>
            <h1>Why isn't this website functional?</h1>
            <p>Currently waiting on <a href="http://github.com/skyblocknerds/nerdbot">NerdBot</a> to get an API.</p>
            <h2>What should be included in the API?</h2>
            <p>
                A get api/generator endpoint for each type of generator with parameters for each generator option (item_name, item_lore, etc.).<br/>
                A get api/generator/info endpoint which lists all the params and their auto completes.<br/>
            </p>
        </div>
    )
}

export default Welcome;