import SmallTextField from "../../SmallTextField.tsx";

function SkinTextureField({value, setValue}: {
    value: string | undefined;
    setValue: (value: string) => void;
}) {
    return (
        <>
            <SmallTextField
                value={value}
                setValue={setValue}
                formLabel={"Skin Value/Minecraft Name:"}
                formName={"skinTexture"}
                formInfo={"Enter the skin value here"}
            />
        </>
    );
}

export default SkinTextureField;