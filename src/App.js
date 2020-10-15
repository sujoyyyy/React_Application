import React from 'react';
import ContactCard from './components/contactCard';
//import './style.css'
import contactData from './components/contactData';
function App()
{
  
  const cards = contactData.map(cont=>
      <ContactCard key={cont.id} name={cont.name} phn={cont.phn}/>
     );


  return(
  <div>
     {cards}
  </div>
  )
}

export default App;
