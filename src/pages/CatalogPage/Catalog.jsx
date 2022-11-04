import {Item} from "../../components/Item/Item";
import {useState} from "react";

import classnames from 'classnames';

import styles from "./styles.module.css"

export const CatalogPage = (props) => {
    const [activeSection, setActiveSection] = useState(props.sections[0]);

    return (
        <div className={ styles.content }>
            <aside className={ styles.linksList }>
                <ul className={ styles.linkUl }>
                    {
                        props.sections.map((section) =>
                            <li className={ classnames(styles.linkLi, (section === activeSection)?styles.linkLi_active:0) }
                                key={ section.id }
                                onClick={ () => setActiveSection(section)}>
                                { section.title }
                            </li>
                        )
                    }
                </ul>
            </aside>
            <div className={ styles.contentMain }>
                {
                    activeSection.books.map((book) =>
                        <Item book={ book } key={ book.id } />
                    )
                }
            </div>
        </div>
    )
}