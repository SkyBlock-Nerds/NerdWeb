function SmallTextField({ value, setValue, formLabel, formName, formInfo, disabled = false, required = true}: {
    value: string | undefined;
    setValue: (value: string) => void;
    formLabel?: string;
    formName: string;
    formInfo: string;
    disabled?: boolean;
    required?: boolean;
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
                disabled={disabled}
                required={required}
                onChange={
                    (e) => {
                        setValue(e.target.value);
                    }
                }
            />
        </>
    );
}

export default SmallTextField;
