import {Item} from "../../components/Item/Item";
import {useState} from "react";

export const CatalogPage = (props) => {
    const [activeSection, setActiveSection] = useState(props.sections[0]);

    return <div>
        <ul>
            {
                props.sections.map((section) =>
                    <li>
                        <button
                            key={ section.id }
                            onClick={ () => setActiveSection(section)}
                            disabled={ section === activeSection }
                        >{ section.title }</button>
                    </li>
                )
            }
        </ul>
        <hr/>
        <div>
            {
                activeSection.books.map((book) =>
                    <Item id={ book.id }
                          title={ book.title }
                          author={ book.authority }
                          genre={ book.genre }
                          rating={ book.rating }
                          price={ book.price } />
                )
            }
        </div>
    </div>
}