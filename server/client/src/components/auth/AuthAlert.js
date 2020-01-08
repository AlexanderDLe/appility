import React from 'react';

const AuthAlert = ({ alert }) => {
    return (
        <React.Fragment>
            {alert ? <div style={{ color: '#f44336' }}>{alert}</div> : ''}
        </React.Fragment>
    );
};

export default AuthAlert;
