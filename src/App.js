import React, { useState } from 'react';
import './App.css';
import { Route,Routes} from "react-router-dom";
import FirstForm from './Components/First-Form/FirstForm';
import SecondForm from './Components/Second-Form/SecondForm';



const App = () => {
  const [ projectName, setProjectName] = useState('');
    const [ projectDescription, setProjectDescription] = useState('');
    const [ client, setClient] = useState('');
    const [ contractor, setContractor] = useState('');
    const allData = {
      projectName,
      projectDescription,
      client,
      contractor
  }
  console.log(allData, 'first');
  return (
    <div className='App'>
          <Routes>
              <Route exact path="/" element={<FirstForm 
              projectName={projectName}
              setProjectName={setProjectName}
              projectDescription={projectDescription}
              setProjectDescription={setProjectDescription}
              client={client}
              setClient={setClient}
              contractor={contractor}
              setContractor={setContractor}
               />} />
              <Route exact path="/secstep" element={<SecondForm data={allData} />} />
          </Routes>
    </div>
  )
}

export default App