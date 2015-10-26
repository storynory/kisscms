<sidebar>
   <ul class="list-bare">
       <li class="box-tiny-top-bot">
         <b>Status: </b>
         <select>
           <option>Draft</option>
           <option>Published</option>
           <option>Private</option>
           <option>Trash</option>
         </select>
       </li>
       <li class="box-tiny-top-bot">
       <b>Published</b> <span contenteditable>Not Yet</span>
       </li>
        <li class="box-tiny-top-bot">
       <b>Updated</b> <span>14 Feb</span>
       </li>
      <li class="box-tiny-top-bot">
       <b>Slug</b> <span contenteditable> new-post-title</span>
       </li>
        <li class="box-tiny-top-bot">
       <b>Author</b> <span > Bertie</span>
       </li>
     </ul>
      if (typeof io != 'function'  | typeof $ != 'function' ) {
      console.log("Na Na Na NA!")
     return
    }
     this.on('mount', function(){
       console.log("io io io")
     });
</sidebar>