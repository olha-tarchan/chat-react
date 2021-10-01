export const sortData = (e) => {
    const array = [...e];
    return array.sort((a, b) => b.data[b.data.length - 1].createdAt - a.data[a.data.length - 1].createdAt)
}