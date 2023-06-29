import { useState, useEffect } from "react";
import cat from '/src/cat.png';

const MyComponent = () => {
  const [storing, isStoring] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, isCounting] = useState(0);
  async function cats(){
    setIsLoading(true);
    try{
    const wait = await fetch("https://catfact.ninja/fact");
    const respond = await wait.json();
   isStoring([
    ...storing, {name: respond.fact, num: respond.length}
   ])
   isCounting(count + 1);
    console.log(respond);
    setIsLoading(false);
  }
  catch(err){
    console.log("Error", err);
   
  }

  }
  return (
    <>
    <div className="main">
      <div className="inner">
        <header>
          <img src={cat} height={40} width={40}></img>
          <h2 className="con">Cat Facts</h2>
        </header>
        <div className="text-sec">
      <p className="para">{isLoading ? "Generating..." : storing[count].name}</p>
      <p style={{display: isLoading ? "none" : null}} className="text">Cat Fact: {storing[count].num}</p>
    <button onClick={cats}>Generate</button>
    </div>
    </div>
    </div>
    </>
  );
};

export default MyComponent;






