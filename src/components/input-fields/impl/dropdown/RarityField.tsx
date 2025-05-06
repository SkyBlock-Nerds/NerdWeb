import {useEffect, useState} from "react";
import {getRarityAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";
import DropdownField from "../../DropdownField.tsx";

function RarityField({value, setValue}: { value?: string; setValue: (value: string) => void }) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getRarityAutoComplete();
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
                formLabel={"Rarity:"}
                formName={"rarity"}
                formInfo={"Select a Rarity"}
            />
        </>
    );
}

export default RarityField;