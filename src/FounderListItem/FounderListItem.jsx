const FounderListItem = (props) => {
   
    // const props =  {
    //     name: "abc",
    //     title: "cba",
    //     intro: "MBA from SuperLegit University"
    //   },
    return (
        <li>
            <h3>{props.name}: {props.title}</h3>
            <p>{props.intro}</p>
        </li>
    );
  };
  
  export default FounderListItem;