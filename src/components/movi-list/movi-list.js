import  '../movi-list/movi-list.scss'

import MoviListItem from '../movi-list-item/movi-list-item'
export const MoviList = ({data ,onDelete , onTogleProp}) => {
  return (
    <ul className="movi-list">
      {data.map(item  => (
          // <MoviListItem name={item.name} viewers={item.viewers} increase={item.increase}/>  // 1-usul
          <MoviListItem
          key={item.id} {...item}
          increase={item.increase}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onTogleProp={(e) => onTogleProp(item.id , e.currentTarget.getAttribute('data-toggle') )}/> // Imter palatsiya degani yani ... qilib biz pazadagi uzgsaruvchilarni olamiz 
      ))}
    </ul>
  )
}
export default MoviList