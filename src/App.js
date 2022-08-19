import { useState } from "react";

import ExclusiveContent from "./components/ExclusiveContent";


function App() {

  const [title, setTitle] = useState('Use State React');
  const [showContent, setShowContent] = useState(false);

  const handleTitle = () => {
    setTitle('Título alterado!')
  }

  const handleContent = () => {
    setShowContent(!showContent)
  }

  return (
    <div>
      <h1>{title}</h1>
      {showContent && <ExclusiveContent />}
      <button onClick={handleTitle}>Alterar o título</button>
      &nbsp;
      <button onClick={handleContent}>
        {showContent ? 'Click para ocultar conteúdos' : 'Click para exibir conteúdos'}
      </button>
      <ContentExtra showContent={showContent}/>
    </div>
  );
}


  /* 
  
    Atenção !!! 
    O mais indicado é fazer isso em outro arquivo e passar via props...
    Está sendo feito aqui apenas a nível de estudo/prática do hook Use State!
  */
  function ContentExtra({ showContent }){
    return (
      <>
        {showContent && <p>Conteudo extra!</p>}
      </>
    )
  }

export default App;
