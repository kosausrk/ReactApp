import ListGroup from "./components/ListGroup"
import Message from "./components/Message"

function App(){
  let items = ["New York", "San Francisco", "Boulder"];
  let items2 = ["San Jose", "New Mexico", "Spain"];
  let countries = ["France", "Switzerland", "Austrillia"];



  return <div>
    
    <ListGroup items = {items} heading = "Cities"/>
    <ListGroup items = {items2} heading = "More Cities!"/>
    <ListGroup items = {countries} heading = "Countries!"/>
    <Message/>
    </div> 

}

export default App 