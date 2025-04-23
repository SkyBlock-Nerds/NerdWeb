import NumberField from "../../NumberField.tsx";

function RowField({value, setValue}: {
    value: number | undefined;
    setValue: (value: number) => void;
}) {
    return (
        <>
            <NumberField
                value={value}
                setValue={setValue}
                minValue={0}
                maxValue={100}
                formLabel={"Rows:"}
                formName={"inventoryRow"}
                formInfo={"Enter the amount of inventory rows here"}
            />
        </>
    );
}

export default RowField;