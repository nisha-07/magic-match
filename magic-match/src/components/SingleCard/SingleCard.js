import classes from "./SingleCard.module.css"

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        !disabled && handleChoice(card);
    }

    return (
        <div className={classes.card}>
            <div className={flipped ? classes.filpped : ""} >
                <img className={classes.front} src={card.src} alt="card front" />
                <img
                    className={classes.back}
                    src="/img/cover.png"
                    onClick={handleClick}
                    alt="cover" />
            </div>
        </div >

    )
}

export default SingleCard
