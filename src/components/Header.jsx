import "./Header.css";
import reactImg from '../assets/webhook.png'; // traverses folder 2-Levels up (components > src) 
                                              // (assets > webhook.png) then down into assets folder

/* randomly gets number 0-2 which gets random description */
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
} 

/* src="src/assets/react-core-concepts.png" */ 
export default function Header() {
  const description = reactDescriptions[genRandomInt(2)]; // uses genRandomInt() to get 0,1,2
/* 
      <p><a href="http://trangdoanlam.com/portfolio/animalcrossing/build/" target="_blank">React</a> 
      <a href="http://trangdoanlam.com/portfolio/d3mapFrance.html" target="_blank">D3.js</a> 
      <a href="http://trangdoanlam.com/portfolio/vue_stickyAnimation.html" target="_blank">Vanilla JS</a>
      <a href="http://trangdoanlam.com/portfolio/writings/index_weatherApp.html" target="_blank">API Call</a>  
      </p>
*/
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Frameworks made Fun!</h1>
      <p>
       {description} Frameworks for every type of App
      </p>
    </header>
  );
}