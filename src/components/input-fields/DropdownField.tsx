function DropdownField({setValue, options, formLabel, formName, formInfo}: {
    setValue: (value: string) => void;
    options: string[];
    formLabel: string;
    formName: string;
    formInfo: string;
}) {
    return (
        <>
            <label className="form-label">{formLabel}</label>
            <select
                name={formName}
                className="form-select"
                required={false}
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    setValue(selectedValue);
                }}
            >
                <option disabled selected>{formInfo}</option>
                {/*I'm aware this gives a console error but this looks better...*/}

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