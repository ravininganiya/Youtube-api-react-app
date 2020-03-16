import React,{useState} from 'react';

const Searchbar =(props)=> {
    const[value,setValue]=useState("");
    const onInputChange =(e)=>{
        // console.log(e.target.value)
        setValue(e.target.value);
    };
    const onFormSubmit=(e)=>{
        e.preventDefault();
        props.onFormSubmit(value)
    }
    
        return(
            <div className="search-bar ui segment">
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={onInputChange} value={value}  />
                    </div>
                </form>
            </div>
        );  
    
}
export default Searchbar;





// import React from 'react';

// class Searchbar extends React.Component {
//     state = {
//         term: 'Default text'
//     };
//     handleChange = (event) => {
//         this.setState({
//             term: event.target.value
//         });
//     };
//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.handleFormSubmit(this.state.term);
//     }

//     render() {
//         return (
//             <div className='search-bar ui segment'>
//                 <form onSubmit={this.handleSubmit} className='ui form'>
//                     <div className='field'>
//                         <label htmlFor="video-search">Video Search</label>
//                         <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// export default Searchbar;