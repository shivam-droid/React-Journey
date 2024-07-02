
const heading = 
React.createElement("div",{id: "parent"},
    React.createElement("div",{id: "child"},
        [React.createElement("h1",{id:"child1"},"Hello from React!!!"),
            React.createElement("h2",{id:"child2"},"Hello from React!!!")
        ]));


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);