import React from 'react';
import style from './FirstForm.module.css'
import { useNavigate } from 'react-router-dom';

const FirstForm = ({setProjectName, setProjectDescription, setClient, setContractor,projectName, projectDescription, client, contractor}) => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/secstep`)
    }
  return (
    <div className={`${style.custom_container} container`}>
           <h1 className='main_title'>Sample Project - ABC Engine</h1>
        <form className={style.from_box} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="project-name">Project Name</label>
                    <input 
                        type="text" 
                        // placeholder='Enter Project Name'
                        id='project-name'
                        name="project_name" 
                        value={projectName} 
                        onChange={(e) => setProjectName(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="project-description">Project Description</label>
                    <textarea 
                        className={style.text_area}
                        type="text" 
                        // placeholder='Enter Project Description'
                        id='project-description'
                        name="project_description" 
                        value={projectDescription} 
                        onChange={(e) => setProjectDescription(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="Client">Client</label>
                    <input 
                        type="text" 
                        // placeholder='Enter Client Name'
                        id='Client'
                        name="client" 
                        value={client} 
                        onChange={(e) => setClient(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="Contractor">Contractor</label>
                    <input 
                        type="text" 
                        // placeholder='Enter Contractor Name'
                        id='Contractor'
                        name="contractor" 
                        value={contractor} 
                        onChange={(e) => setContractor(e.target.value)}
                    />
            </div>
            <button className={style.submit_btn} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FirstForm