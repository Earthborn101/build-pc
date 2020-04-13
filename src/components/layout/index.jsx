import React from 'react';

// COMPONENTS
import { Container, Grid } from 'semantic-ui-react';

// CONTEXTS

const LayoutControl = ({ color, children }) => {

    return (
        <Container fluid>
            <Grid padded centered className='main-wrapper'>
                <Grid.Column color={color}>
                    <Grid.Row>
                        <Container className="layoutContainer">
                            {children}
                        </Container>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default LayoutControl;