import CheckBoxField from "../../CheckBoxField.tsx";

function RenderBackgroundField({value, setValue}: { value: boolean | undefined; setValue: (value: boolean) => void; }) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Render Background:"}
                formName={"renderBackground"}
                formInfo={"Check if the background should be rendered"}
            />
        </>
    );
}

export default RenderBackgroundField;