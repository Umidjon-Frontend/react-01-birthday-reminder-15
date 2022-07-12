import React from "react";

function ListBirthdays({ people }) {
    return (
        <>
            {people.map((item) => {
                const {image, name, age, id} = item
                return (
                    <div key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ListBirthdays;
