const sortByName = (list) => {
    return [...list].sort((a,b) => a.titulo > b.titulo ? 1 : -1)
}

export default sortByName