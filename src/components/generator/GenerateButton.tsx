function GenerateButton({onClick}: {onClick: () => void }) {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            Generate
        </button>
    )
}

export default GenerateButton;