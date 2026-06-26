import { useState } from 'react'; 

import { CORE_CONCEPTS } from './data.js'; /* Udemy Ch 3.49 */
import Header from './components/Header.jsx';  
import CoreConcept from './components/CoreConcept.jsx'; 
// import UserInput from './components/UserInput.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data-with-examples.js';
import GetUsers from './components/GetUsers.jsx'; 

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  // let tabContent = 'Please click on a tab.';

  function handleSelect(selectedButton) { 
    // selectedButton => '1 chosen', '2', '3', '4'
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
    // tabContent = selectedButton; // Not final code; this is high-level logic.
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Types of Frameworks</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} 
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            <CoreConcept {...CORE_CONCEPTS[4]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Select one of the items below:</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('dashboard')}>React</TabButton>
            <TabButton onSelect={() => handleSelect('map')}>Map JS</TabButton>
            <TabButton onSelect={() => handleSelect('vanilla')}>Vanilla JS</TabButton>
            <TabButton onSelect={() => handleSelect('weather')}>Weather API</TabButton>
            <TabButton onSelect={() => handleSelect('lidar')}>LiDAR 3D</TabButton>
          </menu>
          {!selectedTopic ? <p>(When you click on one of the topics, a window will popup to show the highlights.)</p> : null}
          {selectedTopic ? (
            <div id="tab-content">   
              <h3>{EXAMPLES[selectedTopic].title}: <span><a href={EXAMPLES[selectedTopic].link} target="_blank" rel="noopener noreferrer">Go to Example</a></span></h3>
              
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>

        <section>
          <GetUsers />
        </section>  

      </main>
    </>
  );
}

export default App;
