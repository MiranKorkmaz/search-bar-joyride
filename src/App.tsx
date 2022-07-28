import './App.css';
import { UserFinder } from './components/user-finder/UserFinder';
import JoyrideTour from "./components/joyride/joyrideTour";
import { Step } from "react-joyride";

const STEPS: Step[] = [
    {
        content: <h2>Welcome! Let's begin our joyrney.</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: "center",
        target: "body",
    },
    {
        content: <h2>Search for the user you are looking for.</h2>,
        floaterProps: {
            disableAnimation: true,
        },
        spotlightPadding: 10,
        target: "input",
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
    },
    {
        content: <h2>Press the button for the search result.</h2>,
        floaterProps: {
            disableAnimation: true,
        },
        spotlightPadding: 10,
        target: "button",
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
    },
]

function App() {
    const tour = JoyrideTour(STEPS, "LS_KEY")
  return (
    <div className="App">
        {tour}
      <UserFinder />
    </div>
  );
}

export default App;
