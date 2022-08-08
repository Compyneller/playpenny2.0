import React from "react";
import { Container } from "react-bootstrap";
import style from "./Privacy.module.scss";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import Footer from "../../components/Footer";

const Privacy = () => {
  return (
    <div className={style.wrapper}>
      <NavBarComp />
      <Container
        className={style.container}
        style={{
          padding: "3rem 1rem ",
          border: "2px solid white ",
          borderRadius: "30px",
        }}
      >
        <h1>PRIVACY POLICY</h1>
        <br />
        <h5>Objective</h5>
        <p>
          PlayPenny protects all the information provided by our customers who
          use our services. This privacy policy will explain how your personal
          information is being managed and used by PlayPenny.
        </p>
        <br />
        <h5>Collection of Information</h5>
        <p>
          We allow 18+ users to use our services. Players can access our
          services only by registering on our website. Players must provide some
          basic information such as username, password, and email id. They might
          not be able to login into our services on our website in the event
          they do not provide these details.
        </p>
        <br />
        <h5>Usage of Information</h5>
        <ul>
          <li>
            PlayPenny would never sell or rent or disclose any of your data to
            any third-party. Players are requested to confirm their acceptance
            to use their personal information as stated in this privacy policy.
          </li>
          <li>
            PlayPenny would never sell or rent or disclose any of your data to
            any third-party. Players are requested to confirm their acceptance
            to use their personal information as stated in this privacy policy.
          </li>
          <li>
            At certain instances, we may share your personal information with
            sponsors for our winners.
          </li>
          <li>
            The player’s personal information is totally password protected and
            he must not share it with anyone. PlayPenny will not assume any
            responsibility for any sort of breach using the player's password.
          </li>
        </ul>
        <br />
        <h5>Advanced Security </h5>
        <p>
          We will take necessary steps to protect your personal information from
          loss or misuse. Any sort of unauthorized access, disclosure or
          unauthorized alteration is handled to ensure complete security.
          Information that is transmitted through the internet like chat or
          email is at a very high risk. Therefore, PlayPenny doesn’t guarantee
          the security of such information which has been transmitted by the
          end-user.
        </p>
        <br />
        <h5>Consent</h5>
        <ul>
          <li>
            We assume that the players who are using the services provided by
            our website depict the following user consent, towards collection
            and usage of personal data by{" "}
            <a href="www.playenny.in">www.playenny.in</a>.
          </li>
          <li>
            PlayPenny reserves the right to modify the privacy policies or
            introduce any new offer which shall be notified to the users on the
            website and not via email.
          </li>
          <li>
            Certain third-party service providers help us by serving ads on our
            website. Those third-parties may collect anonymous information about
            the details of your visits and they would not have any personally
            identifiable information about the end user of our website.
          </li>
        </ul>
        <br />
        <h5>Children’s Access </h5>
        <p>
          We do not encourage any participation or activity of any persons under
          the age of 18. In accordance with the law (Children's Online Privacy
          Act), a person under the age of eighteen is not allowed to play on{" "}
          <a href="www.playpenny.in">www.playpenny.in</a> <br /> <br />
          In the event, if an underage person provides us with incorrect
          personal data, it’s the parent or guardian’s duty to contact us
          immediately at{" "}
          <a href="mailto:support@paypenny.in">support@paypenny.in</a> and
          request that such user accounts be deleted from our records forever.
        </p>
        <br />
        <h5>Amendments</h5>
        <p>
          This declaration may be amended eccentrically to reflect changes to
          our privacy policies. In the event of any changes, we will notify you
          by email (email address specified at the time of registration) or by
          means of displaying a notice on our website prior to the changes that
          will be becoming effective. We request our customers to review this
          page occasionally for the latest information on our privacy policies.{" "}
          <br />
          <br />
          Exclusions:
        </p>
        <ul>
          <li>
            PlayPenny reserves the right to share Sensitive Personal Data and
            Other Personal Information in the event if sharing of such
            information becomes necessary:
          </li>
          <li>
            In order to comply with legal processes or governmental request;
          </li>
          <li>to enforce the Terms of Service and the Privacy Policy;</li>
          <li>to prevent fraud or forgery;</li>
          <li>for issues concerning information security, or</li>
          <li>
            To protect the player’s rights, rights of PlayPenny; and rights of
            the general public.
          </li>
        </ul>
        <br />
        <h5>Grievance Officer</h5>
        <p>
          Mr. Rishi Dubey is the Grievance Officer for PlayPenny. The user will
          have to send all complaints and criticisms related to personal data,
          to the Grievance Officer at{" "}
          <a href="mailto:support@playpenny.in">support@playpenny.in</a>
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default Privacy;
