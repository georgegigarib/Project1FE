import './quote-box.style.css';
import { FaTwitter } from "react-icons/fa";

const Quotebox = ({quotes, getQuote}) => {
    
    var {quote, author} = quotes;
        return(
            <div id="wrapper">
            <div id="quote-box">
            <div id="text">
           "{quote}"
            </div>
            <div id="author">
            -{author}
            </div>
            <a title="Tweet this quote!" href={window.location =`twitter.com/intent/tweet?hashtags=quotes&text=${quote}`} id="tweet-quote" target="_top"><FaTwitter /></a>
            <button id="new-quote" onClick={getQuote}>New Quote</button>
          </div>
          </div>
    )
}

export default Quotebox;

