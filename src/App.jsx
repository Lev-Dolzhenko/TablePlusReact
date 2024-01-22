import Header from "./components/header/Header";
import Comments from "./components/comments/comments/Comments";
import Benefits from "./components/benefits/Benefits";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import News from "./components/news/News";
import Main from "./components/main/Main";

import "./App.css";
import "./reset.css";
import "./fonts/inter.css";

function App() {
  return (
    <>
      <Header />

      <Main />

      <Catalog />

      <News />

      <Comments />

      <Benefits />

      <Footer />
    </>
  );
}

export default App;
