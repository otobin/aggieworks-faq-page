import logo from './logo.svg';
import './App.css';
import blue_splash from './blue-splash.png';
import green_splash from './green-splash.png';
import human from './human.png';
import clock from './clock.png';
import chat_bubbles from './chat-bubbles.png';
import Question from "./components/question";

let question1 = { questionText: "Do I need to have a UC Davis email to sign up?", questionAnswer: "Question 1 Answer"}
let question2 = { questionText: "I'm an alumni, can I still view or add reviews?", questionAnswer: "Question 2 Answer"};
let question3 = { questionText: "Can I modify my reviews?", questionAnswer: "Question 3 Answer"};
let question4 = { questionText: "Does my professor know I am writing his/her reviews?", questionAnswer: "Question 4 Answer"};
let question5 = { questionText: "Are the reviews filtered by AggieReview?", questionAnswer: "Question 4 Answer"};
let question6 = { questionText: "Where does AggieReview get its course data? How often is it updated?", questionAnswer: "Question 1 Answer"}
let question7 = { questionText: "Are the reviews anonymous?", questionAnswer: "Question 2 Answer"};
let question8 = { questionText: "Can I delete my reviews?", questionAnswer: "Question 3 Answer"};
let question9 = { questionText: "Can I reply to my reviews?", questionAnswer: "Question 4 Answer"};

function App() {

  return (
    <div className="FAQ-page" style={{fontFamily: 'Inter_900Black'}}>
      <div className="header-container">
        <p className="header-text">Frequently Asked Questions</p>
        <div className="graphic">
          <img src={blue_splash} id="blue_splash" />
          <img src={green_splash} id="green_splash" />
          <img src={human} id="human" />
          <img src={clock} id="clock" />
          <img src={chat_bubbles} id="chat_bubbles" />
        </div>
      </div>

      <div className="questions">
        <div id="questions-title-container">
          <p id="questions-title">Frequently Asked Questions</p>
        </div>
        <div id="questions-div-flex">
          <div className="student-questions">
            <p id="category-title">Student Questions</p>
            <Question questionText={question1.questionText} questionAnswer={question1.questionAnswer}></Question>
            <Question questionText={question2.questionText} questionAnswer={question2.questionAnswer}></Question>
            <Question questionText={question3.questionText} questionAnswer={question3.questionAnswer}></Question>
            <Question questionText={question4.questionText} questionAnswer={question4.questionAnswer}></Question>
            <Question questionText={question5.questionText} questionAnswer={question5.questionAnswer}></Question>
            <Question questionText={question6.questionText} questionAnswer={question6.questionAnswer}></Question>
            <Question questionText={question7.questionText} questionAnswer={question7.questionAnswer}></Question>
          </div>
          <div className="professor-questions">
            <p id="category-title">Professor Questions</p>
            <Question questionText={question8.questionText} questionAnswer={question8.questionAnswer}></Question>
            <Question questionText={question9.questionText} questionAnswer={question9.questionAnswer}></Question>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;