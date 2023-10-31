import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function PageNotFound() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Container className='p-3'>
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Sorry, but this page not found!
                    </p>
                </Alert>
            </Container>
        );
    }
    return (
        <Container className='p-3 d-flex justify-content-center'>
            <Button className='bg-danger border-danger' onClick={() => setShow(true)}>Show Alert</Button>
        </Container>
    );
}

export default PageNotFound;