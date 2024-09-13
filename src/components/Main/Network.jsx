import PropTypes from "prop-types"

export default function Network({item}) {

    return(
        <li className="networks-item">
            <a href={item.link} target="_blank" rel="noreferrer" className={"networks-link link-" + item.name}>
                <svg viewBox={item.svg.viewBox} className={"networks-svg svg-" + item.name}>
                    {item.svg.path.map((path) => (
                        <path key={path.d} d={path.d}></path>
                    ))}
                    {item.svg.defs ? (
                        <defs>
                            <linearGradient id={item.svg.defs.linearGradient.id} gradientTransform={item.svg.defs.linearGradient.gradientTransform}>
                                {item.svg.defs.stop.map((stop) => (
                                    <stop key={stop.stopColor} offset={stop.offset} stopColor={stop.stopColor}/>
                                ))}
                            </linearGradient>
                        </defs>) 
                        : ""}
                </svg>
            </a>
        </li>
    )
}

Network.propTypes = {
    item: PropTypes.object
}