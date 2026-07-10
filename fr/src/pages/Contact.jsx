import { useState } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaClock
} from "react-icons/fa"
import { motion } from "framer-motion"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    alert("Message Sent!")

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  return (
    <section id="contact" className="relative py-24 px-6 md:px-10 overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />

      {/* PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(140)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
              animation: `float 4s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h2>
        <p className="text-white/70 mt-3">
          Feel free to connect anytime
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative p-8 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl" />

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

            <input name="name" value={formData.name} onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none"
            />

            <input name="email" value={formData.email} onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none"
            />

            <input name="subject" value={formData.subject} onChange={handleChange}
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none"
            />

            <textarea name="message" value={formData.message} onChange={handleChange}
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none"
            />

           <a href="/d.map.pdf" target="_blank" rel="noopener noreferrer">
              <button className="relative px-5 py-2 bg-black text-white rounded-lg overflow-hidden border border-purple-500 w-full">
                <span className="relative z-10">Hire me</span>

                <span className="absolute inset-0 rounded-lg pointer-events-none">
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(90deg, #a855f7, transparent, #a855f7)",
                      backgroundSize: "200% 100%",
                      animation: "moveColor 2s linear infinite",
                    }}
                  ></span>
                </span>
              </button>
            </a>

          </form>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6 flex flex-col justify-center"
        >

          {/* CONNECT CARD */}
          <div className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">

            <h2 className="text-2xl font-bold">Let’s Connect 🤝</h2>

            <p className="text-white/70">
              If you don’t receive a response after submitting the form, contact me directly.
            </p>

            <div className="flex gap-8 text-3xl">

              <a href="https://www.linkedin.com/in/muqadas135b367/" className="flex flex-col items-center hover:scale-110 transition">
                <FaLinkedin className="text-blue-400" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=figmad200@gmail.com" className="flex flex-col items-center hover:scale-110 transition">
                <FaEnvelope className="text-red-400" />
                <span className="text-sm">Gmail</span>
              </a>

              <div className="flex flex-col items-center">
                <FaClock className="text-yellow-400" />
                <span className="text-sm">24/7</span>
              </div>

            </div>

            <p className="text-white/60 text-sm">
            ⚡  I am always available ⚡
            </p>

          </div>

          {/* CONTACT INFO */}
          {/* <div className="bg-white/10 p-6 rounded-2xl border border-white/20 flex items-center gap-3">
            <FaPhone /> <span>+92 312 0016676</span>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 flex items-center gap-3">
            <FaMapMarkerAlt /> <span>Shikarpur, Sindh, Pakistan</span>
          </div> */}

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <h3 className="font-bold mb-3">Contact Us</h3>
            <div className="flex gap-5 text-xl">
             

   

           

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muqadas135b367/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white underline hover:text-blue-300 hover:font-bold transition break-all"
            >
              LinkedIn Profile
            </a>

            {/* Gmail */}
          {/* Gmail */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=figmad200@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-white underline hover:text-blue-300 hover:font-bold transition break-all"
>
  figmad200@gmail.com
</a>

        



            </div>
          </div>

        </motion.div>

      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
           @keyframes moveColor {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

    </section>
  )
}

export default Contact