import CheckBoxField from "../../CheckBoxField.tsx";

function RenderBorderField({value, setValue}: { value: boolean | undefined; setValue: (value: boolean) => void; }) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Render Border:"}
                formName={"renderBorder"}
                formInfo={"Check if the text should have a border"}
            />
        </>
    );
}

export default RenderBorderField;