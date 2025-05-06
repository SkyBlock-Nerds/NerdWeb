import usePageTitle from "../../hooks/usePageTitle.ts";
import {generatorMapping, getHistory, clearHistory} from "../../services/GeneratorHistory.ts";
import ROUTES from "../../Routes.ts";
import {useNavigate} from "react-router-dom";

function History() {
    usePageTitle("History");

    const navigate = useNavigate();
    const history = getHistory();

    const handleClearHistory = () => {
        clearHistory();
    };

    return (
        <div className="container mt-3">
            <div className="row">
                {history.historyEntries.length === 0 ? (
                    <div style={{textAlign: "center"}}>
                        You don't seem to have any generator history.<br/>
                        To start creating images go to the <a href={ROUTES.IMAGE_GENERATOR}>image generators</a>.
                    </div>
                ) : (
                    history.historyEntries.reverse().map((item, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card quaternary-color image-generator-item">
                                <img src={item.image} className="card-img-top pt-1" alt="Failed to load image" />
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {generatorMapping[item.generatorType].cuteName}
                                    </h3>
                                    <p className="card-text">
                                        {Object.entries(item.value).map(([key, value]) => (
                                            <div key={key}>
                                                <strong>{key}:</strong>  {typeof value === "object" ? <i>Cant be displayed</i> : String(value)}
                                            </div>
                                        ))}
                                    </p>
                                    <button
                                        onClick={() => {
                                            navigate(generatorMapping[item.generatorType].link, {
                                                state: {
                                                    recoveredRequest: item.value, recoveredImage: item.image,
                                                },
                                            });
                                            window.scrollTo({ top: 0, behavior: "instant" });
                                        }
                                        }
                                        className="btn btn-primary"
                                    >
                                        Go to generator and recover inputs
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {history.historyEntries.length > 0 && (
                <div className="text-center my-4">
                    <button onClick={handleClearHistory} className="btn btn-danger">
                        Delete History
                    </button>
                </div>
            )}
        </div>
    );
}

export default History;