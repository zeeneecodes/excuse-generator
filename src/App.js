import { useState } from 'react';
import './App.css';
import Axios from 'axios';




function App() {
  const [famExcuse, setFamilyExcuse] = useState('');
  const [offExcuse, setOfficeExcuse] = useState('');
  const [chiExcuse, setChildrenExcuse] = useState('');
  const [colExcuse, setCollegeExcuse] = useState('');
  const [parExcuse, setPartyExcuse] = useState('');
  const [funExcuse, setFunnyExcuse] = useState('');
  const [unbExcuse, setUnbelievableExcuse] = useState('');
  const [devExcuse, setDevelopersExcuse] = useState('');
  const [gamExcuse, setGamingExcuse] = useState('');
  const [generatedExcuse, setgeneratedExcuse] = useState(null);

  const familyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/family/').then((res) => {
      setFamilyExcuse(res.data[0].excuse);

      if (famExcuse != '') {
        setgeneratedExcuse('"'+famExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for Family Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const officeExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/office/').then((res) => {
      setOfficeExcuse(res.data[0].excuse);
      if (offExcuse != '') {
        setgeneratedExcuse('"'+offExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for Office Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const childrenExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/children/').then((res) => {
      setChildrenExcuse(res.data[0].excuse);
      setgeneratedExcuse('"'+chiExcuse+'"');
    })
  }
  
  const collegeExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/college/').then((res) => {
      setCollegeExcuse(res.data[0].excuse);
      setgeneratedExcuse('"'+colExcuse+'"');
    })
  }
  
  const partyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/party/').then((res) => {
      setPartyExcuse(res.data[0].excuse);
      setgeneratedExcuse('"'+parExcuse+'"');
    })
  }
  
  const funnyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/funny/').then((res) => {
      setFunnyExcuse(res.data[0].excuse);
      setgeneratedExcuse('"'+funExcuse+'"');
    })
  }
  
  const unbelievableExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/unbelievable/').then((res) => {
      setUnbelievableExcuse(res.data[0].excuse);
      setgeneratedExcuse('"'+unbExcuse+'"');
    })
  }
  
  const developersExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/developers/').then((res) => {
      setDevelopersExcuse(res.data[0].excuse);
      setgeneratedExcuse('"'+devExcuse+'"');
    })
  }
  
  const gamingExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/gaming/').then((res) => {
      setGamingExcuse(res.data[0].excuse);
      setgeneratedExcuse('"'+gamExcuse+'"');
    })
  }

  return (
    <div className='main-container'>
      <div className='left-section'>
        <header>
          <h1 className='header'>Generate a Silly Excuse!</h1>
        </header>
        <article>{generatedExcuse}</article>
      </div>


     <section>
      <div className='inner-container'>
        <Excuse type='Family' toClick={familyExcuse} />
        <Excuse type='Office' toClick={officeExcuse}/>
        <Excuse type='Children' toClick={childrenExcuse}/>
        <Excuse type='College' toClick={collegeExcuse}/>
        <Excuse type='Party' toClick={partyExcuse}/>
        <Excuse type='Funny' toClick={funnyExcuse}/>
        <Excuse type='Unbelievable' toClick={unbelievableExcuse}/>
        <Excuse type='Developers' toClick={developersExcuse}/>
        <Excuse type='Gaming' toClick={gamingExcuse}/>
      </div>
     </section>
    </div>
  );
}

function Excuse(props) {
  return (
    <div className='excuse-type'>
      <h3>{props.type}</h3>
      <div className='excuse-type__button-container'>
        <button onClick={props.toClick}>Generate</button>
      </div>
    </div>
  )
}
export default App;
