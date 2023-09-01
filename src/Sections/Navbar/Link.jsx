import AnchorLink from "react-anchor-link-smooth-scroll"

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
    return (
        <div>
            <AnchorLink
                href={`#${lowerCasePage}`}
                onClick={() => { setSelectedPage(lowerCasePage) }}
                className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                transition duration-300 hover:text-primary-300
                `}>
                {page}
            </AnchorLink >
        </div>
    )
}

export default Link
