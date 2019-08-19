import React, {Component} from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import NavBar from '../components/Organisms/NavBar/NavBar';



class MainTemplate extends Component {
    state = {

    }
    render() {
        const { children } = this.props;
        return(
            <div>
                <GlobalStyle/>
                <NavBar></NavBar>
                {children}
            </div>
        )
    }

}

export default MainTemplate;