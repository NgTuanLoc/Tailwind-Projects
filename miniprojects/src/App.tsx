import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { EmailSubscribe } from './pages';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/email-subscribe' element=<EmailSubscribe /> />
			</Routes>
		</Router>
	);
}

export default App;
