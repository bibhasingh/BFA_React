function Home({ lang }) {
  const head = {
    Fr: "Bienvenue Sur Le Site De La Belgium Football Academy!",
    Nl: "Welkom Op De Website Van De Belgische Voetbalacademie!",
    En: "Welcome To The Belgium Football Academy Website!",
  };

  const p1 = {
    Fr: "L’académie B.F.A. est un projet principalement sportif, elle a été créée en janvier 2018.",
    Nl: "L’académie B.F.A. Het is een sportief hoofdproject dat in januari 2018 is gecreëerd.",
    En: "The BFA academy is a mainly sports project, it was created in January 2018.",
  };
  const p2 = {
    Fr: "Ce projet est fixé sur plusieurs objectifs qui seront axés sur:",
    Nl: "Dit project heeft verschillende doelstellingen die zich richten op:",
    En: "This project is set on several objectives which will focus on:",
  };

  const head2 = {
    Fr: "L’EDUCATION",
    Nl: "HET ONDERWIJS",
    En: "EDUCATION",
  };
  const p3 = {
    Fr: "Une bonne éducation constitue la base de la formation tant au niveau scolaire que sportif. La B.F.A. se propose d’appuyer et de questionner les enfants scolarisés dans le cadre de leurs études.",
    Nl: "Een goede opleiding is de basis voor elke training, zowel op academisch als op sportief vlak. De B.F.A. heeft als doel schoolkinderen te ondersteunen en te bevragen in het kader van hun studie.",
    En: "A good education is the basis of training both at the academic and sports level. The B.F.A. aims to support and question school children as part of their studies.",
  };
  const head3 = {
    Fr: "L’INITIATION SPORTIVE",
    Nl: "SPORTIEVE INLEIDING",
    En: "PRE-TRAINING",
  };
  const p4 = {
    Fr: "Elle permettra d’acquérir les moyens physiques et techniques adéquats pour prétendre à une bonne formation.",
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
    Fr: "L'Académie BFA a pour objectif de monter d'un niveau ; elle souhaite devenir un centre de formation bien structuré en s'appuyant sur des ressources disponibles OU acquises.",
    // "Le football servira de base à la formation et à l'éducation. Les autres sports ne seront pas négligés (exemples : athlétisme, fitness, etc.)",
    Nl: "De BFA Academy wil een niveau hogerop komen; ze wil een goed gestructureerd opleidingscentrum worden, gebaseerd op beschikbare OF verworven middelen.",
    // "Voetbal zal dienen als basis voor training en opleiding. Andere sporten zullen niet worden verwaarloosd (voorbeelden: Atletiek, fitness, etc.)",
    En: "The BFA Academy aims to move up a level; she wants to become a well-structured training center based on available OR acquired resources.",
    // "Football will serve as a basis for training and education. Other sports will not be neglected (examples: Athletics, fitness, etc.)",
  };
  const ul2 = {
    Fr:["L’éducation,","L’initiation sportive,", "La préformation,","La Formation,","L’organisation"
    ],
    Nl: ["Opleiding,","Sportinitiatie,", "Vooropleiding,","Training,","Organisatie"
    ],
    En: ["Education,"," Sports initiation,", "Pre-training,","Training,","Organization"
    ]
  };

  const p9 = {
    Fr:"Le football servira de base à la formation et à l’éducation. D’autres sports ne seront pas à négliger (exemples : Athlétisme, fitness...)",
    Nl: "Voetbal zal als basis dienen voor training en opleiding. Andere sporten zullen niet worden verwaarloosd (bijvoorbeeld: atletiek, fitness, etc.)",
    En:"Football will serve as a basis for training and education. Other sports will not be neglected (examples: Athletics, fitness, etc.)"
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

  return (
    <div>
      <h3>{head[lang]}</h3>
      <p>{p1[lang]}</p>
      <p>{p2[lang]}</p>
      <ul>
        <li>{ul2[lang][0]}</li>
        <li>{ul2[lang][1]}</li>
        <li>{ul2[lang][2]}</li>
        <li>{ul2[lang][3]}</li>
        <li>{ul2[lang][4]}</li>
      </ul>
      <h3>{head2[lang]}</h3>
      <p>{p3[lang]}</p>
      <h3>{head3[lang]}</h3>
      <p>{p4[lang]}</p>
      <p>{p5[lang]}</p>
      <p>{p6[lang]}</p>
      <p>{p7[lang]}</p>
     
     
      <ul>
        <li>{ul1[lang][0]}</li>
        <li>{ul1[lang][1]}</li>
        <li>{ul1[lang][2]}</li>
        <li>{ul1[lang][3]}</li>
        <li>{ul1[lang][4]}</li>
      </ul>
      <p>{p8[lang]}</p>
      <p>{p9[lang]}</p>
      <p>{p10[lang][0]}<br />{p10[lang][1]}<br />{p10[lang][2]}</p>
      <h3>{head4[lang]}</h3>
      <p>{p11[lang][0]}<br />{p11[lang][1]}<br />{p11[lang][2]}<br />{p11[lang][3]}<br />{p11[lang][4]}</p>

    </div>
  );
}
export default Home;
