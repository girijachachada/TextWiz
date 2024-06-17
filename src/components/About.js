import React, { useState,useEffect } from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
      });
    
      useEffect(() => {
        if (props.mode === "dark") {
          setMyStyle({
            color: 'white',
            backgroundColor: 'rgb(33, 37, 41)'
          });
        } else {
          setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          });
        }
      }, [props.mode]);

    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1 px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    return (
        <div className='container'>
            <h1 className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           <strong>What is TextWiz?</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextWiz is a utility that can manipulate your text in different ways.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>What features do we provide?</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>We provide features like text conversion, text summarization,text enhancing and many more.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Is it free to use?</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextWiz is absolutely free to use.</div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
            <button type='button' onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button>
            </div> */}
        </div>
    )
}
