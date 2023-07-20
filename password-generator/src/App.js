import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import copyIcon from './copy.svg';

const App = () => {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(26)
  const [isUppercase, setCheckUppercase] = useState(false);
  const [isLowercase, setCheckLowercase] = useState(false);
  const [isNumbers, setCheckNumbers] = useState(false);
  const [isSymbols, setCheckSymbols] = useState(false);

  const generatePassword = () => {
    const isValid = isValidPasswordInput();
    if(isValid){
      const characterSets = [];
      const random = (min = 0, max = 1) => Math.floor(Math.random() * (max + 1 - min) + min);
      const randomLower = () => String.fromCharCode(random(97, 122))
      const randomUpper = () => String.fromCharCode(random(65, 90));
      const randomSymbol = () => {
        const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>"
        return symbols[random(0, symbols.length - 1)]
      }
      const randomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);

      if (isLowercase) characterSets.push(randomLower);
      if (isUppercase) characterSets.push(randomUpper);
      if (isSymbols) characterSets.push(randomSymbol);
      if (isNumbers) characterSets.push(randomNumber);

      let password = '';
      for (let i = 0; i < passwordLength; i++) {
          const randomSetIndex = Math.floor(Math.random() * characterSets.length);
          const randomChar = characterSets[randomSetIndex]();
          password += randomChar;
      }

      setPassword(password);
      toast('Password is generated successfully', {
          position: toast.POSITION.TOP_CENTER
      });
    }
}

const isValidPasswordInput = () => {
  const errorMessage = {
    noCheckbox: "To generate a password, you must select at least one checkbox",
    zeroLength: "Password length cannot be 0",
    invalidLength: "Invalid password length",
    maxLengthExceeded: "Password length cannot exceed 80 characters",
  };

  let errorKey = null;

  switch (true) {
    case !isUppercase && !isLowercase && !isNumbers && !isSymbols:
      errorKey = "noCheckbox";
      break;
    case passwordLength === '0':
      errorKey = "zeroLength";
      break;
    case passwordLength === '':
      errorKey = "invalidLength";
      break;
    case passwordLength > 80:
      errorKey = "maxLengthExceeded";
      break;
    default:
      return true;
  }

  showToastError(errorMessage[errorKey]);
  return false;
};

const copiedClipboardHandler = () =>{
  if(password.length > 0){
      navigator.clipboard.writeText(password);
      showToastSuccess('Password successfully copied to clipboard');
  }
}
  
const showToastError = (message, position = toast.POSITION.TOP_CENTER) => {
  toast.error(message, {position});
};

const showToastSuccess = (message, position = toast.POSITION.TOP_CENTER) => {
  toast(message, {position});
};

  return (
    <div className='app'>
      <div className="container">
        <div className="generator">
            <h2 className='generator__header'>Password Generator</h2>
            <div className='generator__password'>
                <h3>{password}</h3>
                <img src={copyIcon} alt='' className="icon-copy" onClick={copiedClipboardHandler} />
            </div>
        <div className='form-group'>
            <label>Password length</label>
            <input
                type='number'
                name='length'
                min='4'
                max='50'
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>Include Uppercase Letters</label>
            <input
            type='checkbox'
            name='isUppercase'
            defaultChecked={isUppercase}
            onChange={(e) => setCheckUppercase(e.target.checked)}
            />
        </div>
        <div className='form-group'>
            <label>Include Lowercase Letters</label>
            <input
            type='checkbox'
            name='isLowercase'
            defaultChecked={isLowercase}
            onChange={(e) => setCheckLowercase(e.target.checked)}
            />
        </div>
        <div className='form-group'>
            <label>Include Numbers</label>
            <input
            type='checkbox'
            name='isNumbers'
            defaultChecked={isNumbers}
            onChange={(e) => setCheckNumbers(e.target.checked)}
            />
        </div>
        <div className='form-group'>
            <label>Include Symbols</label>
            <input
            type='checkbox'
            name='symbols'
            defaultChecked={isSymbols}
            onChange={(e) => setCheckSymbols(e.target.checked)}
            />
        </div>
        <button
            className='generator__btn'
            type='submit'
            name='generate'
            onClick={generatePassword}
        >Generate Password
        </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App;