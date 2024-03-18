import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
function App() {
  return (
    <div>
      <Layout>
        <div>Hello World</div>
        <Card
          title="Product 1"
          image="https://lms.noroff.no/pluginfile.php/1/theme_remui/logo/1700478956/Noroff%20copy%202.png"
          price="100"
        />
        <Card
          title="Product 2"
          image="https://lms.noroff.no/pluginfile.php/1/theme_remui/logo/1700478956/Noroff%20copy%202.png"
          price="50"
        />
      </Layout>
    </div>
  );
}

export default App;
