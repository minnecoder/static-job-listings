import React from 'react';
import styled from 'styled-components';
import logo from '../images/loop-studios.svg';

export default function jobItem() {
  return (

    <Main>

      <JobInfo>
        <img src={logo} alt="company logo" />
        <div>
          <p>Eyecam Co.</p>
          <p>Full Stack Engineer</p>
          <p>3w ago * Full Time * Worldwide</p>
        </div>
      </JobInfo>
      <JobTags>
        <ul>
          <li>Fullstack</li>
          <li>Midweight</li>
          <li>JavaScript</li>
          <li>Vue</li>
          <li>Sass</li>
        </ul>
      </JobTags>
    </Main>

  );
}

const Main = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
border: solid 1px red;
`;

const JobInfo = styled.div`
display: flex;
justify-content: space-around;
div{
    padding-left: 1rem;
}
p {
    margin: .5rem;
}
`;

const JobTags = styled.div`
margin-top: 1rem;
ul {
    list-style-type: none;
    display: flex; 
}
li{
    padding: .5rem;
}
`;
