import { useState } from "react"
import AnswersList from "./AnswersList";

const initialFormState = {
  color: "",
  spendTime: [],
  username: "",
  review: "",
  email: "",
  
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(initialFormState)
  const [answers, setAnswers] = useState([])
  const [userReply, setUserReply] = useState(initialFormState)

  const addAnswer = (answer) => {
    setAnswers([...answers, answer])
  }

  const submitForm = (event) => {
    event.preventDefault();

    //read form data and reate answer user reply in answers
    addAnswer(userReply)
    //clear form
    //
    setUserReply(initialFormState)
  }
  console.log('answers', answers)

  
    console.log("state", userReply)
   function handleChange(event) {
   
    //event.preventDefault();
    const inputValue = event.target.value;
    const inputType = event.target.type;
    const inputName = event.target.name
    //const inputChecked = event.target.type
    //event.target.checked
    console.log("event", inputValue, inputType, inputName )
    if (inputType === "radio") {
      setUserReply({...userReply, color: inputValue})
    }
    if (inputType === "checkbox") {
      if(userReply.spendTime.includes(inputValue)) {
        // remove swimming
        userReply.spendTime = userReply.spendTime.filter(value => value !== inputValue)
      } else {
        userReply.spendTime.push(inputValue)
      }
      setUserReply({...userReply})
    }
   
    if(inputName === "reply") {
      setUserReply({...userReply, review: inputValue})
    }
    setUserReply({...userReply, [inputName]: inputValue})
  }
  

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} />
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange}/>
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleChange}/>
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange}/>
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" onChange={handleChange} checked={userReply.spendTime.includes('swimming')}/>Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" onChange={handleChange} checked={userReply.spendTime.includes('bathing')}/>Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" onChange={handleChange} checked={userReply.spendTime.includes('chatting')}/>Chatting
                </label>
              </li>
              <li>
                <label>
                <input name="spend-time" type="checkbox" value="noTime" onChange={handleChange} checked={userReply.spendTime.includes('noTime')}/>I don't like to
                  spend time with it
                </label>
              </li>
            </ul>
          </div>

          <label
            >What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              placeholder="You can write here"
              onChange={handleChange}
              value={userReply.review}
            ></textarea>
          </label>

          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={userReply.fullName}
              onChange={handleChange} />
          </label>

          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={userReply.email} />
              
          </label>

          <input className="form__submit" type="submit" value="Submit Survey!" />

        </form>
      </section>
    </main>
  );
}

export default Main;
