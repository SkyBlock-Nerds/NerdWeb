import NumberField from "../../NumberField.tsx";

function PaddingField({value, setValue}: {
    value: number | undefined;
    setValue: (value: number) => void
}) {
    return (
        <>
            <NumberField
                value={value}
                setValue={setValue}
                minValue={0}
                maxValue={1000}
                formLabel={"Padding:"}
                formName={"padding"}
                formInfo={"Enter padding value here"}
            />
        </>
    );
}

export default PaddingField;