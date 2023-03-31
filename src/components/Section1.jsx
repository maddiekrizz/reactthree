import {adder} from './Cart.js';

function Section1() {
    return(
        <div className="secdisplay">
            <ul>
                <h4>WOMEN</h4>
                <ul>
                    Western Wear
                    <button id="addb1" value={1500} onClick={adder("addb1","ux-western")}>Add</button>
                </ul>
                <ul>
                    Ethnic collections
                    <button id="addb2" value={4000} onClick={adder("addb2","ua-ethnic")}>Add</button> 
                </ul>
                <ul>
                    Summer wear
                    <button id="addb3" value={800} onClick={adder("addb3","us-summer")}>Add</button> 
                </ul>
            </ul>
            <ul>
                <h4>MEN</h4>
                <ul>
                    Casuals
                    <button id="addb4" value={2000} onClick={adder("addb4"," au-casuals")}>Add</button> 
                </ul>
                <ul>
                    Suit
                    <button id="addb5" value={6000} onClick={adder("addb5","aw-suits")}>Add</button> 
                </ul>
                <ul>
                    Trousers 
                    <button id="addb6" value={1200} onClick={adder("addb6"," at-trousers")}>Add</button> 
                </ul>
            </ul>
            <ul>
                <h4>CHILDREN</h4>
                <ul>
                    Toys 
                    <button id="addb7" value={500} onClick={adder("addb7","hu-toys ")}>Add</button> 
                </ul>
                <ul>
                    homlings
                    <button id="addb8" value={1100} onClick={adder("addb8","ut-@home")}>Add</button> 
                </ul>
                <ul>
                    footwear
                    <button id="addb9" value={400} onClick={adder("addb9","fw=footwear")}>Add</button> 
                </ul>
            </ul>
        </div>
    )
}


export default Section1;