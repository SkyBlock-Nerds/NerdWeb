import BaseGenerator from "../BaseGenerator.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import HeadRequest from "../../../api-client/api-models/generator/HeadRequest.ts";

function HeadGenerator() {
    return (
        <BaseGenerator<HeadRequest>
            defaultRequest={new HeadRequest()}
            endpoint="/generator/head"
        >
            {(currentRequest, setCurrentRequest) => (
                <div className="mb-3">
                    <SkinTextureField
                        value={currentRequest.skinValue}
                        setValue={(value) =>
                            setCurrentRequest((prev) => ({...prev, skinValue: value}))
                        }
                    />
                </div>
            )}
        </BaseGenerator>
    );
}

export default HeadGenerator;