import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header";
import { AppRoutes } from "./routes";

// Toastify CSS
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
			<ToastContainer autoClose={3000} />
			<Header />
      <AppRoutes />
    </div>
  )
}

export default App
