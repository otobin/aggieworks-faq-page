import React from 'react';
import Collapsible from 'react-collapsible';
import line from './line.png';
import arrow from './downArrow.png';

function Question(props) {
  // Extract question and answer text
  let questionText = props.questionText;
  let questionAnswer = props.questionAnswer;
  return (
      <div>
        <div class="collapsibleContainer">
          <Collapsible trigger={questionText}>
            <img src={arrow}></img>
            <p>{questionAnswer}</p>
          </Collapsible>
        </div>
      </div>
  )
}

export default Question;
