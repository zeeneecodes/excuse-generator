import { useState } from 'react';
import './App.css';
import Axios from 'axios';




function App() {
  const [famExcuse, setFamilyExcuse] = useState('');

  const familyExcuse = () => {
    Axios.get('https://excuser-three.vercel.app/v1/excuse/family/').then((res) => {
      setFamilyExcuse(res.data[0].excuse);
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
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
        </div>

        <div className='excuse-type'>
          <h3>Children</h3>
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
        </div>

        <div className='excuse-type'>
          <h3>College</h3>
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
        </div>

        <div className='excuse-type'>
          <h3>Party</h3>
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
        </div>

        <div className='excuse-type'>
          <h3>Funny</h3>
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
        </div>
        
        <div className='excuse-type'>
          <h3>Unbelievable</h3>
          <button>Generate</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum malesuada justo, eget gravida orci.</p>
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
