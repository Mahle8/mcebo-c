import React from 'react'
import "./Contacts.css"

const Contacts = () => {
  return (
    // <div>Contacts</div>
    <section className="contact">
      <div className="contact-content" id="contact-content">
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us if you have any questions or inquiries. We
          would love to hear from you!
        </p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts