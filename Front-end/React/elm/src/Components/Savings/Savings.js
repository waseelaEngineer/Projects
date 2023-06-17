import React, { useContext, useState } from 'react'
import CSS from './Savings.module.css'
import one from '../../images/one.png'
import logo from '../../images/smallLogo.png'
import three from '../../images/three.png'
import { UserContext } from '../../Contexts/UserContext'
import Texts from '../../Texts'

export default function Savings() {

  const { lang } = useContext(UserContext);
  const texts = Texts[lang];
  const [showForm, setShowForm] = useState(false)
  const [bankAccount, setShowAccount] = useState({
    type: "",
    name: "",
    number: "",
    ipan: "",
  });

  function save() {
    let formInputsCompleted = bankAccount.type !== "" && bankAccount.name !== "" && bankAccount.number !== "" && bankAccount.ipan !== "";
    if (formInputsCompleted) {
      window.scrollTo(0, 0)
      setShowForm(false)
    }
    else {
      alert("Please fill all fileds")
    }
  }

  function showBalance(price, type,) {
    return <div className={`${type === 'holdBalance' && CSS.center}`}>
      <div className={CSS.price}>
        <h1>{price}</h1>
        <p>{texts.sr}</p>
      </div>
      <h4>{texts[type]}</h4>
    </div>
  }

  function showTransaction(img, name, date, value) {
    return <div className={CSS.transaction}>
      <div className={CSS.imgDiv}>
        <img src={img} style={{ width: "45px" }} alt={"img"} />
        <div>
          <h4>{texts[name]}</h4>
          <p>{texts[date]}</p>
        </div>
      </div>
      <p style={name === 'transferToYou' ? { color: "red" } : { color: "#55ca31" }}>{value} {texts.sr}</p>
    </div>
  }

  function formInput(name, type) {
    return <div>
      <input placeholder={texts[name]} type={type === 'name' ?"text" :"number"} defaultValue={bankAccount[type]} onChange={(e) => { setShowAccount({ ...bankAccount, [type]: e.target.value }) }} />
      <label>{texts[name]}</label>
    </div>
  }

  return (
    <>
      {!showForm && (<>
        <p className={CSS.main}>{texts.main}/{texts.savings}</p>
        <h1 className={CSS.title}>{texts.savings}</h1>
        <h3 className={CSS.note}>{texts.transactionsEveryMonth}</h3>
        <div className={CSS.container}>
          <div className={CSS.priceContainer}>
            {showBalance('6450.00', 'totalBalance')}
            {showBalance('725.00', 'holdBalance')}
            {showBalance('3450.00', 'availableBalance')}
          </div>
          <div className={CSS.totalContainer}>
            <h4>{texts.totalTransactions}</h4>
            <div className={CSS.price}>
              <h4>6450.00</h4>
              <p style={{ fontSize: "10px" }}>{texts.sr}</p>
            </div>
          </div>
        </div>
        <div className={CSS.account}>
          {bankAccount.type === ""
            ? (<>
              <div>
                <h3>{texts.addBankAccount}</h3>
                <p>{texts.ifDontHaveAccount}</p>
              </div>
              <button onClick={() => { setShowForm(true) }}>{texts.add}</button>
            </>)
            : (
              <>
                <div>
                  <h3>{texts[bankAccount.type]} - {bankAccount.name}</h3>
                  <p>{texts.usuallyTakesTwoDays}</p>
                </div>
                <button onClick={() => { setShowForm(true) }}>{texts.edit}</button>
              </>
            )
          }
        </div>
        <h3 className={CSS.transactionTitle}>{texts.moneyTransactions}</h3>
        {showTransaction(logo, 'transferToYou', 'dateTwo', '- 5377.00')}
        {showTransaction(one, 'studentOneName', 'dateOne', '+ 377.00')}
        {showTransaction(three, 'studentThreeName', 'dateThree', '+ 95.00')}
      </>)}
      {showForm && (<>
        <p className={CSS.main}>{texts.main}/{texts.savings}</p>
        <h1 className={CSS.title}>{texts.savings}</h1>

        <div className={`${CSS.inputs} ${lang === 'en' && CSS.inputsEN}`}>
          <h2>{texts.addAccountToRecieveSalary}</h2>
          <div>
            <select defaultValue={bankAccount.type} onChange={(e) => { setShowAccount({ ...bankAccount, type: e.target.value }) }}>
              <option value="" disabled hidden>{texts.chooseBankName}</option>
              <option value="alahly">{texts.alahly}</option>
              <option value="alrajhy">{texts.alrajhy}</option>
              <option value="albalad">{texts.albalad}</option>
              <option value="alarabi">{texts.alarabi}</option>
            </select>
            <label>{texts.chooseBankName}</label>
          </div>
          {formInput('accountOwnerName', 'name')}
          {formInput('accountNumber', 'number')}
          {formInput('ipanNumber', 'ipan')}
        </div>
        <button className={CSS.save} onClick={save}>{texts.save}</button>
      </>)}
    </>
  )
}