export const scrollToElement = (id) => {
    const element = document.querySelector(`#${id}`)
    console.log(element)
    if (element){
        element.scrollIntoView({behavior: "smooth", block: "start"})
        window.location.hash = id
    }else {
        console.error("the element with id '"+ id +"' does not exist")
    }

}

export const scrollToTop = () => {
    window.location.hash = "home"
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}