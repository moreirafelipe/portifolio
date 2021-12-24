import { ReactComponent as ReactBootstrapSVG } from '../../assets/icons/react-bootstrap.svg';
import { ReactComponent as AwsSVG } from '../../assets/icons/aws.svg';
import { ReactComponent as DockerSVG } from '../../assets/icons/docker.svg';
import { ReactComponent as JenkinsSVG } from '../../assets/icons/jenkins.svg';
import { ReactComponent as JavaSVG } from '../../assets/icons/java.svg';
import { ReactComponent as SpringSVG } from '../../assets/icons/spring.svg';
import { ReactComponent as PythonSVG } from '../../assets/icons/python.svg';
import { ReactComponent as DjangoSVG } from '../../assets/icons/django.svg';
import { ReactComponent as JavascriptSVG } from '../../assets/icons/js.svg';
import { ReactComponent as NodeSVG } from '../../assets/icons/nodejs.svg';
import { ReactComponent as SassSVG } from '../../assets/icons/sass.svg';
import { ReactComponent as SqlServerSVG } from '../../assets/icons/sqlserver.svg';
import { ReactComponent as MySqlSVG } from '../../assets/icons/mysql.svg';
import { ReactComponent as MongoDbSVG } from '../../assets/icons/mongodb.svg';
import { ReactComponent as ReactSVG } from '../../assets/icons/react.svg';

import './styles.scss'

export function Habilities() {
  return (
    <div id="habilities" className="d-flex flex-column flex-wrap justify-content-center text-center align-content-center text-white bg-black mt-5 p-5">
      <h3 className="w-100 text-center mt-5">Hard Skills</h3>
      <p>There are some skills that I've been working with recently:</p>
      <div className="container-icons d-flex flex-wrap flex-row justify-content-around align-items-center py-3">
        <JavascriptSVG className="skillIcon" />
        <NodeSVG className="skillIcon" />
        <ReactSVG className="skillIcon" />
        <ReactBootstrapSVG className="skillIcon" />
        <SassSVG className="skillIcon" />
        <JavaSVG className="skillIcon" />
        <SpringSVG className="skillIcon" />
        <PythonSVG className="skillIcon" />
        <DjangoSVG className="skillIcon bg-light px-2" />
        <SqlServerSVG className="skillIcon" />
        <MySqlSVG className="skillIcon" />
        <MongoDbSVG className="skillIcon" />
        <DockerSVG className="skillIcon" />
        <JenkinsSVG className="skillIcon" />
        <AwsSVG className="skillIcon" />
      </div>
    </div>
  )
}