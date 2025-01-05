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
  return (
    <div>
      <h3>{head[lang]}</h3>
      <h4>{p1[lang]}</h4>
    </div>
  );
}
export default Home;
