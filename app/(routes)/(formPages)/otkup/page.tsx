import '../style.scss';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OtkupPage = () => {
  return (
    <div className="formPage">
      <h1>Otkup</h1>
      <p className='pageDescription'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        aliquam, in qui atque repellendus, ab quod assumenda suscipit a,
        doloremque adipisci voluptates quis laboriosam vel amet quidem itaque
        unde beatae.
      </p>
      <form>
        <div className="input">
          <label htmlFor="">Ime i prezime</label>
          <input type="text" />
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className="input">
          <label htmlFor="">Mobitel</label>
          <input type="phone" />
        </div>
        <div className="input">
          <label htmlFor="">Upit</label>
          <textarea rows={5} />
        </div>
        <button className='formButton'>Pošalji</button>
      </form>
      <div className="faq">
        <h2>Često postavljana pitanja</h2>

        <Accordion
          style={{
            backgroundColor: 'var(--bg-light)',
            color: 'var(--primary)',
            border: '0.05em solid var(--color-white-300)',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'var(--primary)' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pitanje</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Odgovor</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: 'var(--bg-light)',
            color: 'var(--primary)',
            border: '0.05em solid var(--color-white-300)',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'var(--primary)' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pitanje</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Odgovor</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: 'var(--bg-light)',
            color: 'var(--primary)',
            border: '0.05em solid var(--color-white-300)',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'var(--primary)' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pitanje</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Odgovor</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default OtkupPage;
