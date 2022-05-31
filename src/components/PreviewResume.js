import React from 'react';
import styled from 'styled-components';
import Resume from './Resume';

const PrivewResume = ({ resumes }) => {

  return(
  <section>
    <h1>Resume Privew</h1>
    {resumes&&resumes.map(resume1 => (
          <Resume resume1={resume1} />
        ))}
  </section>
  )
}

export default PrivewResume;