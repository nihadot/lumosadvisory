import { home, landingPageLogo } from "../assets/images";

function Home() {
    return (
      <>
        <div id="home-mobile" className=" flex sm:hidden w-full items-center justify-center pt-24">
          <div className="max-w-[200px]  w-full flex h-[300px]">
            <div className="bg-black  w-[4px] h-[50%]"></div>
            <img
              className=" w-[96%] block  object-cover h-full"
              src={home}
              alt="Loading..."
            />
          </div>
        </div>
  
        <div
          id="home"
          className="flex -mt-5 sm:mt-0  w-full h-fit pb-10 sm:pb-0 max-h-fit sm:min-h-[100vh]  "
        >
          <div className="flex flex-1 flex-col sm:flex-row">
            <div className="flex-1 pb-[3vh] sm:pt-[10vh] pt-0  sm:ps-[5.333vh] ps-1 pe-[0.889vh] ">
              <img
                className=" sm:block hidden sm:max-w-[44.444vh] max-w-[260px] w-full mx-auto px-[6vh] pt-[6vh] pb-[3vh]  sm:p-[7.111vh]"
                src={landingPageLogo}
                alt=""
              />
              <div className="max-w-[58.999vh]  w-full p-[2.222vh] mx-auto text-justify">
                <h1 className="sm:text-start pt-[6vh] text-center">
                  Welcome to Lumos Advisory
                </h1>
                <p>
                  Lumos Advisory has been established by a seasoned and
                  experienced team to be a trusted partner for Small and Medium
                  Enterprises (SMEs) in the United Arab Emirates (UAE) as they
                  circumnavigate the dynamic challenges and uncertainties of
                  tomorrow.
                </p>
                <p>
                  From early-stage ventures seeking strategic direction to
                  established businesses pursuing performance improvement and
                  scalability, our advisory offers bespoke solutions addressing
                  the specific needs of every prospective client.
                </p>
                <p>
                  We are proud to help SME owners and stakeholders make informed
                  decisions, manage business risks, and add value at every stage.
                </p>
              </div>
            </div>
  
            <div className="sm:flex hidden  max-w-[40vw]  justify-end w-full">
              <div className="bg-black sm:block hidden w-[0.700vh] h-[50%]"></div>
              <img
                className="h-screen  w-full max-w-[39.700vw] object-cover max-h-[100vh]"
                src={home}
                alt="Loading..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Home