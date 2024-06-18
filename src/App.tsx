import ListGroup from "./components/ListGroup"
import Message from "./components/Message"
import Alert from "./components/Alert"
import Button from "./components/Button";
import { useState } from "react";


function App(){
  let items = ["New York", "San Francisco", "Boulder"];
  let items2 = ["San Jose", "New Mexico", "Barcelona"];
  let countries = ["France", "Switzerland", "Austrillia"];
  let test1 = "RandomAlert"

  let handleSelectItem = (item:string) => {
    console.log(item)    
  }

  let [alertVisible,setAlertVisibility] = useState(false) //Hook with initial state as false 


  return <div>
    {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>} 

    <Button color="success" onClick ={()=>setAlertVisibility(true)}>
      Click Me!
    </Button>

    <ListGroup items = {items} heading = "Cities" onSelectItem={handleSelectItem}/>
    <ListGroup items = {items2} heading = "More Cities!" onSelectItem={handleSelectItem}/>
    <ListGroup items = {countries} heading = "Countries!" onSelectItem={handleSelectItem}/>
    <Message/>
    </div> 

}

export default App 