import { ReactComponent as BootstrapSVG } from '../../assets/icons/bootstrap_skill.svg';
import { ReactComponent as CSVG } from '../../assets/icons/c.svg';
import { ReactComponent as CPlusSVG } from '../../assets/icons/cplus.svg';
import { ReactComponent as CSharpSVG } from '../../assets/icons/cSharp.svg';
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
    <div id="habilities" className="d-flex flex-column flex-wrap justify-content-center text-center align-content-center text-dark bg-white mt-5 p-5">
      <h3 className="w-100 text-center mt-5">Habilities</h3>
      <p>There are some skills that I've been worked with recently:</p>
      <div className="container-icons d-flex flex-wrap flex-row justify-content-around align-items-center py-3">
        <BootstrapSVG className="skillIcon" />
        <ReactSVG className="skillIcon" />
        <SassSVG className="skillIcon" />
        <CSVG className="skillIcon" />
        <CPlusSVG className="skillIcon" />
        <CSharpSVG className="skillIcon" />
        <JavaSVG className="skillIcon" />
        <SpringSVG className="skillIcon" />
        <PythonSVG className="skillIcon" />
        <DjangoSVG className="skillIcon bg-light px-2" />
        <JavascriptSVG className="skillIcon" />
        <NodeSVG className="skillIcon" />
        <SqlServerSVG className="skillIcon" />
        <MySqlSVG className="skillIcon" />
        <MongoDbSVG className="skillIcon" />
      </div>
    </div>
  )
}