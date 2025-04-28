function SmallTextField({value, setValue, formLabel, formName, formInfo}: {
    value: string | undefined;
    setValue: (value: string) => void;
    formLabel?: string;
    formName: string;
    formInfo: string;
}) {
    return (
        <>
            {formLabel == null || formLabel.length == 0 ?
                ""
                :
                <label className="form-label">{formLabel}</label>
            }
            <input
                type="text"
                name={formName}
                spellCheck={false}
                placeholder={formInfo}
                className="form-control"
                value={value}
                required={true}
                onChange={
                    (e) => {
                        setValue(e.target.value)
                        console.warn("")
                    }
                }
            />
        </>
    );
}

export default SmallTextField;