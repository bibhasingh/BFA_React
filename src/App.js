import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { MyProvider } from "./Lang";
import "./style.css";

function App() {
  return (
    <>
      <MyProvider>
        <Header />
        <div className="spacer"></div>
        <Menu />
      </MyProvider>
      <Footer />
    </>
  );
}

export default App;
