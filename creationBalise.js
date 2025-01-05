function creationBalise( tag, id, className, href) {
    const balise = document.createElement(tag)

    if (id) {
        balise.id = id;
    }
    if (className) {
        balise.className = className;
    }
    if (href && tag=='a') {
        balise.href = href
    }

    return balise ;
}