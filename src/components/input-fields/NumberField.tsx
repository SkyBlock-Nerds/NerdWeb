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
                name={formName}
                placeholder={formInfo}
                max={maxValue}
                min={minValue}
                className="form-control"
                required={false}
                value={value ?? ''}
                onChange={(e) => {
                    let parsedInt = parseInt(e.target.value);
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