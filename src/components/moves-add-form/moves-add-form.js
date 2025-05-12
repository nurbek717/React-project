import '../moves-add-form/moves-add-form.scss'
import { Component }  from 'react'

class MovesAddForm extends Component{
  constructor(props){
     super(props);
      this.state ={
        name: '',
        viewers: '',
      }
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addFromHandler = e => {
    e.preventDefault()
    this.props.addForm({name: this.state.name, viewers:this.state.viewers})
    this.setState({
      name: '',
      viewers: '',
    })
  }
  render(){
    const {name, viewers} = this.state;
    return (
      <div className="moves-form">
      <h3>Yangi kunolarni qo'shishi:</h3>
      <form className="add-form d-flex" onSubmit={this.addFromHandler}>
        <input onChange={this.onChangeInput} name='name'  value={name}  type="text" className="form-control new-post-label" placeholder="Qanday kind?" />
        <input onChange={this.onChangeInput}  name='viewers' value={viewers}  type="number" className="form-control new-post-label" placeholder="Nechi marotaba ko'rilgan?" />
        <button type='submit' className='btn btn-outline-dark'>Qo'shish </button>
      </form>
      </div>
    )


  }
}
// const MovesAddForm = () => {
//   return (
//     <div className="moves-form">
//     <h3>Yangi kunolarni qo'shishi:</h3>
//     <form className="add-form d-flex">
//       <input type="text" className="form-control new-post-label" placeholder="Qanday kind?" />
//       <input type="number" className="form-control new-post-label" placeholder="Nechi marotaba ko'rilgan?" />
//       <button type='submit' className='btn btn-outline-dark'>Qo'shish </button>
//     </form>
//     </div>
//   )
// }

export default MovesAddForm
