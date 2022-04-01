import Logo from "../../Assets/Logo.png";
import Hp from "../../Assets/hape.png";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="conten-home">
          <div className="container-logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="container-info">
            <div className="conten-info">
              <h1>Get anything from everywhere</h1>
              <p>
                Selamat datang di Jamping, tentang dunia travelling, kuliner,
                dan JASTIP. Tungguin LIVE Instagram kami, intip barang-barang
                gemes dari luar negeri.
              </p>
            </div>
            <div className="container-image-hp">
              <img src={Hp} alt="hp" className="image-hp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
