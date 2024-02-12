import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

// import React, { useState } from 'react'

// export default function Textform(props) {
//   const handleUpClick = () => {
//     let newText = text.toUpperCase();
//     setText(newText)
//   }

//   const handleLoClick = () => {
//     let newText = text.toLocaleLowerCase();
//     setText(newText)
//   }

//   const handleonChange = (event) => {
//     setText(event.target.value);
//   }
//   const [text, setText] = useState('');

//   return (
//     <>
//       <div className="container">
//         <h1>{props.heading} </h1>
//         <div className="mb-3">
//           <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
//         </div>
//         <button className="btn btn-primary " onClick={handleUpClick}>Conver to uppercase</button>
//         <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to Lowercase</button>
//         <button className="btn btn-primary mx-2" onClick={() => setText(() => "")}>Clear </button>

//         <h2>
//           Text Summary
//         </h2>
//         <p>{text.split(" ").length} words and {text.length} characters. </p>
//         <p>{0.08 * text.split(" ").length} Mins to read.</p>
//         <h2>Preview </h2>
//         <p>{text} </p>
//       </div>

//     </>

//   )

// }
