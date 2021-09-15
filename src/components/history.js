import {Component} from 'react'
import './history.css'

class History extends Component {
  render() {
    const {initialHistoryList} = this.props
    return (
      <div>
        <div className="upperContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="appLogo"
          />
          <input type="search" className="inputElement" />
        </div>
      </div>
    )
  }
}
export default History
