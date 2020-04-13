import React from 'react';

// SEMANTIC UI
import { Container, Header, Icon, Button } from 'semantic-ui-react';

const HomePage = ({mobile}) => {
    return (
        <Container text textAlign="center">
            <Header
                as='h1'
                content="Let's build your dream PC"
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '0.75em' : '1.5em',
                }}
            />
            <Header
                as='h2'
                content='Choose whatever parts you want.'
                style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em',
                    marginBottom: '25px'
                }}
            />
            <Button size='huge' color="black">Get started<Icon name='right arrow' /></Button>
        </Container>
    )
}

export default HomePage;