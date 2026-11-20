import { useEffect, useState } from "react";
import { getTooltipStyleAutoComplete } from "../../../../api-client/requests/GetAutocomplete.ts";
import DropdownField from "../../DropdownField.tsx";

function TooltipStyleField({
    value,
    setValue,
    texturePack,
    rarity,
    hasEditedTooltipStyle,
    onAutoSelect,
}: {
    value?: string;
    setValue: (value: string) => void;
    texturePack?: string;
    rarity?: string;
    hasEditedTooltipStyle?: boolean;
    onAutoSelect?: (value: string) => void;
}) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getTooltipStyleAutoComplete(texturePack);
            setOptions(result);
        };
        fetchOptions();
    }, [texturePack]);

    useEffect(() => {
        if (hasEditedTooltipStyle || !rarity || !texturePack?.toLowerCase().includes("hypixel")) {
            return;
        }
        const matchingStyle = options.find((option) => option.toLowerCase() === rarity.toLowerCase());
        if (matchingStyle && matchingStyle !== value) {
            onAutoSelect?.(matchingStyle);
        }
    }, [rarity, texturePack, options, hasEditedTooltipStyle, value, onAutoSelect]);

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
