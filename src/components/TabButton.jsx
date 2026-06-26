/* children is predefined/built-in so you can use props.children onSelect can be named onTrang  See Ch3.50 */
export default function TabButton({children, onSelect}) { 
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>        
    );
}

/* <button onClick={onSelect}>{children}</button> */
/* export default function TabButton({ children, onSelect }) {
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    );
}
*/