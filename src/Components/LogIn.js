import React, {useState} from 'react'
import "../Stylesheet/LogIn.css"

export default function LogIn() {
    const [text, setText] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        setText(!text);
    }


    return (
        <>

           <div className="container">
               <div className="header">
                    <img src="data:image/png;base64,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" alt="logo"/>
                    <h3 className="aç">Hemen Katıl</h3>
                    <h3 className="katıl">Oturum aç</h3>
               </div>
               <div className="main">
                   <div className="left">
                   <h5>Profesyonel <br/>topluluğunuza hoş <br/>geldiniz!</h5>
                   <div className="inputs">
                       <input type="mail" name="mail" placeholder="E-posta veya telefon numarası" className="pad"/>
                       <input type={passwordShown ? "text" : "password"} name="pass" placeholder="Şifre" className='cont-pass'/>
                        <button className="pass" onClick={togglePassword}>{text ? "Göster" : "Gizle"}</button>
                       <h6 className="forgot">Şifrenizi mi unuttunuz?</h6>
                   </div>
                   <button className="oturum">Oturum açın</button>
                   </div>
                   <div className="right">
                       <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"/>
                   </div>
               </div>
           </div>
        </>
    )
}