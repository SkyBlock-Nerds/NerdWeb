import BaseGenerator from "../BaseGenerator.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import HeadRequest from "../../../api-client/api-models/generator/HeadRequest.ts";
import { useLocation } from "react-router-dom";
import { ensureInstanceOf } from "../../../utils/ensureInstanceOf.ts";

function HeadGenerator() {
    const location = useLocation();
    const recoveredRequest = ensureInstanceOf(location.state?.recoveredRequest, HeadRequest);

    return (
        <BaseGenerator<HeadRequest>
            defaultRequest={recoveredRequest || new HeadRequest()}
            endpoint="/generator/head"
        >
            {(currentRequest, setCurrentRequest) => (
                <div className="mb-3">
                    <SkinTextureField
                        value={currentRequest.skinValue}
                        setValue={(value) =>
                            setCurrentRequest((prev) => {
                                const updatedRequest = new HeadRequest();
                                Object.assign(updatedRequest, prev, { skinValue: value });
                                return updatedRequest;
                            })
                        }
                    />
                </div>
            )}
        </BaseGenerator>
    );
}

export default HeadGenerator;