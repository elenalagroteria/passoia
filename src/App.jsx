import Header from "./components/1Header";
import Banner from "./components/2Banner"
import Looks from "./components/3Looks";
import Lancamentos from "./components/4Lancamentos";
import Novidades from "./components/5Novidades";
import Footer from "./components/6Footer";
import './styles/globals.scss';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Looks />
      <Lancamentos />
      <Novidades />
      <Footer />
    </>
  );
}

export default App;
