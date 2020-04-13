import React from 'react';

// COMPONENTS
import { Menu, Icon, Container } from 'semantic-ui-react';

const FooterControl = () => {
    return (
        <Container fluid>
            <Menu
                borderless
                inverted
                fixed='bottom'
                color="black"
                className="footer"
            >
                <Container>
                    <Menu.Item position="left">
                        <Container fluid>
                            <center>
                                <p>Copyright&nbsp;<Icon name="copyright outline" /> buildPC 2020</p>
                            </center>
                        </Container>
                    </Menu.Item>
                </Container>
            </Menu>
        </Container>
    )
}

export default FooterControl;