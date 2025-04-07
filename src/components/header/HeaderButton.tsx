import './HeaderButton.css'

interface HeaderButtonProps {
    text: string;
    onClick: () => void;
}

function HeaderButton({text, onClick}: HeaderButtonProps) {
    return (
        <div className="main-button p-2" onClick={onClick}>
            {text}
        </div>
    )
}

export default HeaderButton
