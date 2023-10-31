import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <Container className='p-3'>
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Dear customer, welcome. Please ask for any assistance. Hope to help you and make your visit meaningful.
                </p>
                <hr />
            </Alert>
        </Container>
    );
}

export default Home;