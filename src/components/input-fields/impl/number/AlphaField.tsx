import NumberField from "../../NumberField.tsx";

function AlphaField({value, setValue}: {
    value: number | undefined;
    setValue: (value: number | undefined) => void;
}) {
    return (
        <>
            <NumberField
                value={value}
                setValue={setValue}
                minValue={0}
                maxValue={255}
                formLabel={"Alpha:"}
                formName={"alpha"}
                formInfo={"Enter alpha value here"}
            />
        </>
    );
}

export default AlphaField;