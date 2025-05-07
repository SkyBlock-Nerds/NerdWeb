import {useEffect, useState} from "react";
import {getTooltipSideAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";
import DropdownField from "../../DropdownField.tsx";

function TooltipSideField({value, setValue}: { value?: string; setValue: (value: string) => void }) {
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
                value={value}
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