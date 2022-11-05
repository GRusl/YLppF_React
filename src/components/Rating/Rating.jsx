export const Rating = ({value, max=5, className=0}) => {
    return (
        <progress className={ className } value={ value } max={ max }/>
    )
}
