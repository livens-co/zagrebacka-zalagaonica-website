'use client';

import Link from 'next/link';
import '../style.scss';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

const ContactPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        'service_8v1eyxt',
        'template_1huuimf',
        formData,
        'NL6Ok0l67zZPh8D4_'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    router.push('/uspjeh');
  };

  return (
    <div className="contactPage">
      <div className="contactContainer">
        <form>
          <div className="input">
            <label htmlFor="">Ime i prezime*</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="">Email*</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="">Mobitel*</label>
            <input
              type="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="">Poruka*</label>
            <textarea
              name="message"
              id=""
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <div className="button">
            <button onClick={(e) => sendEmail(e)}>Pošalji</button>
          </div>
        </form>
      </div>
      <div className="contactContainer">
        <h2>Zagrebačka zalagaonica</h2>
        <div className="row">
          <h3>Adresa</h3>
          <p>Krapinska ulica 5</p>
          <p>10 000, Zagreb</p>
          <p>Hrvatska</p>
          <Link
            href="https://maps.app.goo.gl/zzsJvpo92Fsn8LscA"
            target="_blank"
            className="addressButton"
          >
            Upute
          </Link>
        </div>
        <div className="row">
          <h3>Radno vrijeme</h3>
          <p>Pon-Pet - 09:00-19:00</p>
          <p>Sub - 09:00-13:00</p>
          <p>Ned - Zatvoreno</p>
        </div>
        <div className="row">
          <h3>Telefon</h3>
          <a href="tel:+385992173494">099 2173 494</a>
        </div>
        <div className="row">
          <h3>Email</h3>
          <a href="mailto:info@zagrebacka-zalagaonica.hr">
            info@zagrebacka-zalagaonica.hr
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
