const FounderListItem = (props) => {
    console.log(props)

    return (
        <li>
            <h3>{props.name}: {props.title}</h3>
            <p>{props.intro}</p>
        </li>
    );
  };
  
  export default FounderListItem;