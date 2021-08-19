import React, {useState} from "react";


function PostForm(props) {

    const [valueSelect, setValueSelect] = useState( props.edit ? props.edit.value_author : '');
    const [valueHeading, setValueHeading] = useState(props.edit ? props.edit.value_heading : '');
    const [valuePostText, setValuePostText] = useState(props.edit ? props.edit.value_text : '');

    const selectOptions = props.state.map((item) => {
        return (<option>{item.name + ' ' + item.surname}</option>)
    })

    const handleChangeSelect = e => {
        setValueSelect(e.target.value)
    }
    const handleChangeHeading = e => {
        setValueHeading(e.target.value)
    }
    const handleChangePostText = e => {
        setValuePostText(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            author: valueSelect,
            heading: valueHeading,
            text: valuePostText,
            postDate: new Date().toLocaleTimeString()
        })


        setValueSelect('')
        setValueHeading('')
        setValuePostText('')
    }

    return (
        <form className="postForm" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <h2> Редактируем вашу новость...</h2>
                    <select onChange={handleChangeSelect} name="select" id="select" value={valueSelect}>
                        <option>Выберите автора</option>
                        {selectOptions}
                    </select>
                    <input value={valueHeading} onChange={handleChangeHeading} type="text" className="headingPost"
                           name="headingPost" placeholder="Ваш новый заголовок..." maxLength="40"/>
                    <textarea value={valuePostText} onChange={handleChangePostText} className="postText" name="postText"
                              placeholder="Ваша свежая новость..." rows="5"/>
                    <button type="submit" className="sendPost">Обновить</button>
                </>
            ) : (
                <>
                    <h2>Ваша новость...</h2>
                    <select onChange={handleChangeSelect} name="select" id="select" value={valueSelect}>
                        <option>Выберите автора</option>
                        {selectOptions}
                    </select>
                    <input value={valueHeading} onChange={handleChangeHeading} type="text" className="headingPost"
                           name="headingPost" placeholder="Ваш заголовок..." maxLength="40"/>
                    <textarea value={valuePostText} onChange={handleChangePostText} className="postText" name="postText"
                              placeholder="Ваша новость..." rows="5"/>
                    <button type="submit" className="sendPost">Отправить</button>
                </>
            )}
        </form>
    )

}

export default PostForm;