import GlobalStyle from './theme/GlobalStyle';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <GlobalStyle /> 
      <NavBar />
      <Main/>
    </>
  );
}

export default App;
