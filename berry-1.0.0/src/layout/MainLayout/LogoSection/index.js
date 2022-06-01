import React from 'react';
import {Link, Typography} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

import config from './../../../config';

import logo from './../../../assets/images/logoPLN.png';

const LogoSection = () => {

    return (
        <React.Fragment>
            <Link component={RouterLink} to={config.defaultPath}>
                <img src={logo} alt="PLN" width="50" />
            </Link>
            <h2>&nbsp;&nbsp;PAKOCI<br/>&nbsp; TLN</h2>
        </React.Fragment>
    );
};

export default LogoSection;
