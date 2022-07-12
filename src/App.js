import React, { useState } from "react";
import "./App.css";
import { dataBirthdays } from "./data";
import ListBirthdays from "./ListBirthdays";

function App() {
    const [people, setPeople] = useState(dataBirthdays);
    return (
        <main>
            <div className="container">
                <h3>{people.length} birthdays today</h3>
                <ListBirthdays people={people} />
                <button className="btn" onClick={() => setPeople([])}>
                    Clear All
                </button>
            </div>
        </main>
    );
}

export default App;
