<template>
  <div class="home">
    <div class="container">
      <form  @submit.prevent="addnote">
        <div class="mb-3">
          <label class="form-label">Note</label>
          <input type="text" class="form-control" v-model="note_title">
        </div>
        <div class="mb-3">
          <label  class="form-label">Details</label>
          <input class="form-control" type="text" v-model="note_details">
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="submit">Add</button>
        </div>        
      </form>


<!-- notes -->
      <table class="table">  
        <tbody>
          <tr v-for="(i,index) in allnote" :key="index">
            <th scope="row">              
              {{index+1}}
            </th>
            <td>
              <h3 class="text-decoration-underline">{{i.note}}</h3>
              <br>
              {{i.details}}</td>
            <td>
              <button @click="deletenote(index)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes:[],
      note_title:"",
      note_details:"",      
      
    };
  },
  computed: {
    allnote() {
      return this.notes.slice().reverse();
    },
  
  },
  mounted() {
    if (localStorage.getItem('notes')===null) {
        localStorage.setItem('notes','[]')
      }
    this.notes = JSON.parse(localStorage.getItem("notes"))
    this.notes.reverse()
  },
  
  methods: {
    addnote() {
      if (this.note_title == "" ) {
        this.note_title = "no title"
        if (this.note_details == "") {          
          this.note_details = "no details"        
        }
      }
      this.notes.push(
        {note:this.note_title,details:this.note_details}        
        )              
      localStorage.notes = JSON.stringify(this.notes)
      this.note_title = ""
        this.note_details = "" 
    }   
    ,
    deletenote(data){
      this.notes.splice(data,1)
      localStorage.notes = JSON.stringify(this.notes)
    }
  },
}
</script>
