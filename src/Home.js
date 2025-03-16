import "./home.css";

function Home({ lang }) {
  const head = {
    Fr: "Bienvenue Sur Le Site De La Belgium Football Academy!",
    Nl: "Welkom Op De Website Van De Belgische Voetbalacademie!",
    En: "Welcome To The Belgium Football Academy Website!",
  };

  const p1 = {
    Fr: "L'académie B.F.A. est un projet principalement sportif, elle a été créée en janvier 2018.",
    Nl: "De B.F.A. Academie is een voornamelijk sportproject en werd opgericht in januari 2018.",
    En: "The BFA academy is a mainly sports project, it was created in January 2018.",
  };
  const p2 = {
    Fr: "Ce projet est fixé sur plusieurs objectifs qui seront axés sur:",
    Nl: "Dit project heeft verschillende doelstellingen die zich richten op:",
    En: "This project is set on several objectives which will focus on:",
  };

  const head2 = {
    Fr: "L'EDUCATION",
    Nl: "HET ONDERWIJS",
    En: "EDUCATION",
  };
  const p3 = {
    Fr: "Une bonne éducation constitue la base de la formation tant au niveau scolaire que sportif. La B.F.A. se propose d’appuyer et de questionner les enfants scolarisés dans le cadre de leurs études.",
    Nl: "Een goede opleiding is de basis voor elke training, zowel op academisch als op sportief vlak. De B.F.A. heeft als doel schoolkinderen te ondersteunen en te bevragen in het kader van hun studie.",
    En: "A good education is the basis of training both at the academic and sports level. The B.F.A. aims to support and question school children as part of their studies.",
  };
  const head3 = {
    Fr: "L'INITIATION SPORTIVE",
    Nl: "SPORTIEVE INLEIDING",
    En: "PRE-TRAINING",
  };
  const p4 = {
    Fr: "Elle permettra d'acquérir les moyens physiques et techniques adéquats pour prétendre à une bonne formation.",
    Nl: "Het stelt u in staat de juiste fysieke en technische middelen te verwerven om in aanmerking te komen voor een goede opleiding.",
    En: "It will enable you to acquire the appropriate physical and technical means to qualify for good training.",
  };
  const p5 = {
    Fr: "Une équipe de professionnels qualifiés et expérimentés a été mise en place pour assurer une formation de qualité à nos jeunes participants.",
    Nl: "Er is een team van gekwalificeerde en ervaren professionals samengesteld om onze jonge deelnemers een kwalitatieve opleiding te bieden.",
    En: "A team of qualified and experienced professionals has been set up to provide quality training for our young participants.",
  };
  const p6 = {
    Fr: "Actuellement, c'est notre entraîneur expérimenté Marso Younesse (qualifié par l'Union Belge de Football) qui planifie et organise entièrement les entraînements spécifiques.",
    Nl: "Momenteel staat onze ervaren trainer Marso Younesse (gekwalificeerd door de Belgische Voetbalbond) in voor de volledige planning en organisatie van de specifieke trainingen.",
    En: "Currently, our experienced coach Marso Younesse (qualified by the Belgian Football Union) plans and organizes the specific training entirely.",
  };
  const p7 = {
    Fr: "Les différents ateliers :",
    Nl: "De verschillende ateliers :",
    En: "The different workshops :"
  };
  const ul1= {
    Fr: ["Technique de course,","Atelier,","Renforcement musculaire,","Spécifique technique,","Tactique,"],
    Nl: ["Cursus techniek,","Werkplaats,","Spierversterking,","Specifieke techniek,","Tactisch,"],
    En: [" Running technique,","Workshop,"," Muscle strengthening,","Technical specific,","Tactics,"]

  };
  const p8 = {
    Fr: ["L'Académie BFA a pour objectif de monter d'un niveau , elle souhaite devenir un centre de formation bien structuré en s'appuyant sur des ressources disponibles OU acquises.",

     "Le football servira de base à la formation et à l'éducation. Les autres sports ne seront pas négligés (exemples : athlétisme, fitness, etc.)"],
    Nl: ["De BFA Academy wil een niveau hogerop komen , ze wil een goed gestructureerd opleidingscentrum worden, gebaseerd op beschikbare OF verworven middelen.",
    "Voetbal zal dienen als basis voor training en opleiding. Andere sporten zullen niet worden verwaarloosd (voorbeelden: Atletiek, fitness, etc.)"],
    En: ["The BFA Academy aims to move up a level , she wants to become a well-structured training center based on available OR acquired resources.",
    "Football will serve as a basis for training and education. Other sports will not be neglected (examples: Athletics, fitness, etc.)"]
  };
  const ul2 = {
    Fr:["L'éducation,","L'initiation sportive,", "La préformation,","La Formation,","L'organisation"
    ],
    Nl: ["Opleiding,","Sportinitiatie,", "Vooropleiding,","Training,","Organisatie"
    ],
    En: ["Education,"," Sports initiation,", "Pre-training,","Training,","Organization"
    ]
  };
  const p10 = {
Fr: ["LES OBJECTIFS A ATTEINDRE ","Création du Centre de formation","Aider le sportif à ATTEINDRE son NIVEAU MAXIMAL."],
Nl: ["LES OBJECTIEF EEN ATTEINDRE","Oprichting van het Opleidingscentrum","Help de atleet zijn MAXIMUMNIVEAU TE BEREIKEN."],
En: ["LESSON OBJECTIVE AN ATTEINDRE","Establishment of the Training Center","Help the athlete REACH their MAXIMUM LEVEL."]
  };
  const head4 = {
    Fr: "LA FORMATION",
    Nl: "OPLEIDING",
    En: "TRAINING"
  };
  const p11 = {
 Fr: ["Elle permettra, faisant suite à une bonne préformation,d'acquérir tous les moyens nécessaires","pour être compétitifs et prétendre la réussite.","LE SUIVI DE CARRIERE ET TRANSFERT","Un plan de carrière bien élaboré et un bon suivi permettra de conseiller et d'accompagner le","jeune sportif à se procurer un nouveau challenge."],
 Nl: ["Het zal het mogelijk maken om, na een goede vooropleiding, alle noodzakelijke middelen te verwerven","om competitief te zijn en succes te claimen.","LOOPBAANBEWAKING EN OVERDRACHT","Een goed ontwikkeld loopbaanplan en goede monitoring maken het mogelijk om de","jeune sportif à se procurer un nouveau challenge."],
 En: ["It will allow, following good pre-training","to acquire all the necessary means","to be competitive and claim success.","LE SUIVI DE CARRIERE ET TRANSFERT","A well-developed career plan and good monitoring will make it possible to advise and support the","jeune sportif à se procurer un nouveau challenge."]
  };
  const head5 = {
    Fr: "L'ORGANISATION",
    Nl: "DE ORGANISATIE",
    En: "THE ORGANIZATION"
  };
  const p12 = {
   Fr: ["La B.F.A. se basera sur les textes  (statuts et règlement intérieur) afin de créer une bonne organisation qu'elle soit administrativ",
    "financière, sportive ou encore éducative.",
    "Pour le lancement de ce projet sachez que nous avons indépendament investi avec nos propres",
    "moyens financiers notamment pour l'achat du matériel (ballon, cône, etc...) ainsi que pour la",
    "location de la salle... en attente d'un éventuel sponsor ou d'une aide communale...",
    "Belgium Football Academy vous garantit la progression..."
   ],
   Nl: ["De B.F.A. zal gebaseerd zijn op de teksten (statuten en huishoudelijk reglement) om een goede organisatie te creëren, zowel administratief als administratief",
    "financieel, sportief of zelfs educatief.",
    "Voor de lancering van dit project kunt u er rekening mee houden dat we onafhankelijk met onze eigen middelen hebben geïnvesteerd",
    "financiële middelen, met name voor de aanschaf van uitrusting (bal, kegel, etc.) en voor de",
    "verhuur van de kamer... wachten op een mogelijke sponsor of gemeentelijke hulp...",
    "Belgium Football Academy garandeert je vooruitgang..."
   ],

   En: ["The B.F.A. will be based on the texts (statutes and internal regulations) in order to create a good organization, whether administrative",
    "financial, sporting or even educational.",
    "For the launch of this project, please know that we independently invested with our own",
    "financial means, particularly for the purchase of equipment (ball, cone, etc.) as well as for the",
    "rental of the room... waiting for a possible sponsor or municipal aid...",
    "Belgium Football Academy guarantees you progress..."
   ]
  };
  const head6 = {
    Fr: ["MARSO YOUNESSE","RESPONSABLE B.F.A."],
    Nl: ["MARSO YOUNESSE","DIRECTEUR VAN DE BFA"],
    En: ["MARSO YOUNESSE","B.F.A. MANAGER"]

  };
  return (
    <div className="home">
      <h3 className="head1">{head[lang]}</h3>
      <p className="para">{p1[lang]}</p>
      <p className="para">{p2[lang]}</p>
      <ul className="ulist">
        <li className="listItem">{ul2[lang][0]}</li>
        <li className="listItem">{ul2[lang][1]}</li>
        <li className="listItem">{ul2[lang][2]}</li>
        <li className="listItem">{ul2[lang][3]}</li>
        <li className="listItem">{ul2[lang][4]}</li>
      </ul>
      <h3 className="head2" >{head2[lang]}</h3>
      <p className="para">{p3[lang]}</p>
      <h3 className="head2">{head3[lang]}</h3>
      <p className="para">{p4[lang]}</p>
      <p className="para">{p5[lang]}</p>
      <p className="para">{p6[lang]}</p>
      <p className="para">{p7[lang]}</p>
     
     
      <ul className="ulist">
        <li className="listItem">{ul1[lang][0]}</li>
        <li className="listItem">{ul1[lang][1]}</li>
        <li className="listItem">{ul1[lang][2]}</li>
        <li className="listItem">{ul1[lang][3]}</li>
        <li className="listItem">{ul1[lang][4]}</li>
      </ul>
      <p className="para">{p8[lang][0]}<br />{p8[lang][1]}</p>
     
      <p className="para">{p10[lang][0]}<br />{p10[lang][1]}<br />{p10[lang][2]}</p>
      <h3  className="head2">{head4[lang]}</h3>
      <p className="para">{p11[lang][0]}<br />{p11[lang][1]}<br />{p11[lang][2]}<br />{p11[lang][3]}<br />{p11[lang][4]}</p>
      <h3  className="head2">{head5[lang]}</h3>
      <p className="para">{p12[lang][0]}<br />{p12[lang][1]}<br />{p12[lang][2]}<br />{p12[lang][3]}<br />{p12[lang][4]}<br />{p12[lang][5]}</p>
      <p  className="owner">{head6[lang][0]}<br />{head6[lang][1]}</p>
    </div>
  );
}
export default Home;
