import NumberField from "../../NumberField.tsx";

function PaddingField({value, setValue}: {
    value: number | undefined;
    setValue: (value: number | undefined) => void
}) {
    return (
        <>
            <NumberField
                value={value}
                setValue={setValue}
                minValue={0}
                maxValue={200}
                formLabel={"Padding:"}
                formName={"padding"}
                formInfo={"Enter padding value here"}
            />
        </>
    );
}

export default PaddingField;