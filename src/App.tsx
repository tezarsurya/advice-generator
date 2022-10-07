import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { adviceState } from "./recoil/atoms";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";

function App() {
  const [{ advice, id }, setAdvice] = useRecoilState(adviceState);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchAdvice = () => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
      })
      .catch((e) => {
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const initAdvice = () => {
    const storedAdvice = localStorage.getItem("currentAdvice");

    storedAdvice ? setAdvice(JSON.parse(storedAdvice)) : fetchAdvice();
  };

  useEffect(() => {
    initAdvice();
  }, []);

  return (
    <div className="App relative flex h-screen w-full flex-col items-center justify-center bg-dark_blue px-4 font-bold">
      <div className="relative flex max-w-[343px] flex-col items-center justify-center space-y-6 rounded-2xl bg-dark_grayish_blue p-6 py-10 transition-all duration-300 ease-in-out md:max-w-[492px] md:p-10 md:px-8">
        {notFound ? (
          <p className="text-center text-cyan">
            Can't fetch you an advice right now, please try again later🙏
          </p>
        ) : (
          <>
            {loading ? (
              <p className="text-center text-cyan">Loading advice...</p>
            ) : (
              <>
                <span className="text-center text-xs tracking-[.25em] text-neon_green">{`ADVICE #${
                  id !== 0 ? id : ""
                }`}</span>

                <p className="text-center text-lg text-cyan ">
                  <span className="mr-[.1em] font-light">&#10077;</span>
                  {`${advice}`}
                  <span className="ml-[.1em] font-light">&#10078;</span>
                </p>
              </>
            )}

            <img
              src={window.screen.width >= 768 ? dividerDesktop : dividerMobile}
              alt="divider"
            />
            <span className="h-0 w-full"></span>

            <button
              type="button"
              onClick={fetchAdvice}
              className="absolute -bottom-8 grid place-items-center rounded-full bg-neon_green p-5 transition-all duration-300 ease-in-out hover:shadow-[0_0_24px_2px_hsl(150,100%,66%)] hover:shadow-neon_green"
            >
              <img src={dice} alt="dice icon" />
            </button>
          </>
        )}
      </div>
      <div className="absolute bottom-6 text-xs text-cyan md:text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
          target="_blank"
          className="underline hover:text-neon_green"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="underline hover:text-neon_green"
          href="https://github.com/tezarsurya"
        >
          tezarsurya
        </a>
        .
      </div>
    </div>
  );
}

export default App;
