import ROUTES from "../Routes.ts";
import { compressToEncodedURIComponent } from "lz-string";

function ShareButton({ dataToShare, shareEndpoint }: { dataToShare: object; shareEndpoint: string }) {
    const handleShare = () => {
        try {
            console.log(dataToShare);

            const jsonData = JSON.stringify(dataToShare);
            const compressedData = compressToEncodedURIComponent(jsonData);
            const shareableLink = `${window.location.origin}${ROUTES.SHARE.BASE}${shareEndpoint}?data=${compressedData}`;

            navigator.clipboard.writeText(shareableLink)
                .then(() => {
                    alert("Link copied to clipboard!");
                })
                .catch((error) => {
                    console.error("Failed to copy link: ", error);
                });
        } catch (error) {
            console.error("Failed to generate link: ", error);
        }
    };

    return (
        <button className="btn btn-secondary" onClick={handleShare}>
            Copy shareable link
        </button>
    );
}

export default ShareButton;