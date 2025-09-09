
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharaterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [color, setColor] = useState('#fff');

  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(isNumberAllowed) str+="1234567890";
    if(isCharaterAllowed) str+=`!@#$%^&*()_+[]{}''`;

    for (let index = 1; index < length; index++) {
        let charIndex = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, isNumberAllowed, isCharaterAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRed.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=> {
    passwordGenerator();
  }, [length, isCharaterAllowed, isNumberAllowed, passwordGenerator]);

  return (
    <>
      <h1 style={{backgroundColor: color}}>Password Generator</h1>
      <input type="text" value={password} placeholder='Password' ref={passwordRef}  readOnly />
      <input type="range" min={10} max={80} value={length} onChange={(e)=> {setLength(e.target.value)}} />
      <input type="checkbox" name="" defaultChecked={isNumberAllowed} onChange={()=> { setIsNumberAllowed((prev)=> !prev) }} />
      <label>Is Number</label>
      <input type="checkbox" name="" defaultChecked={isCharaterAllowed} onChange={()=> { setIsCharacterAllowed((prev)=> !prev) }} />
      <label>Is Character</label>
      <input type="color" name="" onChange={(e)=>{ setColor(e.target.value) }} />
      <button type='button' onClick={copyPassword()}>Copy</button>
    </>
  )
}

export default App
