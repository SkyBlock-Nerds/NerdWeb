import {useEffect, useState} from "react";
import {getTooltipStyleAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";
import DropdownField from "../../DropdownField.tsx";

function TooltipStyleField({value, setValue, texturePack}: { value?: string; setValue: (value: string) => void; texturePack?: string;}) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getTooltipStyleAutoComplete(texturePack);
            setOptions(result);
        };
        fetchOptions();
    }, [texturePack]);

    return (
        <>
            <DropdownField
                value={value}
                setValue={setValue}
                options={options}
                formLabel={"Tooltip Style:"}
                formName={"tooltipStyle"}
                formInfo={"Select a TooltipStyle"}
            />
        </>
    );
}

export default TooltipStyleField;
