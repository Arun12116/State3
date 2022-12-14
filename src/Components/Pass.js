import React, { useState } from 'react'

const Pass = ({ ...data }) => {

    // console.log(data);

    const [password, setPassword] = useState(" ")
    // console.log(password);
    const [length, setLenth] = useState(20)
    const [includeNumber, setIncludeNumber] = useState(false)
    const [includeUpperCase, setIncludeUpperCase] = useState(false)
    const [includeLowerCase, setIncludeLowerCase] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    const changehandler = _ => {
        let charlist = "";
        if (includeNumber) {
            charlist = charlist + data.number
        }
        if (includeUpperCase) {
            charlist = charlist + data.uppercase
        }
        if (includeLowerCase) {
            charlist = charlist + data.lowercase
        }
        if (includeSymbols) {
            charlist = charlist + data.symbols
        }
        setPassword(createpassword(charlist))
    }

    const createpassword = (charlist) => {
        let password = "";
        const charlistlength = charlist.length;
        for (var i = 0; i < length; i++) {
            const charIndex = Math.round(Math.random() * charlistlength)
            password = password + charlist.charAt(charIndex)
        }
        return password;

    }

    return (
        <>
            <div className="main">
            {/* <h1>{password}</h1> */}
                <div className="container">
                    <h1>Password Generator</h1>
                    <input type="text" className='text'value={password}  />
                    <div className="select">
                        <span>Select password length</span>
                        <input type="number" name='length' min="10" max="20 "
                        defaultValue={length}
                            onChange={(e) => setLenth(e.target.value)}
                        />
                    </div>

                    <div className="check-Box">
                        <input type="checkbox" name="includeUppercaseLetter" id="" checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} />
                        <span>include uppercase letter</span>
                        <br />
                        <input type="checkbox" name="includeLowercaseLetter" id="" checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} />
                        <span>include lowercase letter</span>
                        <br />
                        <input type="checkbox" name="include number" id="" checked={includeNumber} onChange={(e) => setIncludeNumber(e.target.checked)} />
                        <span>include number</span>
                        <br />
                        <input type="checkbox" name="include symbols" id="" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
                        <span>include symbols</span>
                        <br />
                    </div>
                    <div className="btn">
                        <button onClick={changehandler}>Generate Password</button>
                    </div>

                </div>
                

            </div>

        </>
    )
}

export default Pass