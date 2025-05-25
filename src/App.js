import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { MyProvider } from "./Lang";
import { ContentProvider } from "./Content";
import "./style.css";

function App() {
  return (
    <>
      <MyProvider>
        <Header />
        <div className="spacer"></div>
        <ContentProvider>
          <Menu />
        </ContentProvider>
        <Footer />
      </MyProvider>
    </>
  );
}

export default App;
