

import './App.css'
import { getPost } from './api/PostApi';
import { Posts } from './components/Posts';



const App = () => {
  return(
  <section className="main-section">
  <Posts/>
  </section>





  ) 
}

export default App;
