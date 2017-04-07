import Vue = require('vue');

interface Preson{
  name: string;
}

let MrRight:Preson= {
  name: 'Mr. Right'
}

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App --- ' + MrRight.name,
      userInput: '',
      pickedLocation: {
        location:{}
      }
    }
  },
  methods:{
    handleUserInput: function(_input:string){
      this.userInput = _input;
    },
    handlePickedLocation: function(location: any){
      this.pickedLocation = location;
    }
  },
  components:{
  }
}