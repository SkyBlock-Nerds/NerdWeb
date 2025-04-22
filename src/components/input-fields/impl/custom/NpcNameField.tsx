import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SmallTextField from "../../SmallTextField.tsx";


function NpcNameField({value, setValue, onRemove}: {
    value: string;
    setValue: (value: string) => void;
    onRemove: () => void
}) {
    return (
        <>
            <label className="form-label">Npc Name:</label>
            <div className="mb-3">
                <div className="input-group  align-items-start">
                    <SmallTextField
                        setValue={(value) => {
                            setValue(value);
                        }}
                        formInfo="Npc Name"
                        formName="npcName"
                        value={value}
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

export default NpcNameField;