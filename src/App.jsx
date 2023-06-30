import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
