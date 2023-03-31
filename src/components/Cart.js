import './Section1.jsx';
var total=0;

function Cart() {
    return(
        <div className="cart">
            <h5>Your basket!</h5>
            <button onClick={amount}>DONE WITH MY PURCHASE</button>
            <section id='cartsection'>
            </section>
        </div>
    )
}

function amount () 
{
    const f = document.createElement("h4");
    const sec = document.getElementById('cartsection');
    f.append("Thank You!!");
    f.append("Your Total Order is Rs.",total);
    sec.append(f);
    console.log(total);
}

var adder = (x,y) => () =>
{
    var v = document.getElementById(x).value;
    console.log(v);
    console.log(y);
    var sec = document.getElementById('cartsection');
    const p = document.createElement("p");
    p.append(y," ",v);
    sec.append(p);
    total = parseInt(total) + parseInt(v);
    console.log(total);
}

export {Cart,adder};