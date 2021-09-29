function RegistrationForm() {
  return(
    <div className="registration-form">
      <h1>Start your free trial</h1>
      <label>Company name</label>
      <input type="text"></input>
      <br/>
      <br/>
      <label>Your name</label>
      <input type="text"></input>
      <br/>
      <br/>
      <label>Work email</label>
      <input type="text" placeholder="you@company.com"></input>
      <br/>
      <br/>
      <label>Password</label>
      <input type="password"></input>
      <br/>
      <br/>
    </div>
  );
}

export default RegistrationForm;