import {decompressFromEncodedURIComponent} from "lz-string";
import {JSX, useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import ROUTES from "../../Routes.ts";
import CodeBox from "../../components/CodeBox.tsx";
import UsePageTitle from "../../hooks/usePageTitle.ts";
import {generatorMapping} from "../../services/FullGeneratorData.ts";

function Share() {
    UsePageTitle("Share");

    const [urlSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const {"*": shareEndpoint} = useParams();
    const [errorContent, setErrorContent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        if (!shareEndpoint) return;

        try {
            const compressedData = urlSearchParams.get("data") || "";
            const data = JSON.parse(decompressFromEncodedURIComponent(compressedData) || "");

            switch ('/' + shareEndpoint) {
                case ROUTES.SHARE.GENERATOR:
                    navigate(Object.entries(generatorMapping).find(([, value]) => value.key === data.generatorType)?.[1].link ?? ROUTES.ERROR, {
                        state: {
                            recoveredRequest: data.value,
                        },
                    });
                    break;
                default:
                    setErrorContent(<div>Unknown share type: <CodeBox text={shareEndpoint} /></div>);
                    break;
            }
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                setErrorContent(<div>An error occurred: <CodeBox text={error.message} /></div>);
            } else {
                setErrorContent(<div>An unknown error occurred.</div>);
            }
        }
    }, [shareEndpoint, urlSearchParams, navigate]);

    if (!shareEndpoint) {
        return <>Invalid share link.</>;
    }

    return (
        <div className="container mt-3">
            <h1>Attempting to load shared link.</h1>
            {errorContent}
        </div>
    );
}

export default Share;