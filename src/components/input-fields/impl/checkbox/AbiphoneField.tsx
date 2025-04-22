import CheckBoxField from "../../CheckBoxField.tsx";

function AbiphoneField({value, setValue}: {
    value: boolean | undefined;
    setValue: (value: boolean) => void;
}) {
    return (
        <>
            <CheckBoxField
                value={value}
                setValue={setValue}
                formLabel={"Abiphone:"}
                formName={"abiphone"}
                formInfo={"Check if the abiphone symbol should be in front of the npc name"}
            />
        </>
    );
}

export default AbiphoneField;