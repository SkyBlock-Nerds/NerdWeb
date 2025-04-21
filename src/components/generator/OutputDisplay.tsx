function OutputDisplay({outputImg, error}: {
    outputImg: string | null;
    error: string | null;
}) {
    return (
        <>
            <h5>Output:</h5>
            {outputImg && <img src={outputImg} alt="Generated Output" className="img-fluid"/>}
            {error && <p className="text-danger">{error}</p>}
        </>
    )
}

export default OutputDisplay;