import React, {useCallback, useState} from 'react';
import CardContent from './CardContent';
import CardDivider from './CardDivider'
import './card.css';

const Card = ({ children, className, expandableContent, cardContentClassName }) => {

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
      <CardContent className={cardContentClassName ? cardContentClassName : ''}>
        {children}      
        {expandableContent !== null ?
          <div className={'expandableContent' + (showExpandableContent ? ' showExpandableContent' : '')}>
            <CardDivider />
            {expandableContent}
          </div> :
          null
        }
      </CardContent>
    </div>
  )
}

export default Card