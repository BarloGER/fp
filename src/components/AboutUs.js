import { Helmet } from "react-helmet";
import "../styles/aboutUs.css";

function AboutUs() {
  return (
    <main className="aboutUs">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Über uns Seite mit Informationen über Gründer."
        />
      </Helmet>
      <div className="aboutUs-container">
        <div className="content-container">
          <h1 className="gettoknowus">get to know us</h1>
          <div className="aboutUs-Team">
            <div className="personal-card">
              <a
                href={"https://github.com/BarloGER"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageFounders"
                  src={"https://avatars.githubusercontent.com/u/108719328?v=4"}
                  alt="img from Mike"
                />
              </a>
              <h1 className="aboutUs-name">Mike</h1>
              <p className="about-each">
                Hey, ich bin Mike, 25 Jahre jung. Die letzten 8 Jahre war ich
                Soldat und habe mich für einen Karriere wechsel entschieden.
              </p>
            </div>
            <div className="personal-card" id="margin">
              <a
                href={"https://github.com/niklasriebesell"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageFounders"
                  src={"https://avatars.githubusercontent.com/u/72032551?v=4"}
                  alt="img from Niklas"
                />
              </a>
              <h1 className="aboutUs-name">Niklas</h1>
              <p className="about-each">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                praesentium. Optio quod maxime ad! Ex, molestias quas commodi
                fuga recusandae et inventore veritatis officia. Quibusdam
                aliquid tempora temporibus ab excepturi.
              </p>
            </div>

            <div className="personal-card" id="margin">
              <a
                href={"https://github.com/OtisB"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageFounders"
                  src={"https://avatars.githubusercontent.com/u/40917011?v=4"}
                  alt="img from Robin"
                />
              </a>
              <h1 className="aboutUs-name">Robin</h1>
              <p className="about-each">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                praesentium. Optio quod maxime ad! Ex, molestias quas commodi
                fuga recusandae et inventore veritatis officia. Quibusdam
                aliquid tempora temporibus ab excepturi.
              </p>
            </div>
          </div>
          {/* <article className="about-SportBase">
            <p className="our-passion">
              An active life requires a lot of organization. Who doesn't know
              the problem of organizing trainings, locations and game days? The
              WhatsApp groups are overflowing, no one is informed and there is
              pure chaos. Paperwork, forgotten appointments and dissatisfied
              teammates are the result. SportBase is the remedy. SportBase helps
              you to organize your trainings, locations and game days. You can
              easily create new trainings, adjust or postpone them to avoid
              being left out in the rain when the weather doesn't play along.
              Whether it's a cozy Champions League evening or a barbecue with
              your teammates, no problem. With Sportbase you can plan your next
              team evening in seconds and with the push function you save
              yourself the hassle of sending messages. So everyone is informed
              and nothing stands in the way of the evening. The next away game
              is coming up and you don't have a ride yet? No problem. With
              Sportbase we can help you with this problem as well. SportBase
              makes your sports life easier, so you have more time for the
              important things. Your Sport is our passion
            </p>
          </article> */}
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
