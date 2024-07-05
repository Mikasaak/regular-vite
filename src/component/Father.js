import Regular from 'regularjs'

export default Regular.extend({
    name: 'Father',
    template: `
    <div style="background-color:blue;">
        <h1>父组件</h1>
        <h2>{fatherData.name}</h2>
        <button on-click={this.func()}>change Father Name</button>
        <Child name={name} func={this.func} father={this}></Child>
    </div>
    `,
    config(data) {
        data.name = 'leeluolee'
        data.fatherData = {
            name: 'father',
            age: 38
        }
    },
    func() {
        console.log(this)
        this.data.fatherData.name = 'father-change'
    }
})
