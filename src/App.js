import React, {useState} from 'React'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Card/>
      </Main>
    </>
  );
}

export default App;
