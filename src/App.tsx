import './App.css';
import { UserFinder } from './components/user-finder/UserFinder';
import JoyrideTour from "./components/joyride/joyrideTour";
import { Step } from "react-joyride";

const STEPS: Step[] = [
    {
        content: <h2>Let's begin our journey!</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: "center",
        target: "button",
    },
    {
        content: <h2>Sticky Elemeny</h2>,
        floaterProps: {
            disableAnimation: true,
        },
        spotlightPadding: 20,
        target: "input",
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
