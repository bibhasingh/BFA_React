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
    dob: "",
    height: "",
    weight: "",
    position: "",
    foot: "",
    currentClub: "",
    email: "",
    phone: "",
    trainingChoice: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [photoFile, setPhotoFile] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.dob) newErrors.dob = true;
    if (!formData.height || isNaN(formData.height)) newErrors.height = true;
    if (!formData.weight || isNaN(formData.weight)) newErrors.weight = true;
    if (!formData.position) newErrors.position = true;
    if (!formData.foot) newErrors.foot = true;
    if (!formData.currentClub.trim()) newErrors.currentClub = true;
    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = true;
    if (!formData.phone || !/^[\d+\-\s()]{6,}$/.test(formData.phone)) newErrors.phone = true;
    if (!formData.trainingChoice) newErrors.trainingChoice = true;
    if (!photoFile) newErrors.photo = true;
    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handlePhotoChange = (event) => {
    setPhotoFile(event.target.files[0]);
    setErrors((prev) => ({ ...prev, photo: false }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      alert("Please fill all required fields correctly.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(photoFile);

    reader.onload = async function (event) {
      const imageBase64Reduce = await optimizeBase64(event.target.result);

      emailjs
        .send(
          "service_822j3sh",
          "template_q51lhge",
          {
            lastName: formData.lastName,
            firstName: formData.firstName,
            dob: formData.dob,
            height: formData.height,
            weight: formData.weight,
            position: formData.position,
            foot: formData.foot,
            currentClub: formData.currentClub,
            email: formData.email,
            phone: formData.phone,
            trainingChoice: formData.trainingChoice,
            message: formData.message,
            image_base64: imageBase64Reduce
          },
          "i6ieZgSizH-DsUDx9"
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
      setCurrentComponent(0);
    };
  };

  function registrationComponent() {
    return (
      <div className="regForm">
        <h1 className="formHead">{registration[lang]}</h1>
        <form onSubmit={handleSubmit} className="formFields" noValidate>
          <label className="field">
            <p className="required">{lastName[lang]}:</p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={errors.lastName ? "input-error" : ""}
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
              className={errors.firstName ? "input-error" : ""}
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
              className={errors.dob ? "input-error" : ""}
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
              className={errors.height ? "input-error" : ""}
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
              className={errors.weight ? "input-error" : ""}
            />
          </label>
          <br />
          <label className="field">
            <p className="required">{position[lang]}:</p>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className={errors.position ? "input-error" : ""}
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
              required
              className={errors.foot ? "input-error" : ""}
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
              className={errors.currentClub ? "input-error" : ""}
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
              className={errors.email ? "input-error" : ""}
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
              className={errors.phone ? "input-error" : ""}
            />
          </label>
          <br />
          <label className="field">
            <p className="required">{training[lang]}:</p>
            <select
              name="trainingChoice"
              value={formData.trainingChoice}
              onChange={handleChange}
              required
              className={`dropdown${errors.trainingChoice ? " input-error" : ""}`}
            >
              <option value="">{trainingChoice[lang][0]}</option>
              <option value="Samedi">{trainingChoice[lang][1]}</option>
              <option value="Dimanche">{trainingChoice[lang][2]}</option>
              <option value="Samedi and Dimanche">{trainingChoice[lang][3]}</option>
            </select>
          </label>
          <br />
          <label className="field">
            <p className="required">{photo[lang]}:</p>
            <input
              type="file"
              name="file"
              id="imageUpload"
              accept="image/*"
              onChange={handlePhotoChange}
              required
              className={errors.photo ? "input-error" : ""}
            />
            <span style={{color: "red"}}>*</span>
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
      </div>
    );
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

