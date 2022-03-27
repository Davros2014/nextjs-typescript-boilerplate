import Head from "next/head";
import AppContainer from "../components/appContainer";
import TestComponent from "../components/testComponent";

export default function Home(props) {
  console.log("props", props.title)
  return (
    <AppContainer>
      <Head>
        <title>Nextjs Biolerplate</title>
        <meta name="description" content="Change to your site/app description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TestComponent/>
    </AppContainer>
  );
}
