import './App.css';
import { MuiAutoComplete } from './Components/MuiAutoComplete';
import { MuiButton } from './Components/MuiButton';
import { MuiCheckBox } from './Components/MuiCheckBox';
import { MuiRadioButton } from './Components/MuiRadioButton';
import { MuiRating } from './Components/MuiRating';
import { MuiSelect } from './Components/MuiSelect';
import { MuiSwitch } from './Components/MuiSwitch';
import { MuiTextField } from './Components/MuiTextField';
import { MuiTypography } from './Components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography/>
      <MuiButton/>
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
    </div>
  );
}

export default App;
