import "./schedule.css";

function Schedule({ lang }) {
  const head = {
   Fr: "HORAIRES",
   Nl: "ROOSTER",
   En: "SCHEDULE"
  };
  const head2 = {
    Fr: ["Les samedis de 18h45 à 20h00 (Complexe Mounier 1150)",
      "Les dimanches de 16h45 à 18h30 (Complexe Sport City 1150)",
      "Les entraînements individuels sont possibles uniquement sur rendez vous les mercredis"
  ],
    Nl: ["Zaterdag van 18.45 uur tot 20.00 uur (Complexe Mounier 1150)",
      "Zondag van 16.45 uur tot 18.30 uur (Complexe Sport City 1150)",
      "Individuele training is alleen mogelijk op afspraak op woensdag"
    ],
    En: ["Saturdays from 6:45 p.m. to 8:00 p.m. (Complexe Mounier 1150)",
      "Sundays from 4:45 p.m. to 6:30 p.m. (Complexe Sport City 1150)",
      "Individual training is only possible by appointment on Wednesdays"
    ]
   };
   const p1 = {
    Fr: ["Tachez systématiquement à ramener vos chaussures de football pour terrain synthétique (extérieur) ainsi que vos chaussures pour la salle (intérieur)",
      "Catégorie d’âge : de 8 à 16 ans",
    "* Entraînements de qualités par des formateurs diplômés par La Fédération Belge de Football",
  "* Langues : Français / Néerlandais / Anglais"

],
    Nl: ["Neem altijd je voetbalschoenen mee voor het kunstgrasveld (buiten) en ook je zaalschoenen",
      "Leeftijdscategorie: 8 tot 16 jaar",
      "* Kwaliteitsvolle trainingen door instructeurs die gecertificeerd zijn door de Belgische Voetbalbond",
      "* Talen: Frans / Nederlands / Engels"
    ],
    En: ["Always bring your soccer shoes for the artificial pitch (outdoors) as well as your indoor shoes",
      "Age category: 8 to 16 years old",
      "* Quality training sessions by instructors certified by the Belgian Football Federation",
      "* Languages: French / Dutch / English"
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
