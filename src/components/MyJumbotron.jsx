import { Jumbotron, Button, Container } from 'react-bootstrap'

const MyJumbotron = () => {
    return(
        <Jumbotron>
            <h1>Welcome!</h1>
            <p>
                This is a simple book store web page created by me ~ Marcy
            </p>
            <p>
                Enjoy!
            </p>
            <br></br>
            <p>
                <a href="https://github.com/sleepymarcy/Bookstore-React"><Button variant="primary">GitHub Repo</Button></a>
            </p>
        </Jumbotron>
    )
}

export default MyJumbotron