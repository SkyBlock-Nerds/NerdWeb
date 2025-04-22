import SmallTextField from "../../SmallTextField.tsx";

function NpcNameField({value, setValue}: {
    value: string | undefined;
    setValue: (value: string) => void;
}) {
    return (
        <>
            <SmallTextField
                value={value}
                setValue={setValue}
                formLabel={"Npc Name:"}
                formName={"npcName"}
                formInfo={"Enter the name of the npc here"}
            />
        </>
    );
}

export default NpcNameField;