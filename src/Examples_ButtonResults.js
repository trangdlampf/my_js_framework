{/* This Code is added under the Example <section> around Line 83, {selectedTopic} */}
<div id="tab-content">
	<h3>{EXAMPLES[selectedTopic].title}</h3>
	<p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
		<code>
			{EXAMPLES[selectedTopic].code}
		</code>
	</pre>
</div> 
		  
		  
		  
// From Tutorial:  https://www.youtube.com/watch?v=je3FTTunyp4  
// GET DATA FROM CAT WEBSITE:  https://catfact.ninja/fact 
// Top of file, import: 
import { useState, useEffect } from 'react';
import Axios from "axios"; // Getting Cata Data

// in function()
const [catFact, setCatFact] = useState("");
  
useEffect(() => {
	Axios.get("https://catfact.ninja/fact").then((res) => {
	// console.log(res.data.fact);
	setCatFact(res.data.fact);
		});  
	}, []);
  
// in return()
<section>
  <div>
	<button onClick={}>Generate C-- API</button>
	<p>{catFact}</p>
  </div>
</section>

This is best tutorial: 
https://www.youtube.com/watch?v=43aFTbyQtgo 


THIS CODE BELOW DOES NOT WORK

  const fetchPost = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/` + post).then((res) => { // ${post}
      // console.log(res.data); // res.data, name
      setPostIdNumber(res.data);
      console.log(res.data);
      console.log(postIdNumber);
    })
  }; 

      <h3>Get a Post Title by typing in its ID Number:</h3>
      <input 
        placeholder="Type a number from 1 - 99" 
        onChange={(e) => {                // e is for event
           setPost(e.target.value); 
        }}
      />
      <button onClick={fetchPost}>Get Post</button>
      <p>This is what you typed: {post}</p>
      <p>Title: {setPostIdNumber}</p>
      <p></p>
  	
	
	
	
	  const API_URL = `https://jsonplaceholder.typicode.com/`;
  const [reqType, setReqType] = useState(`users`); 
  const [item, setItem] =useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const respItem = await fetch(`${API_URL}${reqType}`);
        const data = await respItem.json();
        setItem(data);
        console.log(data);
      } catch(err) {
        console.log(err);
      }
    }

    fetchItems();
  }, [reqType]);
  
        <Form reqType={reqType} setReqType={setReqType} />