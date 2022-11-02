import {Item} from "../../components/Item/Item";
import {useState} from "react";

import styles from "./styles.module.css"

export const CatalogPage = (props) => {
    const [activeSection, setActiveSection] = useState(props.sections[0]);

    return <div className={ styles.content }>
        <aside className={ styles.linksList }>
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
        </aside>
        <div className={ styles.mainContent }>
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