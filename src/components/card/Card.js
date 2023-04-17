import React, {useCallback, useState} from 'react';
import './card.css';

const Card = ({ children, className, expandableContent }) => {

  var additionalClassName = "";
  if (expandableContent !== null) {
    additionalClassName = " expandable"
  }

  const [showExpandableContent, setShowExpandableContent] = useState(false);
  const onClick = useCallback(
    () => {
        if (showExpandableContent == null) {
            return;
        }

        setShowExpandableContent(!showExpandableContent);
    }
    , [showExpandableContent])

  return (
    <div
    className={'card' + additionalClassName + (className ? ' ' + className : '')}
    onClick={onClick}>
      {children}
      {showExpandableContent ? <div className={'expandableContent'}>{expandableContent}</div> : null}
    </div>
  )
}

export default Card