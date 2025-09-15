import MovingRows from "./MovingRows"
import Roulette from "./Roulette"
import Media from "./Media"
import CABlock from "./CABlock";
import Decor from "./Decor";


function App() {



  return (
    <div className='App'>
      <div className='App_rows'>
        <MovingRows />
      </div>
      <Roulette />
      <div className='App_content'>
        <div className='App_text'>
          <Media />
          <div className='App_slogan_wrapper'>
            <div className='App_slogan'>
              FROM SILVER MEDAL TO GOLDEN EMPIRE - $USDWON
            </div>
          </div>
          <CABlock />
        </div>
        <div className='App_decor free_img'>
          <Decor />
        </div>
      </div>
    </div>
  )
}

export default App
