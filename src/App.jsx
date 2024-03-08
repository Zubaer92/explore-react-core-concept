
import './App.css'
import Counter from './counter';
import Friends from './friends';
import Users from './user';


function App() {
 
function handleClick(){
  alert ('button clicked');
}
const handleClick2=()=>{
  alert ('button2 clicked')
}

const addToFive =(num)=>{
 alert (num +5)
}
  return (
    <>
      
      <h3>React core concepts 2</h3>
       <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick= {handleClick}> Click Me</button>
     <button onClick={handleClick2}>Click More</button>
     {/* vejalilla */}
     <button onClick={()=> addToFive(3)}> Click More and More</button>
    </>
  )
}

export default App
