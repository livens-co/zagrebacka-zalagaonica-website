'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  
  return (
    <>
      <form>
        <div className="input">
          <label htmlFor="">Ime i prezime*</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          <button onClick={() => {}}>Pošalji</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
