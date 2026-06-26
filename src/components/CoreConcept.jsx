/*       <p>View <a href={props.url} target="_blank" rel="noopener noreferrer">here.</a></p> */

export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
} 

// BOTH    props and 
//         not_props FUNCTIONS WORK
 
// REMMEBER: {} insde of ()           ({})
/* export default function CoreConcept({image, title, appType, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{appType}</p>
      <p>{description}</p>
    </li>
  )
} 
*/
