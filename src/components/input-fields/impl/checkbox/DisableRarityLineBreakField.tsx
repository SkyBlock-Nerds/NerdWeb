import CheckBoxField from "../../CheckBoxField.tsx";

function DisableRarityLineBreakField({value, setValue}: {
    value: boolean | undefined;
    setValue: (value: boolean) => void;
}) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Rarity Line Break:"}
                formName={"rarityLineBreak"}
                formInfo={"Check if there should be an empty line before the rarity"}
            />
        </>
    );
}

export default DisableRarityLineBreakField;