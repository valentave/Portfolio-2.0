import React from 'react';
import PropTypes from 'prop-types';

export default function SkillItem({ item, typeOfItem }) {
  return (
    <div className={typeOfItem === "language" ? "languages-item" : "tools-item"}>
      <svg height="64px" width="64px" viewBox={item.svg.viewBox} className={typeOfItem === "language" ? "language-svg" : "tools-item"}>
        {item.svg.path.map((path, index) => (
          <React.Fragment key={index}>
            {path.circle ? (
              <circle key={`circle-${index}`} fill={path.circle.fill} cx={path.circle.cx} cy={path.circle.cy} r={path.circle.r}></circle>
            ) : null}
            <path key={`path-${index}`} fillRule={path.fillRule} clipRule={path.clipRule} fill={path.fill} d={path.d}></path>
          </React.Fragment>
        ))}
      </svg>
      <p>{item.title}</p>
    </div>
  );
}

SkillItem.propTypes = {
  item: PropTypes.object,
  typeOfItem: PropTypes.string,
};