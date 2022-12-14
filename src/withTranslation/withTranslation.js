import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line import/prefer-default-export
export const withTranslation = WrappedComponent => {
  const Localization = props => {
    const [localization, setLocalization] = useState(undefined);
    useEffect(() => {
      const { language } = props;
      if (language) {
        fetch(`/withTranslation/localization/${language}/${language}-EG.json`)
          .then(response => response.json())
          .then(locale => {
            setLocalization(locale);
          })
          .catch(() => {
            fetch(`/withTranslation/localization/${language}/${language}-EG.json`)
              .then(response => response.json())
              .then(locale => {
                setLocalization(locale);
              })
              .catch(() => {});
          });
      }
    }, [props]);

    return <div>{localization && (<WrappedComponent localization={localization} />)}</div>;
  };

  const mapStateToProps = state => ({
    language: state.app.language,
  });

  return connect(mapStateToProps, null)(Localization);
};
