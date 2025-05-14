import React from "react";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", country:"", street:"", city:"", state:"", zip:"", comments:false, candidates:false, offers:false, push1:""});

  console.log(formData);

  function changeHandler(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally Printing the entire data of filled form...");
    console.log(formData);
  }

  return (
    <div className="App lg:flex justify-center items-center mb-5">
      <form onSubmit={submitHandler} className="border-r-2 border-l-2 pl-5 pr-5">

        <p className='mt-5 mb-2'>First Name</p> 
        <input className="border border-slate-400 rounded-md px-2 lg:pr-[400px] md:pr-[400px] sm:pr-[40px] mb-2"
          type="text"
          placeholder="Enter your first name"
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />

        <p className='mb-2'>Last Name</p>
        <input className="border border-slate-400 rounded-md px-2 lg:pr-[400px] md:pr-[400px] sm:pr-[40px] mb-2"
          type="text"
          placeholder="Enter your last name"
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <p className='mb-2'>Email Address</p>
        <input className="border border-slate-400 rounded-md px-2 lg:pr-[400px] md:pr-[400px] sm:pr-[40px] mb-2"
          type="text"
          placeholder="Enter your email"
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <p className='mb-2'>Country</p>
        <select className="border border-slate-400 rounded-md px-2 lg:pr-[473.5px] md:pr-[60px] sm:pr-[47px] mb-2"
          id='country'
          onChange={changeHandler}
          name='country'
          value={formData.country}
        >
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
        <option value="newzealand">NewZealand</option>
        <option value="russia">Russia</option>
        </select>

        <p className='mb-2'>Street Address</p>
        <input className="border border-slate-400 rounded-md px-2 lg:pr-[400px] md:pr-[400px] sm:pr-[40px] mb-2"
          type="text"
          placeholder="Enter your name"
          onChange={changeHandler}
          name='street'
          value={formData.street}
        />

        <p className='mb-2'>City</p>
        <input className="border border-slate-400 rounded-md px-2 lg:pr-[400px] md:pr-[400px] sm:pr-[40px] mb-2"
          type="text"
          placeholder="Enter your city"
          onChange={changeHandler}
          name='city'
          value={formData.city}
        />

        <p className='mb-2'>State / Province</p>
        <input className="border border-slate-400 rounded-md px-2 lg:pr-[400px] md:pr-[400px] sm:pr-[40px] mb-2"
          type="text"
          placeholder="Enter your state/province"
          onChange={changeHandler}
          name='state'
          value={formData.state}
        />

        <p className='mb-2'>ZIP / Postal Code</p>
        <input className="border border-slate-400 rounded-md px-2 lg:pr-[400px] md:pr-[400px] sm:pr-[40px] mb-4"
          type="text"
          placeholder="Enter your ZIP"
          onChange={changeHandler}
          name='zip'
          value={formData.zip}
        />

        <p className="font-bold mb-2">By Email</p>
        <input
          type='checkbox'
          onChange={changeHandler}
          name='comments'
          id='byemail'
          checked={formData.comments}
        />
        <label htmlFor='byemail' className="font-semibold"> Comments</label>
        <p className="ml-[18px] text-sm text-slate-600">Get notified when someones posts a comment on a posting.</p>
        <br></br>

        <input
          type='checkbox'
          onChange={changeHandler}
          name='candidates'
          id='candidates'
          checked={formData.candidates}
        />
        <label htmlFor='candidates' className="font-semibold"> Candidates</label>
        <p className="ml-[18px] text-sm text-slate-600">Get notified when a candidate applies for a job.</p>
        <br></br>

        <input
          type='checkbox'
          onChange={changeHandler}
          name='offers'
          id='offers'
          checked={formData.offers}
        />
        <label htmlFor='offers' className="font-semibold"> Offers</label>
        <p className="ml-[18px] text-sm text-slate-600">Get notified when a candidate accepts or rejects an offer.</p>
        <br></br>

        <div className="mb-4">
          <p className="font-bold">Push Notifications</p>
          <p className="text-sm text-slate-600">These are delivered via SMS to your mobile phone.</p>
        </div>

        <input className="mb-4"
          type='radio'
          onChange={changeHandler}
          name='push1'
          value="Everything"
          id='mode1'
          checked={formData.push1 === "Everything"}
        />
        <label htmlFor='mode1' className="font-semibold"> Everything</label><br></br>

        <input className="mb-4"
          type='radio'
          onChange={changeHandler}
          name='push1'
          value="Same as email"
          id='mode2'
          checked={formData.push1 === "Same as email"}
        />
        <label htmlFor='mode2' className="font-semibold"> Same as email</label> <br></br>

        <input className="mb-4"
          type='radio'
          onChange={changeHandler}
          name='push1'
          value="No push notifications"
          id='mode3'
          checked={formData.push1 === "No push notifications"}
        />
        <label htmlFor='mode3' className="font-semibold"> No push notifications</label> <br></br>

        <button className="border bg-blue-600 p-1 px-4 rounded-md text-white py-2">Save</button>

      </form>
    </div>
  );
}

export default App;
