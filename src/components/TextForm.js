import React,{useState} from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick=()=>{
        setText("You Have Clicked on Upper Case Button")
        let newtxt=text.toUpperCase();
        setText(newtxt);
    }
    const HandleOnChange=(event)=>{
       setText(event.target.value)
       console.log(event.target.value)
    }
    const ClearText=()=>{
        setText("")
    }
    const ConvertToJSX=()=>{
      let converted=text.replace(/class=/g,'className');  
      setText(converted);
    }
    const [text, setText]=useState('Express Yourself Here');
  return (
    <>
  <div className="mb-3" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#6c757d'}} >
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address 
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      style={{backgroundColor:props.mode==='light'?'white':'#6c757d'}}
      
    />
  </div>
  <div className="Container" style={{color:props.mode==='light'?'black':'white'}}>
  
  <h4>{props.heading} </h4>
  
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
    
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={7}
      defaultValue={""}
      value={text}
      onChange={HandleOnChange} //Onchange is Important Should be used Always
      style={{backgroundColor:props.mode==='light'?'white':'#6c757d',
      color: props.mode==='light'?'black  ':'white'
  }
    }

    />
  </div>
  
  <button className="btn btn-outline-primary " onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-outline-primary mx-3" onClick={ClearText}>Clear Text</button>
  <button className="btn btn-outline-primary mx-3" onClick={ConvertToJSX}>Convert</button>
  {/* <button type="button" class="btn btn-info">Info</button> */}
    <div className="Conainer my-2">
        <h1>YourText Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{text.split(" ").length*0.004} Minnutes to reed </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Text First"}</p>
    </div>
    </div>

</>

  )
}

propTypes.propTypes={
    heading:propTypes.string.isRequired
};
