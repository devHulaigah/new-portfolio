import jsIcon from "../../public/js.svg";
import reactIcon from "../../public/react.svg";
import cssIcon from "../../public/css.svg";
import htmlIcon from "../../public/html.svg";
import javaIcon from "../../public/java.svg";
import typescriptIcon from "../../public/typescript.svg";

export default function Lang() {
  return (
    <>
      <div className="grid p-2 grid-rows-5 grid-cols-3  gap-2 justify-self-center place-items-center">
        <div className="grid justify-auto place-self-auto">
          <a target="_blank" className="" href="https://www.javascript.com/">
            <img
              src={jsIcon}
              alt="Language Logo"
              className="w-32 h-32 border-2 rounded-2xl transform transition-transform duration-200 hover:scale-110"
            />
          </a>
        </div>

        <div className="grid justify-auto place-self-auto">
          <a target="_blank" className=" " href="https://react.dev/">
            <img
              src={reactIcon}
              alt="Language Logo"
              className="w-32 h-32 border-2 rounded-2xl transform transition-transform duration-200 hover:scale-110"
            />
          </a>
        </div>

        <div className="grid place-self-auto">
          <a target="_blank" className="" href="https://www.w3schools.com/css/">
            <img
              src={cssIcon}
              alt="Language Logo"
              className="w-32 h-32  transform transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        <div className="grid place-self-auto">
          <a target="_blank" className="" href="https://www.w3schools.com/css/">
            <img
              src={htmlIcon}
              alt="Language Logo"
              className="w-32 h-32  transform transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        <div className="grid  place-self-auto">
          <a target="_blank" className="" href="https://www.w3schools.com/css/">
            <img
              src={javaIcon}
              alt="Language Logo"
              className="w-32 h-32  transform transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        <div className="grid justify-auto place-self-auto">
          <a target="_blank" className="" href="https://www.w3schools.com/css/">
            <img
              src={typescriptIcon}
              alt="Language Logo"
              className="w-32 h-32 border-2 rounded-2xl transform transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </>
  );
}
