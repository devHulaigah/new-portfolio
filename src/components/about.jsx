import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";
import twitterX from "../assets/twitter-x.svg";
import envelope from "../assets/envelope.svg";

const myLinks = [
  {
    logo: gitHub,
    web: "https://github.com/devHulaigah",
  },

  {
    logo: twitterX,
    web: "https://x.com/devhulaigah",
  },

  {
    logo: linkedIn,
    web: "https://www.linkedin.com/in/ali-abu-hulaigah-76327232",
  },
  {
    logo: envelope,
    web: "mailto:alitbhjob@gmail.com",
  },
];
export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white p-2 text-center">
        <div>
          <img
            src="https://www.pngplay.com/wp-content/uploads/13/Programmer-Transparent-PNG.png"
            alt="image didn't load properly"
            className="w-40 h-40"
          />
        </div>
        {/* parent of paragraph description */}
        <div className="max-w-auto text-center">
          <div className="p-4">
            Hello! My name is{" "}
            <span className="font-bold underline text-orange-400">Ali</span> I'm
            an aspiring web developer looking to become{" "}
            <span className="font-bold text-orange-400">full stack!</span> Feel
            free to look at my projects
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="text-orange-400 font-bold">
            feel free to contact me:
          </div>
          <div className="flex flex-row gap-2">
            {myLinks.map((i, kIndex) => {
              return (
                <a
                  className="bg-white border-2 rounded-sm"
                  href={i.web}
                  key={kIndex}
                >
                  <img className="" src={i.logo}></img>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
