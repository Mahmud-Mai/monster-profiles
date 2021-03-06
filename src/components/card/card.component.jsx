import './card.styles.css';

export const Card = (props) => {
    return(
    <div className='card-container'>
        <img alt={`monster-${props.monster.id}`} src={`https://robohash.org/${props.monster.id}?set=set2&size=190x180`} />
        <h2> { props.monster.name } </h2>
        <p>{props.monster.email}</p>
    </div>
    );
}