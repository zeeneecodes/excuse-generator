import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import chillingPic from './images/chilling.svg'




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

      if (famExcuse !== '') {
        setgeneratedExcuse('"'+famExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for Family Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const officeExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/office/').then((res) => {
      setOfficeExcuse(res.data[0].excuse);
      if (offExcuse !== '') {
        setgeneratedExcuse('"'+offExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for the most needed Office Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const childrenExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/children/').then((res) => {
      setChildrenExcuse(res.data[0].excuse);

      if (chiExcuse !== '') {
        setgeneratedExcuse('"'+chiExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for Children Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const collegeExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/college/').then((res) => {
      setCollegeExcuse(res.data[0].excuse);
      
      if (colExcuse !== '') {
        setgeneratedExcuse('"'+colExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for the useful College Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const partyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/party/').then((res) => {
      setPartyExcuse(res.data[0].excuse);

      if (parExcuse !== '') {
        setgeneratedExcuse('"'+parExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for the perfect Party Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const funnyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/funny/').then((res) => {
      setFunnyExcuse(res.data[0].excuse);

      if (funExcuse !== '') {
        setgeneratedExcuse('"'+funExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for the ultimate Funny Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const unbelievableExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/unbelievable/').then((res) => {
      setUnbelievableExcuse(res.data[0].excuse);

      if (unbExcuse !== '') {
        setgeneratedExcuse('"'+unbExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for my Unbelievable Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const developersExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/developers/').then((res) => {
      setDevelopersExcuse(res.data[0].excuse);

      if (devExcuse !== '') {
        setgeneratedExcuse('"'+devExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for the most believable Developer Excuses just woke up! Please click me once more 🙏');
      }
    })
  }
  
  const gamingExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/gaming/').then((res) => {
      setGamingExcuse(res.data[0].excuse);

      if (gamExcuse !== '') {
        setgeneratedExcuse('"'+gamExcuse+'"');
      } else {
        setgeneratedExcuse('Hold on my brain for saying some silly Gaming Excuses just woke up! Please click me once more 🙏');
      }
    })
  }

  return (
    <>
    <div className='main-container'>
      <div className='left-section'>
        <header>
          <h1 className='header'>Generate a Silly Excuse!</h1>
        </header>
        <article>{generatedExcuse}</article>
        <img src={chillingPic} alt='illustration of two people chilling on a couch'/>
      </div>


     <section>
      <div className='right-section'>
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
    <footer className='footer'>&#169; 2024 zeeneecodes</footer>
    
    </>
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
