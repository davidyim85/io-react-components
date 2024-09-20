const FounderListItem = (props) => {
    return (
        <li>
            <h3>{props.name}: {props.title}</h3>
            <p>{props.intro}</p>
        </li>
    );
  };
  
  export default FounderListItem;