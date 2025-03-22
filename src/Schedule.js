import "./schedule.css";

function Schedule({ lang }) {
  const head = {
   Fr: "HORAIRES",
   Nl: "ROOSTER",
   En: "SCHEDULE"
  };
  const head2 = {
    Fr: ["Les samedis de 18h45 à 20h15 (Don Bosco)",
      "Les dimanches de 16h45 à 18h30 (Sportcity)",
      "Entrainements individuels possibles un vendredi sur deux de 17h à 18h00 et les dimanches de 15h00 à 16h00 (sur rendez-vous)"
  ],
    Nl: ["Zaterdag van 18.45 uur tot 20.15 uur (Don Bosco)",
      "Zondag van 16.45 uur tot 18.30 uur (Sportcity)",
      "Individuele training mogelijk elke andere vrijdag vanaf 17.00 uur. tot 18.00 uur en zondag vanaf 15.00 uur tot 16.00 uur (op afspraak)"
    ],
    En: ["Saturdays from 6:45 p.m. to 8:15 p.m. (Don Bosco)",
      "Sundays from 4:45 p.m. to 6:30 p.m. (Sportcity)",
      "Individual training possible every other Friday from 5 p.m. to 6 p.m. and Sundays from 3 p.m. to 4 p.m. (by appointment)"
    ]
   };
   const p1 = {
    Fr: ["Chaussures de foot en salle obligatoires",
      "Catégorie : De 7 à 15 ans",
    "* Formateur diplômé par l'Union Belge",
  "* Langues parlées : Trilingue (Fr/Nl/En)"

],
    Nl: ["Zaalvoetbalschoenen vereist",
      "Categorie: Van 7 tot 15 jaar oud",
      "* Trainer gekwalificeerd door de Belgische Unie",
      "* Gesproken talen: Drietalig (Fr/Nl/En)"
    ],
    En: ["Indoor soccer shoes required",
      "Category: From 7 to 15 years old",
      "* Trainer qualified by the Belgian Union",
      "* Languages spoken: Trilingual (Fr/Nl/En)"
    ]
   }






  return (<div>
<h2 className="schedule"><u>{head[lang]}</u></h2>
<h3 className="timing">{head2[lang][0]}</h3>
<h3 className="timing">{head2[lang][1]}</h3>
<h3 className="timing">{head2[lang][2]}</h3>
<h3 className="timing">{head2[lang][3]}</h3>
<p className="instructions">{p1[lang][0]}<br />{p1[lang][1]}<br />{p1[lang][2]}<br />{p1[lang][3]}</p>
  </div>);
}
export default Schedule;
