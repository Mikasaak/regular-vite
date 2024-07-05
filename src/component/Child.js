import Regular from 'regularjs'

export default Regular.extend({
    name: 'Child',
    template: `
    <div style="background-color:red;">
        <h2>子组件</h2>
         <button on-click={func()}>change Father Name</button>
         <button on-click={this.handClick()}>handClick</button>
    </div>
    `,
    handClick() {
        console.log('handClick')
        console.log(this)
        console.log(this.data)
        this.data.father.func()
    }
})
