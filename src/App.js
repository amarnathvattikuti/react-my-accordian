import { useState } from 'react';
import './App.css';
import Accordian from './accordian/accordian';
import jsonCont from "./accordian/content.json";
function App() {
  const[active, setActive] =  useState("Accordian-Item-01");

  const content01 = jsonCont.slice(0, 1).map(item => item.content);
  const content02 = jsonCont.slice(1, 2).map(item => item.content);
  const content03 = jsonCont.slice(2, 3).map(item => item.content);
  const content04 = jsonCont.slice(3, 4).map(item => item.content);

  const[content, setContent] = useState(content01);

  

  return (
    <>  
    <div className="App container">
    <h1 className='my-5'>React Accordian</h1>
      <Accordian accordianitem="Accordian-Item-01" 
      itemcontent={content01}
      active={active} setActive={setActive}
      content={content} setContent={setContent}
      />
      <Accordian accordianitem="Accordian-Item-02"
       itemcontent={content02}
      active={active} setActive={setActive}
      content={content} setContent={setContent}
      />
      <Accordian accordianitem="Accordian-Item-03"
       itemcontent={content03}
       active={active} setActive={setActive}
       content={content} setContent={setContent}
       />
      <Accordian accordianitem="Accordian-Item-04"
       itemcontent={content04}
      active={active} setActive={setActive}
      content={content} setContent={setContent}
      />
    </div>
    </>
  );
}

export default App;
