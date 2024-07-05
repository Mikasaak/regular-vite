import Regular from "regularjs";

export default Regular.extend({
    name: 'Counter',
    template: `
        <div>
            <h1>Counter: { count }</h1>
            <button on-click={ this.increment()}>Increment</button>
            <button on-click={this.decrement()}>Decrement</button>
        </div>
    `,
    config(data) {
        data.count = 0;
    },
    increment() {
        this.data.count++;
    },
    decrement() {
        this.data.count--;
    }
});