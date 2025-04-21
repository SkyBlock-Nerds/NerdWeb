import SmallTextField from "../../SmallTextField.tsx";

function ContainerNameField({value, setValue}: {
    value: string | undefined;
    setValue: (value: string) => void;
}) {
    return (
        <>
            <SmallTextField
                value={value}
                setValue={setValue}
                formLabel={"Container Name:"}
                formName={"containerName"}
                formInfo={"Enter the name of the container here"}
            />
        </>
    );
}

export default ContainerNameField;