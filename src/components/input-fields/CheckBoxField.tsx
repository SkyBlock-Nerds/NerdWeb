function CheckBoxField({value, setValue, formLabel, formName, formInfo}: {
    value: boolean | undefined;
    setValue: (value: boolean) => void;
    formLabel: string;
    formName: string;
    formInfo: string;
}) {
    return (
        <>
            <label className="form-label">{formLabel}</label>
            <div className="form-check">
                <input
                    type="checkbox"
                    id={formName}
                    name={formName}
                    checked={value}
                    className="form-check-input"
                    required={false}
                    onChange={(e) => setValue(e.target.checked)}
                />
                <label htmlFor={formName} className="form-check-label">
                    {formInfo}
                </label>
            </div>
        </>
    );
}

export default CheckBoxField;