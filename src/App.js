import PostFeed from "./components/PostFeed";
import {BrowserRouter, Route} from "react-router-dom";
import { PageAuthorsAll, AuthorInfo } from "./components/AuthorInfo";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/' component={PostFeed}/>
                <Route exact path='/authors/' component={PageAuthorsAll}/>
                <Route path='/authors/Александр Вербицкий' component={AuthorInfo.bind(this, 0)}/>
                <Route path='/authors/Борис Моисеев' component={AuthorInfo.bind(this, 1)}/>
                <Route exact path='/authors/Витольд Шакола' component={AuthorInfo.bind(this, 2)}/>
                <Route path='/authors/Григорий Джугашвили' component={AuthorInfo.bind(this, 3)}/>
                <Route path='/authors/Дмитрий Нагиев' component={AuthorInfo.bind(this, 4)}/>
                <Route path='/authors/Евгений Семашко' component={AuthorInfo.bind(this, 5)}/>
                <Route path='/authors/Игорь Коломиец' component={AuthorInfo.bind(this, 6)}/>
                <Route path='/authors/Константин Кривицкий' component={AuthorInfo.bind(this, 7)}/>
                <Route path='/authors/Оксана Березовская' component={AuthorInfo.bind(this, 8)}/>
                <Route path='/authors/Татьяна Романова' component={AuthorInfo.bind(this, 9)}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
