import { useEffect, useState } from "react";
import GeneratorField from "./GeneratorField.ts";
import FieldType from "./FieldType.ts";
import apiClient from "../../api-client/AxiosInstance.ts";

function FieldComponent({ Name, QueryVariableName, FieldType: fieldType, AutoComplete, Description, onChange }: GeneratorField & { onChange: (value: never) => void }) {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        if (fieldType === FieldType.Dropdown && AutoComplete) {
            apiClient.get(AutoComplete)
                .then((response) => {
                    setOptions(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching autocomplete options:", error);
                });
        }
    }, [fieldType, AutoComplete]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        //@ts-expect-error should be fine
        onChange(event.target.value);
    };

    return (
        <div className="form-group mb-3">
            <label htmlFor={Name} className="form-label">{Name}</label>
            {fieldType === FieldType.Line && (
                <input
                    type="text"
                    id={QueryVariableName == null ? "MAIN" : QueryVariableName}
                    name={Name}
                    placeholder={Description}
                    className="form-control"
                    onChange={handleChange}
                />
            )}
            {fieldType === FieldType.BigText && (
                <textarea
                    id={QueryVariableName == null ? "MAIN" : QueryVariableName}
                    name={Name}
                    placeholder={Description}
                    className="form-control"
                    onChange={handleChange}
                />
            )}
            {fieldType === FieldType.Checkbox && (
                <div className="form-check">
                    <input
                        type="checkbox"
                        id={QueryVariableName == null ? "MAIN" : QueryVariableName}
                        name={Name}
                        className="form-check-input"
                        //@ts-expect-error should be fine
                        onChange={(e) => onChange(e.target.checked)}
                    />
                    <label htmlFor={Name} className="form-check-label">{Description}</label>
                </div>
            )}
            {fieldType === FieldType.Dropdown && (
                <select id={QueryVariableName == null ? "MAIN" : QueryVariableName} name={Name} className="form-select" onChange={handleChange}>
                    <option value="" disabled selected>{Description}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            )}
            {fieldType === FieldType.Number && (
                <input
                    type="number"
                    id={QueryVariableName == null ? "MAIN" : QueryVariableName}
                    name={Name}
                    placeholder={Description}
                    className="form-control"
                    onChange={handleChange}
                />
            )}
        </div>
    );
}

export default FieldComponent;