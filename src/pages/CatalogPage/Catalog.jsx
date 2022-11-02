import {Item} from "../../components/Item/Item";

export const CatalogPage = (props) => {
    // const [activeBook, setActiveBook] = useState(props.books[0]);

    return <div>
        {
            props.books.map((book) =>
                <Item title={ book.title }
                      author={ book.authority }
                      genre={ book.genre }
                      rating={ book.rating }
                      price={ book.price }
                />
            )
        }
    </div>
}