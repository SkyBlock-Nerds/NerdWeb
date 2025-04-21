import CheckBoxField from "../../CheckBoxField.tsx";

function HoverEffectField({value, setValue}: {
    value: boolean | undefined;
    setValue: (value: boolean) => void;
}) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Hovered:"}
                formName={"hover"}
                formInfo={"Whether or not the item should have the hover effect."}
            />
        </>
    );
}

export default HoverEffectField;