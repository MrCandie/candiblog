import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="contact me" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
};
export default Contact;
