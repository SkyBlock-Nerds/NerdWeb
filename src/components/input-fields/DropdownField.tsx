function DropdownField({value, setValue, options, formLabel, formName, formInfo, tryNiceFormatting = true}: {
    value?: string;
    setValue: (value: string) => void;
    options: string[];
    formLabel?: string;
    formName: string;
    formInfo: string;
    tryNiceFormatting?: boolean;
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
                        {tryNiceFormatting ? option.replace(/_/g, " ") : option}
                    </option>
                ))}
            </select>
        </>
    );
}

export default DropdownField;