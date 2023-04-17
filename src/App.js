
import { useState } from 'react';
import './App.css';

function App() {

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    zip:"",
    comments:false,
    candidates:false,
    offer:false,
    pushNotification:""


  })

  function changeHandler(event){
    const {name, value, checked,type} = event.target

    setFormData( (prev) => ({
      ...prev,
      [name] : type === "checked" ?  checked : value
    }))
  }


  function submitHandler(event){
    event.preventDefault();

    
    console.log("printing the value")
    console.log(formData)


  }

  return (
    <div className='App'>

      <form action="" onSubmit={submitHandler}>

        
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
        type="text"
        name = "firstName"
        id='firstName'
        placeholder='Aarish'
        value={formData.firstName}
        onChange={changeHandler} 
        
        />

        <br />
        <label htmlFor="lastName">lastName</label>
        <br />
        <input
        type="text"
        name = "lastName"
        id='lastName'
        placeholder='Faiz'
        value={formData.lastName}
        onChange={changeHandler} 
        
        />

        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
        type="text"
        name = "email"
        id='email'
        placeholder='aarishfaiz456@gmail.com'
        value={formData.email}
        onChange={changeHandler} 
        
        />

        <br />
        <label htmlFor="country">Country</label> 
        <br />
        <select
        id='country'
        name='country'
        onChange={changeHandler}
        value={formData.country}
        className='outline'
        >
        
          <option value="">India</option>
          <option value="">US</option>
          <option value="">Canada</option>
          <option value="">Mexio</option>
          
        </select>    

        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
        type="text"
        name = "streetAddress"
        id='streetAddress'
        placeholder='1234 Main SI'
        value={formData.streetAddress}
        onChange={changeHandler} 
        
        />

        <br />

        <label htmlFor="city">City</label>
        <br />
        <input
        type="text"
        name = "city"
        id='city'
        placeholder='Asansol'
        value={formData.city}
        onChange={changeHandler} 
        
        />

        <br />

        <label htmlFor="state">State</label>
        <br />
        <input
        type="text"
        name = "state"
        id='state'
        placeholder='Chhittisghar'
        value={formData.state}
        onChange={changeHandler} 
        
        />


        <br />

        <label htmlFor="state">State</label>
        <br />
        <input
        type="text"
        name = "state"
        id='state'
        placeholder='Chhittisghar'
        value={formData.state}
        onChange={changeHandler} 
        
        />


        <br />

        <label htmlFor="zip">Zip</label>
        <br />
        <input
        type="text"
        name = "zip"
        id='zip'
        placeholder='497001'
        value={formData.zip}
        onChange={changeHandler} 
        
        />

        <br />
        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>


          <div className='comments'>

          <input
          id='comments'
          name='comments'
          type='checkbox'
          checked={formData.comments}
          onChange={changeHandler}
          />

          <div>

          <label htmlFor="comments">Comments</label>
          <p>Get notify when someone posts a comment on posting</p>

          </div>

          </div>

          <div className='comments'>

          <input
          id='candidates'
          name='candidates'
          type='checkbox'
          checked={formData.candidates}
          onChange={changeHandler}
          />

          <div>

          <label htmlFor="candidates">Candidates</label>
          <p>Get notify when candidates apply for a job</p>

          </div>

          </div>


          <div className='comments'>

          <input
          id='offer'
          name='offer'
          type='checkbox'
          checked={formData.offer}
          onChange={changeHandler}
          />

          <div>

          <label htmlFor="offer">Offers</label>
          <p>Get notify when candidates accept or reject a offer</p>

          </div>

          </div> 

        </fieldset>

        <br />
        <br />
        <br />

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via sms in you mobile phone</p>
         
          <input 
          type="radio"
          id='pushEverything'
          name='pushNotification'
          value="everyThing"
          onChange={changeHandler}

          
           />

           <label htmlFor="pushEverything">EveryThing</label>

           <br />


           <input 
          type="radio"
          id='pushEmail'
          name='pushNotification'
          value="same as email"
          onChange={changeHandler}

          
           />

           <label htmlFor="pushEverything">Same as email</label>


           <br />


           <input 
          type="radio"
          id='pushNothing'
          name='pushNotification'
          value="no push notification"
          onChange={changeHandler}

          
           />

           <label htmlFor="pushNothing">No Push Notification</label>


        </fieldset>

        <button className='btn'>
          Save
        </button>


        

        
        


      </form>

      

    </div>
  );
}

export default App;
