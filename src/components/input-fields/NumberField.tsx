function NumberField({value, setValue, minValue, maxValue, formLabel, formName, formInfo}: {
    value: number | undefined;
    setValue: (value: number) => void;
    minValue?: number;
    maxValue?: number;
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
                type="number"
                inputMode="numeric"
                name={formName}
                placeholder={formInfo}
                max={maxValue}
                min={minValue}
                className="form-control"
                required={false}
                value={value ?? ''}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue === '') {
                        setValue(0)
                    } else {
                        setValue(parseInt(inputValue));
                    }
                }}
                onBlur={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue === '') return;

                    let parsedInt = parseInt(inputValue);
                    if (isNaN(parsedInt)) return;

                    if (typeof minValue !== 'undefined' && minValue !== null) {
                        parsedInt = Math.max(parsedInt, minValue);
                    }
                    if (typeof maxValue !== 'undefined' && maxValue !== null) {
                        parsedInt = Math.min(parsedInt, maxValue);
                    }

                    setValue(parsedInt);
                }}
            />
        </>
    );
}

export default NumberField;