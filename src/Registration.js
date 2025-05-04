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

 const height = {
  Fr: "Hauteur (en cm)",
  Nl: "Hoogte (in cm)",
  En: "Height (in cm)"
 };

 const weight = {
  Fr: "Poids (en kg)",
  Nl: "Gewicht (in kg)",
  En: "Weight (in kg)"
 };
 const currentClub = {
  Fr: "Club actuel",
  Nl: "Huidige club",
  En: "Current Club"
 };
 const position = {
  Fr: "Position",
  Nl: "Positie",
  En: "Position"
 };

 const options = {
  Fr: ["Sélectionnez une option","Gréviste","Milieu de terrain","Gardienne"],
  Nl: ["Selecteer een optie","Aanvaller","Middenvelder","Doelman"],
  En: ["Select an option","Striker","Midfielder","Goalkeeper"],
 };

 const foot = {
  Fr: "Pied",
  Nl: "Voet",
  En: "Foot"
 };

 const footOption = {
  Fr: ["Sélectionnez une option","gauche","droit"],
  Nl: ["Selecteer een optie","links","rechts"],
  En: ["Select an option","Left","Right"],
 };

 const training ={
  Fr: "Jours d'entraînement",
  Nl: "Trainingsdagen",
  En: "Training days"
 }

 const trainingChoice ={
  Fr: ["Sélectionnez une option","Samedi(18h45 à 20h15, Don Bosco)","Dimanche(16h45 à 18h30, Sportcity)","Les deux jours"],
  Nl: ["Selecteer een optie","Zaterdag(18h45 à 20h15, Don Bosco)","Zondag(16h45 à 18h30, Sportcity)","Beide dagen"],
  En: ["Select an option","Saturday(18h45 à 20h15, Don Bosco)","Sunday(16h45 à 18h30, Sportcity)", "Both Days"]
 }

 const photo = {
  Fr: "Télécharger une photo",
  Nl: "Foto uploaden",
  En: "Upload Photo",
 };

 const submit = {
  Fr: ["Envoyer"],
  Nl: ["Verzenden"],
  En: ["Submit"],
 };

 function optimizeBase64(base64String, maxWidth = 50, maxHeight = 60, quality = 0.2) {
  return new Promise((resolve) => {
      const img = new Image();
      img.src = base64String;

      img.onload = () => { // Ensures image is fully loaded
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
          }
          if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to WebP for better compression
          const optimizedBase64 = canvas.toDataURL("image/png", quality);
          resolve(optimizedBase64);
      };
  });
}


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

    const fileInput = document.getElementById("imageUpload");
    
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);

    reader.onload = async function (event) {
        // const imageBase64 = reader.result;
        const imageBase64Reduce= await  optimizeBase64(event.target.result)
    


    emailjs
    .send(
      "service_822j3sh", // Replace with your EmailJS service ID
      "template_q51lhge", // Replace with your EmailJS template ID
      {
        lastName: formData.lastName,
        firstName: formData.firstName,
        dob: formData.dob,
        height: formData.height,
        weight:formData.weight,
        position: formData.position,
        foot: formData.foot,
        currentClub: formData.currentClub,
        email: formData.email,
        phone: formData.phone,
        trainingChoice: formData.trainingChoice,
        message: formData.message,
        image_base64: imageBase64Reduce
      },
      "i6ieZgSizH-DsUDx9" // Replace with your EmailJS user/public key
    )
    .then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
       alert("Thank you for your request.Will contact you soon.");
      },
      (error) => {
        console.error("Failed to send email.", error);
        alert("Oops! Something went wrong. Please try again.");
      }
    );
  }

    setCurrentComponent(0)


    

  };

  function registrationComponent(){
   return ( <div className="regForm">
      <h1 className="formHead">{registration[lang]}</h1>
      <form onSubmit={handleSubmit} className="formFields">
        <label className="field">
        <p className="required">{lastName[lang]}:</p>
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
          <p className="required">{firstName[lang]}:</p>
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
          <p className="required">{dob[lang]}:</p>
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
          <p className="required">{height[lang]}:</p>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
          <p className="required">{weight[lang]}:</p>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
        <p className="required">{position[lang]}:</p>

          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">{options[lang][0]}</option>
            <option value="Gréviste">{options[lang][1]}</option>
            <option value="Milieu de terrain">{options[lang][2]}</option>
            <option value="Gardienne">{options[lang][3]}</option>
          </select>
        </label>
        <br />
        <label className="field">
        <p className="required">{foot[lang]}:</p>

          <select
            name="foot"
            value={formData.foot}
            onChange={handleChange}
          >
            <option value="">{footOption[lang][0]}</option>
            <option value="Gauche">{footOption[lang][1]}</option>
            <option value="droit">{footOption[lang][2]}</option>
          </select>
        </label>
        <br />
        <label className="field">
          <p className="required">{currentClub[lang]}:</p>
          <input
            type="text"
            name="currentClub"
            value={formData.currentClub}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="field">
          <p className="required">E-mail:</p>
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
          <p className="required">Phone:</p>
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
        <p className="required">{training[lang]}:</p>
        
         <select
            name="trainingChoice"
            value={formData.training}
            onChange={handleChange}
            className="dropdown"
          >
            <option value="">{trainingChoice[lang][0]}</option>
            <option value="Samedi">{trainingChoice[lang][1]}</option>
            <option value="Dimanche">{trainingChoice[lang][2]}</option>
            <option value="Samedi and Dimanche">{trainingChoice[lang][3]}</option>
          </select>
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
        <label className="field">
          <p>{photo[lang]}:</p>
          <input
            type="file"
            name="file"
            id="imageUpload"
            // value={formData.phone}
            // onChange={handleChange}
            
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

