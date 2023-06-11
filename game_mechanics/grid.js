export class Node{
    x_axis;
    y_axis;
    value;

    owner = null;
    
    constructor(position, value){
        this.x_axis = position[0];
        this.y_axis = position[1];

        this.value = value;
    }

    set_owner(new_owner){
        this.owner = new_owner;
    }
}

export class Grid{
    static grid_feald = new Array();

    static create_node_row(){
        const node_row = document.createElement("div");
        node_row.classList.add("node_row");
        document.getElementById("game").appendChild(node_row);

        return node_row;
    }
    static create_node(node, node_row){
        const node_el = document.createElement("h1");
        node_el.classList.add("node_el");
        node_el.innerText = node.value;

        node_row.appendChild(node_el);
    }

    x_axis;
    y_axis;

    constructor(dimensions){
        this.x_axis = dimensions[0];
        this.y_axis = dimensions[1];

        for(let i = 0; i < dimensions[0]; i++){
            Grid.grid_feald.push(new Array());

            for(let j = 0; j < dimensions[1]; j++){
                Grid.grid_feald[i].push(new Node([dimensions[0], dimensions[1]], "test"));
            }
        }
    }
}