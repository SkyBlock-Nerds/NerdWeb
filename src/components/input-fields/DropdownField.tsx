function DropdownField({value, setValue, options, formLabel, formName, formInfo}: {
    value?: string;
    setValue: (value: string) => void;
    options: string[];
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
            <select
                name={formName}
                className="form-select"
                required={false}
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    setValue(selectedValue);
                }}
                value={value || formInfo}
            >
                <option disabled>{formInfo}</option>

                {options.sort().map((option, index) => (
                    <option key={index} value={option}>
                        {option.replace(/_/g, " ")}
                    </option>
                ))}
            </select>
        </>
    );
}

export default DropdownField;