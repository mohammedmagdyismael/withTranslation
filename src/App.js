import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLanguage } from './store/actions/app'
import { withTranslation } from './withTranslation/withTranslation';
import './App.css'

const App = ({ ...props }) => {
    const { localization } = props;
    return (
         <div style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ cursor: 'pointer', margin: '0px 10px', textAlign: 'center' }} onClick={() => props.setLanguage('ar')}>Arabic</p>
                <p style={{ cursor: 'pointer', margin: '0px 10px', textAlign: 'center' }} onClick={() => props.setLanguage('en')}>English</p>
            </div>
            <div>
                <p style={{ margin: '30px 10px', textAlign: 'center' }}>
                    {localization.hello}
                </p>
            </div>
         </div>
                
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        setLanguage,
    },
    dispatch,
  );

  export default withTranslation(connect(null, mapDispatchToProps)(App));
