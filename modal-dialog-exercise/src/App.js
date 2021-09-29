// import logo from './logo.svg';
// import './App.css';
import RegistrationDialog from './components/registration-dialog/RegistrationDialog';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationDialog
          onHandleCancelClick={() => console.log("cancel")}
          onHandleOkClick={() => console.log("ok")}
        >
        </RegistrationDialog>
      </header>
    </div>
  )
}

export default App;
