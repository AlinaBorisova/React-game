import React from 'react';
import style from './BtnAgainComponent.module.css';
import PropTypes from 'prop-types';

export class BtnAgainComponent extends React.Component {
  render() {
    return (
      <button
        className={style.btnAgain}
        style={{display: this.props.display}}
      >
        Играть снова
      </button>
    );
  }
}

BtnAgainComponent.propTypes = {
  display: PropTypes.string,
};
