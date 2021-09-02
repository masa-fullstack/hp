import Page from "components/pages/index/base/index";
import { NextPage } from "next";

import projects from "public/data/projects.json";


const root = process.cwd();

const IndexPage: NextPage = () => {
  return (
    <Page projects={projects} />
  );
};


export default IndexPage;
