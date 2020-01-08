import React from 'react';
import { connect } from 'react-redux';

const AuthAlert = ({ alert }) => {
    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
            <div key={alert.id} style={{ color: 'red' }}>
                {alert.msg}
            </div>
        ))
    );
};

const mapStateToProps = state => {
    return {
        alert: state.alerts
    };
};

export default connect(mapStateToProps)(AuthAlert);
