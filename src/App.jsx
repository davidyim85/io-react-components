import Navbar from "./Navbar/Navbar";
import FounderListItem from "./FounderListItem/FounderListItem";

const App = () => {
  const founders = [
    {
      name: "Elizabeth Holmes",
      title: "CEO",
      intro: "MBA from SuperLegit University"
    },
    {
      name: "Sam Bankman-Fried",
      title: "CFO",
      intro: "CPA from TotallyReal State"
    },
    {
      name: "Matt Damon",
      title: "CMO",
      intro: "Was in that Movie You saw"
    },
    {
      name: "Matt F.",
      title: "The boss",
      intro: "superstar"
    }
  ];


  //outside the return 
  const outside = founders.map((founder, i) => {
    return <FounderListItem key={i} name={founder.name} title={founder.title} intro={founder.intro} />
  });

  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <h2>Our Founders</h2>
      <ul>
        {outside}
        {/* mapping over data so that we have only 1 FounderListItem */}
        {/* {founders.map((founder,i) => {
          return <FounderListItem key={i} name={founder.name} title={founder.title} intro={founder.intro}/>
        } )} */}

        {/* 
        You do:
          Please replace the <li> tags in the app.js file with the FounderListItem component 
        <li>
          <h3>Sam Bankman-Fried: CFO</h3>
          <p>CPA from TotallyReal State</p>
        </li>
        <li>
          <h3>Matt Damon: CMO</h3>
          <p>Was in that Movie You saw</p>
        </li>
         */}
        {/* <FounderListItem
          name={"Elizabeth Holmes"}
          title={"CEO"}
          intro={"MBA from SuperLegit University"}
        />
        <FounderListItem
          name={"Sam Bankman-Fried"}
          title={"CFO"}
          intro={"CPA from TotallyReal State"}
        />
        <FounderListItem
          name={"Matt Damon"}
          title={"CMO"}
          intro={"Was in that Movie You saw"}
        /> */}
      </ul>
    </>
  );
};

export default App
