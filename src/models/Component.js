export class Component{
    name;
    element;
    rerender;
    renderFunction;
    constructor(
        name,
        element,
        renderFunction,
        rerender = false
    ){
        this.name = name;
        this.element = element;
        this.renderFunction = renderFunction;
        this.rerender = rerender;
    }
}