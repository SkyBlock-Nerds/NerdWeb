function SearchField({value, setValue, options, formLabel, formName, formInfo,}: {
    value?: string;
    setValue: (value: string) => void;
    options: string[];
    formLabel?: string;
    formName: string;
    formInfo: string;
}) {
    return (
        <>
            {formLabel && (
                <label className="form-label">{formLabel}</label>
            )}

            <input
                list={`${formName}-options`}
                name={formName}
                className="form-control"
                placeholder={formInfo}
                value={value ?? ""}
                onChange={(e) => setValue(e.target.value)}
            />

            <datalist id={`${formName}-options`} >
                {options.sort().map((option) => (
                    <option key={option} value={option} />
                ))}
            </datalist>
        </>
    );
}

export default SearchField;