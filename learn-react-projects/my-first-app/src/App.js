import './App.css';
import PersoneCard from './components/PersoneCard';
var personeArray = [
  { "firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black" },
  { "firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown" },
  { "firstName": "Tamer", "lastName": "Mansour", "age": 20, "hairColor": "black" },
  { "firstName": "Ward", "lastName": "Adnan", "age": 5, "hairColor": "colorful" },
]
function App() {
 return(
   <>
  {personeArray.map(person => {return <PersoneCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />})}
  </>
 )
}

export default App;
