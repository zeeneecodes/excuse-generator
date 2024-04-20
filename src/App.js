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

  const familyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/family/').then((res) => {
      setFamilyExcuse(res.data[0].excuse);
    })
  }
  
  const officeExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/office/').then((res) => {
      setOfficeExcuse(res.data[0].excuse);
    })
  }
  
  const childrenExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/children/').then((res) => {
      setChildrenExcuse(res.data[0].excuse);
    })
  }
  
  const collegeExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/college/').then((res) => {
      setCollegeExcuse(res.data[0].excuse);
    })
  }
  
  const partyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/party/').then((res) => {
      setPartyExcuse(res.data[0].excuse);
    })
  }
  
  const funnyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/funny/').then((res) => {
      setFunnyExcuse(res.data[0].excuse);
    })
  }
  
  const unbelievableExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/unbelievable/').then((res) => {
      setUnbelievableExcuse(res.data[0].excuse);
    })
  }

  return (
    <>
     <header>
      <h1 className='header'>Generate an Excuse!</h1>
     </header>

     <section>
      <div className='inner-container'>
        <div className='excuse-type'>
          <h3>Family</h3>
          <button onClick={familyExcuse}>Generate</button>
          <p>{famExcuse}</p>
        </div>

        <div className='excuse-type'>
          <h3>Office</h3>
          <button onClick={officeExcuse}>Generate</button>
          <p>{offExcuse}</p>
        </div>

        <div className='excuse-type'>
          <h3>Children</h3>
          <button onClick={childrenExcuse}>Generate</button>
          <p>{chiExcuse}</p>
        </div>

        <div className='excuse-type'>
          <h3>College</h3>
          <button onClick={collegeExcuse}>Generate</button>
          <p>{colExcuse}</p>
        </div>

        <div className='excuse-type'>
          <h3>Party</h3>
          <button onClick={partyExcuse}>Generate</button>
          <p>{parExcuse}</p>
        </div>

        <div className='excuse-type'>
          <h3>Funny</h3>
          <button onClick={funnyExcuse}>Generate</button>
          <p>{funExcuse}</p>
        </div>
        
        <div className='excuse-type'>
          <h3>Unbelievable</h3>
          <button onClick={unbelievableExcuse}>Generate</button>
          <p>{unbExcuse}</p>
        </div>

        <div className='excuse-type'>
          <h3>Developers</h3>
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
        </div>

        <div className='excuse-type'>
          <h3>Gaming</h3>
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
        </div>
      </div>
     </section>
    </>
  );
}

export default App;
