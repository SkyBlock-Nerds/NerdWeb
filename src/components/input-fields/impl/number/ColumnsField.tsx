import NumberField from "../../NumberField.tsx";

function ColumnsField({value, setValue}: {
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
                formLabel={"Columns:"}
                formName={"inventoryColumn"}
                formInfo={"Enter the amount of inventory columns here"}
            />
        </>
    );
}

export default ColumnsField;