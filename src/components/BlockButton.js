export function BlockButton({ sortUp, sortDown }) {
    return (
        <div className="blockButton">
            <h3>Сортировать по:</h3>
            <div>
                <span>автору </span>
                <button onClick={sortUp.bind(this, 'author')} type="button" className="circleRed">&#11015;</button>
                <button onClick={sortDown.bind(this, 'author')} type="button" className="circleGreen">&#8679;</button>
            </div>
            <div>
                <span>заголовку </span>
                <button onClick={sortUp.bind(this, 'heading')} type="button" className="circleRed">&#11015;</button>
                <button onClick={sortDown.bind(this, 'heading')} type="button" className="circleGreen">&#8679;</button>
            </div>
            <div>
                <span>тексту </span>
                <button onClick={sortUp.bind(this, 'text')} type="button" className="circleRed">&#11015;</button>
                <button onClick={sortDown.bind(this, 'text')} type="button" className="circleGreen">&#8679;</button>
            </div>
            <div>
                <span>дате </span>
                <button onClick={sortUp.bind(this, 'postDate')} type="button" className="circleRed">&#11015;</button>
                <button onClick={sortDown.bind(this, 'postDate')} type="button" className="circleGreen">&#8679;</button>
            </div>
        </div>
    )
}