import {useEffect, useState} from "react";
import {getItemIdAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";
import SearchField from "../../SearchField.tsx";

function ItemIdField({value, setValue, noLabel, texturePack}: {
    value?: string;
    setValue: (value: string) => void;
    noLabel?: boolean;
    texturePack?: string;
}) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getItemIdAutoComplete(texturePack);
            setOptions(result);
        };
        fetchOptions();
    }, [texturePack]);

    return (
        <>
            <SearchField
                setValue={setValue}
                options={options}
                value={value}
                formLabel={noLabel ? "" : "Item ID:"}
                formName={"itemId"}
                formInfo={"Select an Item ID"}
            />
        </>
    );
}

export default ItemIdField;
