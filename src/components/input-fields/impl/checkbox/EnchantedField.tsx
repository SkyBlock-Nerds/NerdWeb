import CheckBoxField from "../../CheckBoxField.tsx";

function EnchantedField({value, setValue}: {
    value: boolean | undefined;
    setValue: (value: boolean) => void;
}) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Enchanted:"}
                formName={"enchanted"}
                formInfo={"Whether or not the item should be enchanted."}
            />
        </>
    );
}

export default EnchantedField;