import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Newsletter from '../newsletter/NewsLetter'
import subscribeStyles from './subscribenewsletter.module.scss'
class SubscribeNewsletter extends React.Component {
  state = {
    email: '',
    isSubscribed: false,
  }
  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }
  _handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email)
      .then(data => {
        this.setState({ isSubscribed: true })
      })
      .catch(error => {})
  }
  render() {
    return this.state.isSubscribed ? (
      <div className={subscribeStyles.wrapperDiv}>
        <h1 className={subscribeStyles.thankYou}>Thank you!</h1>
        <h3>Your subscribtion has been confirmed.</h3>
      </div>
    ) : (
      <Newsletter
        title="Join our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
      dolore magna aliqua."
        buttonName="Subscribe"
        onSubmit={this._handleSubmit}
        onChange={this._handleChange}
        email={this.state.email}
      />
    )
  }
}

export default SubscribeNewsletter
