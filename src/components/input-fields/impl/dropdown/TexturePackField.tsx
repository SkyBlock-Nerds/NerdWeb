import {useEffect, useState} from "react";
import {getTexturePackAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";
import DropdownField from "../../DropdownField.tsx";

function TexturePackField({value, setValue}: { value?: string; setValue: (value: string) => void }) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getTexturePackAutoComplete();
            setOptions(result);
        };
        fetchOptions();
    }, []);

    return (
        <>
            <DropdownField
                value={value}
                setValue={setValue}
                options={options}
                formLabel={"TexturePack:"}
                formName={"texturePack"}
                formInfo={"Select a TexturePack"}
                tryNiceFormatting={false}
            />
        </>
    );
}

export default TexturePackField;