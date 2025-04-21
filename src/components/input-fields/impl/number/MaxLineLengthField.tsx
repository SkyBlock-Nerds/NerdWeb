import NumberField from "../../NumberField.tsx";

function MaxLineLength({value, setValue}: {
    value: number | undefined;
    setValue: (value: number) => void
}) {
    return (
        <>
            <NumberField
                value={value}
                setValue={setValue}
                minValue={1}
                formLabel={"Max Line Length:"}
                formName={"maxLineLength"}
                formInfo={"Enter maximum line length here"}
            />
        </>
    );
}

export default MaxLineLength;