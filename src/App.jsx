import Header from "./components/Header"
import Entry  from "./components/Entry"
import Footer from "./components/Footer"
import Jokes from "./components/Jokes"
import Meklit from "./assets/Images/cat.jpeg"
import data from "./data"
export default function App(){
const entryElement=data.map((entry)=>{
  return(
    <Entry
    key={entry.id}
    entry={entry}
    />
  )
})

  return(
    <div>
      <Header />
      
<div className="container">
  {entryElement}
</div>

     <Footer/>
    </div>
  )
}