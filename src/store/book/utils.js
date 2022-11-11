export const prepareData = (items) => {
    return {
        entities: items.reduce((acc, book) => {
            acc[book.id] = book
            return acc
        }, {}),
        ids: items.map((i) => i.id)
    }
}
