import CheckBoxField from "../../CheckBoxField.tsx";

function PaddingFirstLineField({value, setValue}: {
    value: boolean | undefined;
    setValue: (value: boolean) => void;
}) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Padding First Line:"}
                formName={"paddingFirstLine"}
                formInfo={"Whether or not the first line should have a gap above."}
            />
        </>
    );
}

export default PaddingFirstLineField;