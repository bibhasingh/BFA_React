import "./registration.css";
import emailjs from "emailjs-com";


import React, { useState } from "react";

const registration = {
  Fr: "Inscription",
  Nl: "Registratie",
  En: "Registration"
 };

 const lastName = {
  Fr: "Nom",
  Nl: "Achternaam",
  En: "Last Name"
 };

 const firstName = {
  Fr: "Prénom",
  Nl: "voornaam",
  En: "First Name"
 };

 const dob = {
  Fr: "Date de naissance",
  Nl: "Geboortedatum",
  En: "Date Of Birth"
 };

 const position = {
  Fr: "Position",
  Nl: "Positie",
  En: "Position"
 };

 const options = {
  Fr: ["Sélectionnez une option","Gréviste","Milieu de terrain","Gardienne "],
  Nl: ["Selecteer een optie","Aanvaller","Middenvelder","Doelman"],
  En: ["Select an option","Striker","Midfielder","Goalkeeper"],
 };

 const submit = {
  Fr: ["Envoyer"],
  Nl: ["Verzenden"],
  En: ["Submit"],
 };


function Registration({ lang }) {

  const [currentComponent, setCurrentComponent] = useState(1);

  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    dob:"",
    position:"",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    emailjs
    .send(
      "service_822j3sh", // Replace with your EmailJS service ID
      "template_q51lhge", // Replace with your EmailJS template ID
      {
        lastName: formData.lastName,
        firstName: formData.firstName,
        dob: formData.dob,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      "i6ieZgSizH-DsUDx9" // Replace with your EmailJS user/public key
    )
    .then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
       // alert(`Thank you, ${formData.firstName}! Your message has been sent.`);
      },
      (error) => {
        console.error("Failed to send email.", error);
        alert("Oops! Something went wrong. Please try again.");
      }
    );

    setCurrentComponent(0)


    

  };

  function registrationComponent(){
   return ( <div className="regForm">
      <h1 className="formHead">{registration[lang]}</h1>
      <form onSubmit={handleSubmit} className="formFields">
        <label className="field">
        <p>{lastName[lang]}:</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
          <p>{firstName[lang]}:</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
          <p>{dob[lang]}:</p>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
        <p>{position[lang]}:</p>

          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">{options[lang][0]}</option>
            <option value="Striker">{options[lang][1]}</option>
            <option value="Midfielder">{options[lang][2]}</option>
            <option value="Goalkeeper">{options[lang][3]}</option>
          </select>
        </label>
        <br />
        <label className="field">
          <p>E-mail:</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
          <p>Phone:</p>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
         <p>Message:</p> 
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="submit">{submit[lang]}</button>
      </form>
    </div>)
  }

  function registrationComplete(){
    return <h2 className="completeRegistration">Thank you for your request.Will contact you soon.</h2>
  }
  return (
    <div>
    { currentComponent === 1? registrationComponent() : registrationComplete()
    }
    </div>
  );
}

export default Registration;

