

const filterQuery = ({...obj}) =>{

    const filter = ['page','limit']

    filter.forEach(element => delete obj[element])


    return obj

}

module.exports = {
    filterQuery
}