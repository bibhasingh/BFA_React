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
    Fr: "L'Académie BFA a pour objectif de monter d'un niveau ; elle souhaite devenir un centre de formation bien structuré en s'appuyant sur des ressources disponibles OU acquises.",
    // "Le football servira de base à la formation et à l'éducation. Les autres sports ne seront pas négligés (exemples : athlétisme, fitness, etc.)",
    Nl: "De BFA Academy wil een niveau hogerop komen; ze wil een goed gestructureerd opleidingscentrum worden, gebaseerd op beschikbare OF verworven middelen.",
    // "Voetbal zal dienen als basis voor training en opleiding. Andere sporten zullen niet worden verwaarloosd (voorbeelden: Atletiek, fitness, etc.)",
    En: "The BFA Academy aims to move up a level; she wants to become a well-structured training center based on available OR acquired resources.",
    // "Football will serve as a basis for training and education. Other sports will not be neglected (examples: Athletics, fitness, etc.)",
  };
  return (
    <div>
      <h3>{head[lang]}</h3>
      <h4>{p1[lang]}</h4>
      <h4>{p2[lang]}</h4>
      <h3>{head2[lang]}</h3>
      <h4>{p3[lang]}</h4>
      <h3>{head3[lang]}</h3>
      <h4>{p4[lang]}</h4>
      <h4>{p5[lang]}</h4>
      <h4>{p6[lang]}</h4>
      <h4>{p7[lang]}</h4>
    </div>
  );
}
export default Home;
