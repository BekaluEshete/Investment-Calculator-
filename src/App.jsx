import Header from './components/Header'
import UserInput from './components/UserInput'
import { useState } from 'react'; 
import Result from './components/Results';
function App() {
  const [userInput,setUserInput]=useState({
        initialInvestment:12000,
        annualInvestment:1200,
        expectedReturn:7,
        duration:5


    });
    const isUserInputValid=(
        userInput.initialInvestment>0 &&
        userInput.annualInvestment>0 &&
        userInput.expectedReturn>0 &&
        userInput.duration>0
    )
    
    function handleChange(identifier,newValue){
        setUserInput((prevState)=>{
            return {
                ...prevState,
                [identifier]:newValue
            }
        })

    }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} handleChange={handleChange}/>
    {!isUserInputValid && <p className="center">Please enter valid values</p>}
   {isUserInputValid && <Result input={userInput}/>}
    </>

  )
}

export default App
