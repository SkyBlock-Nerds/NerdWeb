import {useEffect, useState} from "react";
import {getTooltipSideAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";
import DropdownField from "../../DropdownField.tsx";

function TooltipSideField({setValue}: { setValue: (value: string) => void }) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getTooltipSideAutoComplete();
            setOptions(result);
        };
        fetchOptions();
    }, []);

    return (
        <>
            <DropdownField
                setValue={setValue}
                options={options}
                formLabel={"Tooltip side:"}
                formName={"tooltipSide"}
                formInfo={"Select the side of the tooltip"}
            />
        </>
    );
}

export default TooltipSideField;