import {useEffect, useState} from "react";
import {getItemIdAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";
import DropdownField from "../../DropdownField.tsx";

function ItemIdField({setValue, noLabel}: {
    setValue: (value: string) => void;
    noLabel?: boolean;
}) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getItemIdAutoComplete();
            setOptions(result);
        };
        fetchOptions();
    }, []);

    return (
        <>
            <DropdownField
                setValue={setValue}
                options={options}
                formLabel={noLabel ? "" : "Item ID:"}
                formName={"itemId"}
                formInfo={"Select an Item ID"}
            />
        </>
    );
}

export default ItemIdField;