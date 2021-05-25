import React from 'react'
import newsLetterStyles from './newsletter.module.scss'
import SectionTitle from '../titles/SectionTitle'

const NewsLetter = ({
  title,
  description,
  buttonName,
  onSubmit,
  onChange,
  email,
}) => {
  return (
    <div className={newsLetterStyles.newsDiv}>
    <div className='container'>
      <SectionTitle
        title="Join our newsletter"
        subtitle=" Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore "
      />
      </div>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <input
          type="email"
          placeholder="Your-Email"
          className={newsLetterStyles.emailInput}
          value={email}
          onChange={event => onChange(event)}
          name="email"
          id="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+`?\.[a-z]{2,4}$"
        />
        <br />
        <button type="submit" className="btn-primary">
          {buttonName}
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
