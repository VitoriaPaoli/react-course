
import "./App.css"

import Banner from "./components/Banner"

import Coisa1 from "./assets/images/svg/camera-svgrepo-com.svg"
import Coisa2 from "./assets/images/svg/gift-svgrepo-com.svg"
import Coisa3 from "./assets/images/svg/location-svgrepo-com.svg"
import Coisa4 from "./assets/images/svg/savings-svgrepo-com.svg"
import Coisa5 from "./assets/images/svg/shopping-svgrepo-com.svg"
import Coisa6 from "./assets/images/svg/weather-svgrepo-com.svg"


function App() {
  return (
    <body>

        <div className="card">
          <h1>React Course </h1>
          <p> Front-End Javascript</p>
        </div>

      <Banner title="titulo" description="descrição" image={Coisa1} />
      <Banner title="titulo" description="descrição" image={Coisa2} />
      <Banner title="titulo" description="descrição" image={Coisa3} />
      <Banner title="titulo" description="descrição" image={Coisa4} />
      <Banner title="titulo" description="descrição" image={Coisa5} />
      <Banner title="titulo" description="descrição" image={Coisa6} />
      
    
      </body>
    
  );
}

export default App;
