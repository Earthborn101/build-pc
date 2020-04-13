// SEMANTIC UI
import { Responsive } from 'semantic-ui-react';

const GetWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export default GetWidth;