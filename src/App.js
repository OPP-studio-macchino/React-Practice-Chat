import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

function App() {

  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
		<div className="App">
			<ChatEngine
				height="100vh"
				projectID="
                  f1f48d26-142b-4cf7-9758-43af97dbc1c6
                "
        userName='macchino'
        userSecret ='iminashI1374!!'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={ () => new Audio('https://chat-engine-assets.s3.amazon.com/click.mp3').play}
			/>
		</div>
	);
}

export default App;
