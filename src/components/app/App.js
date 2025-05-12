import { Component } from 'react';
import './App.css'; 
import AppFilter  from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import MoviList from '../movi-list/movi-list';
import MovesAddForm from '../moves-add-form/moves-add-form'
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  constructor(props){
     super(props)
     this.state = {
        data:[
          { name:'Empire of osman' , viewers:'900',  increase: false , like:false, id:1},
          { name:'Ertugrul' , viewers:'800' , increase: false , like:false, id:2},
          { name:'Burusle' , viewers:'222',  increase: false, like:false,  id:3},
        ],
        term: '',
        filter: 'all',

  }
  }

  onDelete = (id) => {
    this.setState(({data}) => {
      const newArr = data.filter(item => item.id !== id) //IMportant

      return{
        data: newArr,
      }
    }) 
  }

  addForm = item => {
    this.setState(({data}) =>({
      data: [...data, {...item, id: uuidv4()}],
    }))
    
  }

 onTogleProp = (id, prop) => { 
  this.setState(({data}) =>{
     const newArr = data.map(item => {
      if(item.id === id ){
        return{...item, [prop]:!item[prop]} // bu yerda item propni o'zgartiradi
      }
      return item
     })
     return{
      data: newArr,
     }
  })
 }

searchHandle = (arr, term) => {
  if(term.length === 0 ) {
    return arr
  }
  return arr.filter(item =>  item.name.toLowerCase().indexOf(term) > -1 )
}

filterHeandel = (arr, item) => {
  switch (item) {
    case 'popular':
      return arr.filter(c => c.like)
    case 'mostViwers':
      return arr.filter(c => c.viewers > 800)
    default:
      return arr
  }
}
updateSearch = term  =>  this.setState({term})
updateFilterHedel = filter => this.setState({filter})

  render(){
    const {data ,filter} = this.state;
    const allMoviesContent = data.length;
    const favoriteMovies = data.filter(item => item.like).length;
    const visibleData = this.filterHeandel(this.searchHandle(data, this.state.term), filter ) 
    return (
      <div className='app font-monospace'>
          <div className='content'>
            <AppInfo allMoviesContent={allMoviesContent}favoriteMovies={favoriteMovies} />
          <div className='search-panel'>
              <SearchPanel updateSearch={this.updateSearch}/>
              <AppFilter filter={filter} updateFilterHedel={this.updateFilterHedel}/>
          </div>
          <MoviList onTogleProp={this.onTogleProp}   data={visibleData}  onDelete={this.onDelete}/>
          <MovesAddForm addForm={this.addForm
          }/>
          </div>
      </div>
     
    );
  }
  
}

export default App;
