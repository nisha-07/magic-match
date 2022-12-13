import classes from "./SingleCard.module.css"

const SingleCard = ({ card, handleChoice }) => {

    const handleClick = () => {
        handleChoice(card);
    }

    return (
        <div className={classes.card}>
            <img className={classes.front} src={card.src} alt="card front" />
            <img
                className={classes.back}
                src="/img/cover.png"
                onClick={handleClick}
                alt="cover" />
        </div>

    )
}

export default SingleCard
