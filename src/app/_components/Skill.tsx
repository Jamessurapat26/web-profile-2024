import {
  faDocker,
  faJava,
  faJs,
  faPython,
  faReact,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faGolang} className="h-10" />
          <p>Go</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDocker} className="h-10" />
          <p>Docker</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
