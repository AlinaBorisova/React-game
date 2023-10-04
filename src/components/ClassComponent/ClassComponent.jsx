import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';
import {BtnAgainComponent} from './BtnAgainComponent';

export class ClassComponent extends React.Component {
  state = {
    result: 'Результат',
    userNumber: '',
    randomNumber:
      Math.floor(Math.random() * this.props.max - this.props.min) +
      this.props.min,
    count: 0,
    display: 'none',
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.display === 'none') {
      this.setState(state => ({
        count: state.count + 1,
      }));
      this.setState(state => {
        if (!state.userNumber) {
          return {
            result: `Введите число`,
          };
        }

        if (state.userNumber > state.randomNumber) {
          return {
            result: `${state.userNumber} больше загаданного`,
            userNumber: '',
          };
        }

        if (state.userNumber < state.randomNumber) {
          return {
            result: `${state.userNumber} меньше загаданного`,
            userNumber: '',
          };
        }

        return {
          result: `Вы угадали, загаданное число: ${state.userNumber},
          попыток: ${state.count}`,
          userNumber: '',
          count: 0,
          display: 'inline',
        };
      });
    } else {
      this.setState(() => ({
        result: 'Результат',
        userNumber: '',
        randomNumber:
            Math.floor(Math.random() * this.props.max - this.props.min) +
            this.props.min,
        count: 0,
        display: 'none',
      }));
    }
  };

  handleChange = event => {
    this.setState({
      userNumber: event.target.value,
    });
  };

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>

        <form className={style.form}
          onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>

          <input
            className={style.input}
            type='number' id='user_number'
            onChange={this.handleChange}
            value={this.state.userNumber}
          />
          <button className={style.btn}>Угадать</button>
          <BtnAgainComponent display={this.state.display} />
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
