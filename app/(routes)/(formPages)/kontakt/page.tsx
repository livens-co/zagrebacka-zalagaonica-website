import Link from 'next/link'
import '../style.scss'

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <div className="contactContainer">
        <form>
          <div className="input">
            <label htmlFor="">Ime i prezime*</label>
            <input type="text" />
          </div>
          <div className="input">
            <label htmlFor="">Email*</label>
            <input type="email" />
          </div>
          <div className="input">
            <label htmlFor="">Mobitel*</label>
            <input type="phone" />
          </div>
          <div className="input">
            <label htmlFor="">Poruka*</label>
            <textarea name="" id="" rows={4}/>
          </div>
          <div className="button">
            <button type="submit">Pošalji</button>
          </div>
        </form>
      </div>
      <div className="contactContainer">
        <h2>Zagrebačka zalagaonica</h2>
        <div className="row">
          <h3>Adresa</h3>
          <p>Krapinska ulica 8</p>
          <p>10 000, Zagreb</p>
          <p>Hrvatska</p>
          <Link href='/' target='_blank' className='addressButton'>Upute</Link>
        </div>
        <div className="row">
          <h3>Radno vrijeme</h3>
          <p>Pon-Pet - 08:00-20:00</p>
          <p>Sub - 08:00-16:00</p>
          <p>Ned - Zatvoreno</p>
        </div>
        <div className="row">
          <h3>Telefon</h3>
          <a href="tel:+">099 2137 494</a>
        </div>
        <div className="row">
          <h3>Email</h3>
          <a href="mailto:">otkup@zagrebacka-zalagaonica.hr</a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage