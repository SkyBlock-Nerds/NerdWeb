import usePageTitle from "../../hooks/usePageTitle";

function Test() {
    usePageTitle('Test');

    return (
        <div className="container mt-3">
            <button
                onClick={() => {
                    throw new Error("Test error");
                }}
                className="btn btn-primary"
            >
                Throw test error
            </button>
        </div>
    );
}

export default Test;
