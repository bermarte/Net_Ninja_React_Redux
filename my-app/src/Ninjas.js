import React from 'react';
import './ninjas.css';

//unlike classes in functional component you need to pass props as argument

//const {ninjas} = props;
//desctructuring directly is done via ({ninjas})
//const Ninjas = (props) => { ...
//const {ninjas} = props;
const Ninjas = ({ninjas, deleteNinja}) => {

    //const {ninjas} = props;


    //  const ninjaList = ninjas.map(ninja => {
    //      if (ninja.age > 20) {
    //          return (
    //          <div className="ninjas" key={ninja.id}>
    //              <div>Name: {ninja.name}</div>
    //              <div>Age: {ninja.age}</div>
    //              <div>Belt: {ninja.belt}</div>
    //          </div>
    //         );
    //     } else{
    //         return <div>null</div>
    //     }
    //  })

    // const ninjaList = ninjas.map(ninja => {
    //     return (ninja.age > 20)?
    //     <div className="ninjas" key={ninja.id}>
    //         <div>Name: {ninja.name}</div>
    //         <div>Age: {ninja.age}</div>
    //         <div>Belt: {ninja.belt}</div>
    //     </div>: <div>null</div>
    // })

    return(
         <div className="ninja-list">
             {/* {ninjaList} */}
            {
             ninjas.map(ninja => {
                return (ninja.age > 20)?
                <div className="ninjas" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => deleteNinja(ninja.id)}>Delete Ninja</button>
                </div>: null
            })
            }
         </div>
     )
}


export default Ninjas;