import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import emailjs from '@emailjs/browser'

function Contact () {
  const formRef = useRef();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault() // prevent reloading page

    setLoading(true)

    try {
      await emailjs.send(
        "service_bwbx1rl",
        "template_t3tujh7",
        {
          from_name: form.name,
          to_name: "Nikita",
          from_email: form.email,
          to_email: "Rmaps123@gmail.com",
          message: form.message
        },
        "B9K7doBJjSI6snR3p"
      )

      setLoading(false)
      alert("Your message has been sent successfully!")

      setForm({
        name: '',
        email: '',
        message: ''
      })

    } catch (e) {
      setLoading(false)
      console.log(e)
      alert('An error occurred, please try again later.')
    }

  }

  const isMobile = useMediaQuery({ maxWidth: 1080 })

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {!isMobile && (
          <img src="/assets/terminal.png" alt="terminal background"
               className="absolute inset-0 min-h-screen"/>
        )}
        <div className="contact-container">
          <h3 className="head-text mt-5">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm always open to new opportunities and collaborations.
            If you have a project in mind or just want to say hi, feel free to reach out.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">
                Full Name
              </span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input"
                     placeholder="Yosi Cohen"/>
            </label>

            <label className="space-y-3">
              <span className="field-label">
                Email
              </span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required
                     className="field-input"
                     placeholder="yosicohen@gmail.com"/>
            </label>

            <label className="space-y-3">
              <span className="field-label">
                Your message
              </span>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} required
                        className="field-input"
                        placeholder="Dear Nikita, let’s plot world domination…"/>
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}

              <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow"/>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
