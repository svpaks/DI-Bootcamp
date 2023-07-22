import React from "react";

class UserFavoriteAnimals extends React.Component {
    render() {
        const { favAnimals } = this.props;

        return (
            <ul>
                {favAnimals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
        );
    }
}


// OR
// const UserFavoriteAnimals = (props) => {
//     const {blabla} = props;
//     const horse = blabla[0];
//     return (
//         <>
//             <ul>
//                 {blabla.map((animal, index) => {
//                 return <li key={index}>{animal} but first animal is {horse}</li>
//                 })}
//             </ul>
//         </>
//       );
// };

export default UserFavoriteAnimals;