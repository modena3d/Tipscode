function Footer(){
    const date = new Date().getFullYear();;

    return (
    <footer>
        <p>Copright © {date}</p>
    </footer>
    )
}

export default Footer