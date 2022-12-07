
import './App.css';

function App() {
  return (
    <main>
      <h1 id="title">freeCodeCamp Survey Form</h1>
      <p id="description">Thank you for taking the time to help us improve the platform</p>

      <form id="survey-form">

        <label id="name-label" htmlFor="name">Name</label>

        <input id="name" type="text" placeholder="type your name here" required />

        <label id="email-label" htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="type your email here" required />

        <label id="number-label" htmlFor="number">Age (optional):</label>
        <input id="number" type="number" min="1" max="60" placeholder="type your age here" required />

        <label id="dropdown-label" htmlFor="dropdown">Which option best describes your current role</label>
        <select id="dropdown">
          <option value="pizza">Select current role</option>
          <option value="chips">Student</option>
        </select>

        <label id="radio-buttons-label" htmlFor="radio-buttons">Would you recommend freeCodeCamp to a friend</label>
        <label id="entry" htmlFor="radio-button">
          <input type="radio" name="recommend" value="Definitely" id="radio-button" />Definitely
        </label>


        <label id="entry" htmlFor="radio-button"><input type="radio" name="recommend" value="Maybe" id="radio-button" />Maybe</label>
        <label id="entry" htmlFor="radio-button"><input type="radio" name="recommend" value="Not sure" id="radio-button" />Not sure</label>

        <label id="radio-buttons-label-2" htmlFor="dropdown-2">What is your favorite feature of freeCodeCamp?</label>
        <select id="dropdown-2">
          <option value="pizza">Select an option</option>
          <option value="chips">Challenges</option>
        </select>

        <label id="checkboxes-label" htmlFor="checkboxes">What would you like to see improved? (Check all that apply)</label>

        <input type="checkbox" name="improved" id="improved" value="Front-end Projects" /><label id="entry">Front-end Projects</label>
        <input type="checkbox" name="improved" id="improved" value="Back-end Projects" /><label id="entry">Back-end Projects</label>
        <input type="checkbox" name="improved" id="improved" value="Data Visualization" /><label id="entry">Data Visualization</label>
        <input type="checkbox" name="improved" id="improved" value="Challenges" /><label id="entry">Challenges</label>

        <label id="textarea-label" htmlFor="textarea">Any comments or suggestions?</label>
        <textarea rows="5" cols="40">Enter your comment here</textarea>

        <button id="submit" type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
