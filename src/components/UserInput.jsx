import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    firstSearch: "Dashboard",
    secondSearch: "Map JS Library"
  });

  function handleChange(inputIdentifier, newValue){ /* Generic handlechange */
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        [inputIdentifier]: newValue
      };
    });
  }

  return 
    <section id="input-user">
      <div className="">
        <p>
            <input 
              type="text"
              value={userInput.firstSearch} 
              onChange={(event) => 
                handleChange('firstSearch', event.target.value)
              } 
            />
        </p>
      </div>
    </section>
}