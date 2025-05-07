import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import usePageTitle from "../../hooks/usePageTitle.ts";
import ROUTES from "../../Routes.ts";

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(ROUTES.WELCOME);
    };

    usePageTitle('404 - Page Not Found');

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Row className="text-center">
                <Col>
                    <h1 className="display-1">404</h1>
                    <h2 className="mb-4">Page Not Found</h2>
                    <p className="lead">
                        The page you are looking for does not exist. It might have been moved or deleted.
                    </p>
                    <Button variant="primary" onClick={handleGoHome}>
                        Go Back Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFoundPage;