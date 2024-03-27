import Person from "./Question1";
import Button from "./Question2";
import Header from "./Question3";
import List from "./Question4";

const items = [1,2,3,4,5]
function App() {
  return (
    <div className="input-Box">
      <Person name="Muskan" age="23"/>
      
      <Button />
      <Header title = "I am Header"/>
      <List  />
    </div>
  )
}

export default App;
