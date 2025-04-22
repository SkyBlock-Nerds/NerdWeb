import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SmallTextField from "../../SmallTextField.tsx";


function SingleNpcDialogueLineField({dialogueLine, setDialogueLine, onRemove}: {
    dialogueLine: string;
    setDialogueLine: (value: string) => void;
    onRemove: () => void
}) {
    return (
        <>
            <label className="form-label">Line:</label>
            <div className="mb-3">
                <div className="input-group  align-items-start">
                    <SmallTextField
                        setValue={(value) => {
                            dialogueLine = value;
                            setDialogueLine(dialogueLine);
                        }}
                        formInfo="Dialogue line"
                        formName="dialogueLine"
                        value={dialogueLine}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={onRemove}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </>
    );
}

export default SingleNpcDialogueLineField;