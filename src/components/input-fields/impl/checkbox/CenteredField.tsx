import CheckBoxField from "../../CheckBoxField.tsx";

function CenteredField({value, setValue}: {
    value: boolean | undefined;
    setValue: (value: boolean) => void;
}) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Centered:"}
                formName={"centered"}
                formInfo={"Check if the text should be centered"}
            />
        </>
    );
}

export default CenteredField;