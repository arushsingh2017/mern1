import React, { useState } from 'react'
import HashTag from './HashTag'
import CheckBoxList from './CheckBoxList'
import Test from './login/Test'

export default function CreatePost() {

  const [optionval, setOptionval] = useState('banana')
  const [selectedVal, setSelectedVal] = useState("red");
  // console.log(selectedVal)

  // console.log(optionval)
  // alert(`You are select ${optionval}`)

  const [checkboxes, setCheckboxes] = useState(['']);
  const [selectedValues, setSelectedValues] = useState('');

  const handleRadioChange = (value) => {
    setSelectedVal(value);
  };

  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedValues(checkboxes.join(','));
  };


  const toppings = [
    {
      name: "capsicu",
      price: '$1.20'
    },
    {
      name: "Paneer",
      price: '$2.00'
    },
    {
      name: "Onions",
      price: '$3.00'
    },
    {
      name: "Mushoom",
      price: '$3.50'
    },
  ]

  const optItem = ['banana', 'apple', 'grap', 'orange', 'gava',]

  const [title, setTitle] = useState()
  const [dis, setDis] = useState()
  const [tag, setTag] = useState()
  const [comment, setComment] = useState("")
  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
    // console.log(e)
  }


  function handlsave() {
    let alldata = { title, dis, tag, comment, selectedVal }
    // console.log(alldata)

    fetch('http://localhost:3000/socialpost',
    {
     method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(alldata)
    }).then((resp)=>{
     resp.json().then((result)=>{
         console.warn(result)
     })

    })




  }
  return (
    <div>


     <Test/>

      <select onChange={(e) => setOptionval(e.target.value)}>
        {
          optItem.map(frutename => {
            return (
              <>
                <option value={frutename}>{frutename}</option>
              </>
            )
          })
        }

        {/* if(setOptionval ? === "banana") <h2>Hi banana</h2> : <h2>hi</h2> */}

        {/* <option value="One">One</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option> */}
      </select>
      <h6>select your frute name
        {
          optionval === "banana" ? <h2>manish</h2> : optionval === "apple" ? <h2>Deepak</h2>
            : optionval === "grap" ? <h2>Sandeep</h2> : <h2>Sorry</h2>
        }
      </h6>

      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" value="Google" onChange={(e) => handleCheckboxChange(e.target.value, e.target.checked)} />
          Google
        </label>
        <label>
          <input type="checkbox" value="Microsoft" onChange={(e) => handleCheckboxChange(e.target.value, e.target.checked)} />
          Microsoft
        </label>
        <label>
          <input type="checkbox" value="Meta" onChange={(e) => handleCheckboxChange(e.target.value, e.target.checked)} />
          Meta
        </label>
        <button type="submit">Submit</button>
      </form>
      {selectedValues && <p>Selected values: {selectedValues}</p>}
      <p>list here</p>
      {/* {
        toppings.map(items=>{ return(<p>man</p>)})
       } */}
      <CheckBoxList itemname={toppings} />
      <div className='row pt-5' >
        <div className='col-lg-7 offset-2'>
          <form>
            <input type='text' placeholder='Enter Post Title' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className='pt-4'></div>
            <textarea class="form-control" placeholder='Post Description' value={dis} onChange={(e) => setDis(e.target.value)} rows="6" />
            <div className='pt-4'></div>
            <div className='col-lg-12'>
              <input type='text' placeholder='Enetr Hash TAG' className='form-control' value={tag} onChange={(e) => setTag(e.target.value)} />
            </div>

            <div className='pt-4'></div>
            <input type="checkbox" onChange={handleChange} /> <span>You Want to Add Hash Tag</span>
            {checked ? (<input type='text' onChange={(e) => setComment(e.target.value)} placeholder='Entre Comment you want to add' />

            ) : (
              <div> </div>
            )}


            <input type='radio' name='r' value="red" checked={selectedVal === "red"}
              onChange={() => handleRadioChange("red")} /> Red
            <input type='radio' name='r' value="green" checked={selectedVal === "green"} onChange={() => handleRadioChange("green")} /> Green
            <input type='radio' name='r' value="blue" checked={selectedVal === "blue"} onChange={() => handleRadioChange("blue")} /> Blue

            <br />

            <div className='pt-4'></div>
            <button type='button' className='btn btn-primary' onClick={handlsave}>Create Post</button>
          </form>
        </div>



      </div>

    </div>
  )
}
