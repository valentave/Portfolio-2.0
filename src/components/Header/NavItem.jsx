import PropTypes from 'prop-types';

export default function NavItem({link, section, reference}) {

    return(
        <li className="nav-item" ref={reference}>
            <a href={link} className="nav-item">{section}</a>
        </li>
    )
}

NavItem.propTypes = {
    link: PropTypes.string,
    section: PropTypes.string,
    reference: PropTypes.object,
}