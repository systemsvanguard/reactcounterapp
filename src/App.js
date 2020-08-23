import React from 'react';
import TheCount from './app/images/TheCount.jpg';
// import { yieldExpression } from '@babel/types';


function App() {
	const initialState = 17;
	const [ counter, setCount] = React.useState(initialState);

	const addOne = ()=> {
		setCount(counter => counter + 1 );
		console.log(`Add one to the Counter, for a result of ${counter} .`);
	}
	const addFive = ()=> {
		setCount(counter => counter + 5 );
		console.log(`Adds five to the Counter, for a result of ${counter} .`);
	}
	const minusOne = ()=> {
		setCount(counter => counter - 1 );
		console.log(`Subtracts one from the Counter, for a result of ${counter} .`);
	}
	const minusThree = ()=> {
		setCount(counter => counter - 3 );
		console.log(`Subtracts three from the Counter, for a result of ${counter} .`);
	}
	const resetCount = ()=> {
		setCount(initialState );
		console.log(`Clears state and starts over, for a result of ${counter} .`);
	}
	const timesTwo = ()=> {
		setCount(counter => counter * 2 );
		console.log(`Multiplies the number by Two, for a result of ${counter} .`);
	}




  return (
    <div className="App">

      <section className="section">
          <div className="container">
            <h1 className="title has-text-link has-text-centered">React Counter App with Hooks</h1>
            <p className="subtitle has-text-danger-dark has-text-weight-bold has-text-centered">Our Counter is now : <span className="is-italic is-size-3 has-text-danger">{counter}</span>. </p>

						<p className="has-text-centered">
							<button className="button is-danger is-outlined" onClick={minusThree}>
							<span className="icon is-small"><i className="fas fa-minus"></i></span>
							<span> Minus 3 </span>
							</button>
							<button className="button is-danger" onClick={minusOne}>
							<span className="icon is-small"><i className="fas fa-minus"></i></span>
							<span> Minus 1 </span>
							</button>

							<button className="button is-link is-medium is-inverted" onClick={resetCount}>
							<span className="icon is-small"><i className="fas fa-redo"></i></span>
							<span> Reset </span>
							</button>

							<button className="button is-link" onClick={addOne}>
							<span className="icon is-small"><i className="fas fa-plus"></i></span>
							<span> Add 1 </span>
							</button>
							<button className="button is-link is-outlined" onClick={addFive}>
							<span className="icon is-small"><i className="fas fa-plus"></i></span>
							<span> Add 5 </span>
							</button>
							<button className="button is-success" onClick={timesTwo}>
							<span className="icon is-small"><i className="fas fa-times"></i></span>
							<span> Times 2 </span>
							</button>
						</p>
						<br />
            <img src={TheCount} className="responsiveImages" alt="The Count Demonstrates Counting" title="The Count Demonstrates Counting" />
          </div>
      </section>
    </div>
  );
}

export default App;
