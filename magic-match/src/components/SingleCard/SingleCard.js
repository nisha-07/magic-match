import classes from "./SingleCard.module.css"

const SingleCard = ({ card }) => {

    return (
        <div className={classes.card}>
            <img className={classes.front} src={card.src} alt="card front" />
            <img className={classes.back} src="/img/cover.png" alt="cover" />
        </div>

    )
}

export default SingleCard
