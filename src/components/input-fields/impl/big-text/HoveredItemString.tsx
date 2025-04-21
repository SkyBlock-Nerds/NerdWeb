import BigTextField from "../../BigTextField.tsx";

function HoveredItemStringField({value, setValue}: {
    value: string | undefined;
    setValue: (value: string) => void;
}) {
    return (
        <>
            <BigTextField
                value={value}
                setValue={setValue}
                formLabel={"Hovered Item String:"}
                formName={"hoveredItemString"}
                formInfo={"Enter the hovered item string here"}
            />
        </>
    );
}

export default HoveredItemStringField;