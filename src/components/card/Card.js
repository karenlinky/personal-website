import React, {useCallback/*, useState*/} from 'react';
import CardContent from './CardContent';
import CardDivider from './CardDivider'
import './card.css';

const Card = ({ children, className, expandableContent, cardContentClassName, openNum, experienceNum, onCardClick }) => {

  console.log('AAAAA')
  console.log(openNum);
  console.log(experienceNum)

  var additionalClassName = "";
  if (expandableContent !== null) {
    additionalClassName = " expandable"
  }

//   const [showExpandableContent, setShowExpandableContent] = useState(false);
  const onClick = useCallback(
    () => {
        if (expandableContent === null) {
            return;
        }

        onCardClick(experienceNum);
    }
    , [/*showExpandableContent, */expandableContent, onCardClick, experienceNum])

  return (
    <div
    className={'card' + additionalClassName + (className ? ' ' + className : '')}
    onClick={onClick}>
      <CardContent className={cardContentClassName ? cardContentClassName : ''}>
        {children}      
        {expandableContent !== null ?
          <div className={'expandableContent' + (openNum === experienceNum ? ' showExpandableContent' : '')}>
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