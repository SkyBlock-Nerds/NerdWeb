import {useState} from "react";
import GenerateButton from "../../components/generator/GenerateButton.tsx";
import OutputDisplay from "../../components/generator/OutputDisplay.tsx";
import postGetImg from "../../api-client/requests/PostGetImg.ts";

interface BaseGeneratorProps<T> {
    defaultRequest: T;
    endpoint: string;
    children: (currentRequest: T, setCurrentRequest: React.Dispatch<React.SetStateAction<T>>) => React.ReactNode;
}

function BaseGenerator<T extends object>({defaultRequest, endpoint, children}: BaseGeneratorProps<T>) {
    const [currentRequest, setCurrentRequest] = useState<T>(defaultRequest);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);
            setOutput(await postGetImg(endpoint, currentRequest));
        } catch (error) {
            console.log(error);
            setError(
                // @ts-expect-error default error type
                new TextDecoder().decode(error.response?.data) ||
                // @ts-expect-error default error type
                error.message ||
                "An error occurred while generating the image."
            );
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-2">
                    <h5>Input:</h5>
                    {children(currentRequest, setCurrentRequest)}
                    <GenerateButton onClick={handleSubmit} />
                </div>
                <div className="col-md-6 mt-2">
                    <OutputDisplay outputImg={output} error={error} />
                </div>
            </div>
        </div>
    );
}

export default BaseGenerator;