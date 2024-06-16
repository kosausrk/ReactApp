import ListGroup from "./components/ListGroup"
import Message from "./components/Message"

function App(){
  let items = ["New York", "San Francisco", "Boulder"];
  let items2 = ["San Jose", "New Mexico", "Spain"];


  return <div>
    
    <ListGroup items = {items} heading = "Cities"/>
    <ListGroup items = {items2} heading = "More Cities!"/>
    <Message/>
    </div> 

}

export default App 