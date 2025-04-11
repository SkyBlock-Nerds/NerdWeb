import { useState } from "react";
import GeneratorField from "../../../components/generator_fields/GeneratorField.ts";
import FieldComponent from "../../../components/generator_fields/FieldComponent.tsx";
import apiClient from "../../../api-client/AxiosInstance.ts";

function GeneratorInterface({ Fields, GeneratorEndpoint }: { Fields: GeneratorField[], GeneratorEndpoint: string }) {
    const [formData, setFormData] = useState<{ [key: string]: never }>({});
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFieldChange = (fieldName: string, value: never) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);

            const pathVariable = Object.entries(formData).find(() =>
                Fields.some(field => field.ApiPathVariable)
            );

            const queryParams = Object.entries(formData).reduce((acc, [key, value]) => {
                const field = Fields.find(field => field.Name === key);
                if (field && !field.ApiPathVariable) {
                    const paramName = field.QueryVariableName;
                    // @ts-expect-error Shouldnt ever error
                    acc[paramName] = encodeURIComponent(value);
                }
                return acc;
            }, {} as Record<string, unknown>);

            const endpoint = pathVariable
                ? `${GeneratorEndpoint}/${encodeURIComponent(pathVariable[1])}`
                : GeneratorEndpoint;

            const response = await apiClient.get(endpoint, {
                params: queryParams,
                responseType: 'arraybuffer',
            });

            const base64Image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );

            setOutput(`data:image/png;base64,${base64Image}`);
        } catch (error) {
            // @ts-expect-error default error type
            setError(error.message || "An error occurred while generating the image.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5>Input:</h5>
                    {Fields.map((field, index) => (
                        <FieldComponent
                            key={index}
                            Name={field.Name}
                            ApiPathVariable={field.ApiPathVariable}
                            QueryVariableName={field.QueryVariableName}
                            FieldType={field.FieldType}
                            AutoComplete={field.AutoComplete}
                            Description={field.Description}
                            Required={field.Required}
                            // @ts-expect-error value wrong assignment
                            onChange={(value) => handleFieldChange(field.Name, value)}
                        />
                    ))}
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Generate
                    </button>
                </div>
                <div className="col-md-6">
                    <h5>Output:</h5>
                    {output && <img src={output} alt="Generated Output" className="img-fluid" />}
                    {error && <p className="text-danger">{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default GeneratorInterface;