import componentsImg from '../assets/components.png';

function MyExampleProps({image, title, description, appType}) {
    return (
        <div>
            <li>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{appType}</p>
                <p>{description}</p>
            </li>
        </div>
    ); 
}

export default MyExampleProps;
