import React, { useState } from 'react';

//SEMANTIC-UI-REACT
import { Menu, Container, Image, Responsive, Visibility, Segment, Button } from 'semantic-ui-react';

//COMPONENTS
import GetWidth from '../responsive';
import HomePage from './homepage';

//IMAGES
import logo from '../../img/logo.png';

const MenuControlDesktop = ({ children }) => {
    const [fixed, setFixedMenu] = useState(false)
    return (
        <Responsive getWidth={GetWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
                once={false}
                onBottomPassed={() => { setFixedMenu(true) }}
                onBottomPassedReverse={() => { setFixedMenu(true) }}
            >
                <Segment
                    textAlign='center'
                    style={{ minHeight: 50, padding: '0px 0px' }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Menu.Item><Image src={logo} className='nav-logo' size='small' /></Menu.Item>
                            <Menu.Item as='a' active>Home</Menu.Item>
                            <Menu.Item as='a'>System Build</Menu.Item>
                            <Menu.Item as='a'>Company</Menu.Item>
                            <Menu.Item as='a'>About</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' basic>Log in</Button>
                                <Button as='a' basic primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
                <HomePage />
            </Visibility>
        </Responsive>
    )
}

export default MenuControlDesktop;