import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='mainApp'>
				<Container />
			</div>
		</div>
	);
}

export default App;
