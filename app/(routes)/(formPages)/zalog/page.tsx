import "../style.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

const ZalogPage = () => {
  return (
    <div className="formPage">
      <div className="header">
        <h1>Zalog</h1>
        <p className="pageDescription">
          Treba Vam hitno novac, ali ne želite prodati predmet. Zalog je idealno
          rješenje za Vas!
        </p>
        <div className="image">
          <Image fill src="/gold.avif" alt="Zalog" />
          <div className="overlay" />
        </div>
      </div>

      <div className="onlineProcjena">
        <h2>Online procjena</h2>

        <h3>Pri slanju upita molimo:</h3>
        <div className="bubble">
          <h4>1</h4>
          <p>Jasno opišite predmet uz detaljne specifikacije.</p>
        </div>
        <div className="bubble">
          <h4>2</h4>
          <p>Priložite što bistrije fotografije.</p>
        </div>
        <div className="bubble">
          <h4>3</h4>
          <p>
            Ukoliko posjedujete, priložite i račun/garanciju navedenog predmeta.
          </p>
        </div>
        <div className="contact">
          <a href="https://wa.me/385992173494" target="_blank">
            <span>WhatsApp</span>
            <div className="icon">
              <WhatsAppIcon />
            </div>
            <div className="buttonAnimation" />
          </a>
          <a href="mailto:info@zagrebacka-zalagaonica.hr" target="_blank">
            <span>Email</span>
            <div className="icon">
              <EmailIcon />
            </div>
            <div className="buttonAnimation" />
          </a>
        </div>
      </div>
      <div className="faq">
        <h2>Često postavljana pitanja</h2>

        <Accordion
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--primary)",
            border: "0.05em solid var(--color-white-300)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "var(--primary)" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Što je zalog?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Predmet koji ima vrijednost te kojim se jamči ispunjenje obveze.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--primary)",
            border: "0.05em solid var(--color-white-300)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "var(--primary)" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Što možete založiti?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              U zalog uzimamo zlatni nakit svih finoća, srebro, investicijsko
              zlato, dijamante, dukate, umjetnine, luksuzne satove, motorna
              vozila te mobitele i tehnologiju.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--primary)",
            border: "0.05em solid var(--color-white-300)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "var(--primary)" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Kako založiti predmet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nakon procjene po navedenim koracima, potrebna je samo osobna
              iskaznica i potpisuje se ugovor te ste upućeni u sve uvjete. Po
              isteku ugovora, klijent može preuzeti svoj predmet tako da vrati
              dobiveni iznos te sve dogovorene naknade.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--primary)",
            border: "0.05em solid var(--color-white-300)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "var(--primary)" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Koliko traje zalog?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ugovori se mogu sklapati na 8, 15 ili mjesec dana. Zalog možete
              produljivati po potrebi uz plaćanje dogovorene naknade.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--primary)",
            border: "0.05em solid var(--color-white-300)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "var(--primary)" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Kako se čuva zalog?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Garantiramo sigurnost Vaših zaloga i čuvamo ih na osiguranim
              mjestima.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--primary)",
            border: "0.05em solid var(--color-white-300)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "var(--primary)" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Što ako ne dođem po svoj predmet u zalogu?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ukoliko po isteku dogovorenog perioda ne dođete preuzeti svoj
              predmet, predmet postaje vlasništvo zalagaonice.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--primary)",
            border: "0.05em solid var(--color-white-300)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "var(--primary)" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Kada mogu preuzeti svoj predmet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Predmet u zalogu možete preuzeti u bilo kojem trenutku trajanja
              ugovora uz prethodnu najavu.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ZalogPage;
