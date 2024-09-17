import './App.css';
import { MuiButton } from './Components/MuiButton';
import { MuiRadioButton } from './Components/MuiRadioButton';
import { MuiSelect } from './Components/MuiSelect';
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
    </div>
  );
}

export default App;
