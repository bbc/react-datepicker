import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class WeekNumber extends React.Component {
  static propTypes = {
    weekNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render () {
    let weekNumberClasses = {
      'react-datepicker__week-number': true
    }
    if (this.props.onClick) {
      weekNumberClasses['react-datepicker__week-number-clickable'] = true
    }
    return (
      <div
          className={classnames(weekNumberClasses)}
          aria-label={`week-${this.props.weekNumber}`}
          onClick={this.handleClick}>
        {this.props.weekNumber}
      </div>
    )
  }
}
