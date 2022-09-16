import "./App.css";
import Typewriter from "typewriter-effect";
import SideImage from "./5429481(1).png";
import Logo from "./MyLogoHeader.png"

function App() {
  return (
    <div className="pt-2">
      <div className="d-flex wizz">
        <div className="container ">
          <div className="row align-items-end">
            <div className="col-lg-6 text-light">
              <div className="myImg">
                <img
                  src={Logo}
                  alt=""
                  className="img-fluid w-25 pb-5"
                />
              </div>
              <h6 className="fs-4 fw-normal pb-3">
                Prepare for the best NFT based <br /> Cryptocurrency powered by
                :
              </h6>
              <h5 className="text-uppercase fs-4 fw-normal pb-3">
                WIZZ nft node
              </h5>
              <h6 className="fs-4 fw-normal pb-5 h-25">
                Keep checking for the biggest Announcement
              </h6>
              
              <h1 className="text-uppercase">
                <Typewriter
                  options={{
                    strings: ['We are coming soon . . .'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <div className="col-lg-6">
              <img src={SideImage} alt="" className=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
