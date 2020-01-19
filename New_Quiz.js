<html>


<script>
var que =[{q:'hw r u',a:'fine'},{q:'hw old r u',a:'25'},{q:'whr r u',a:'home'},{q:'did u like fruits',a:'yes'}]
var score =0;

que.map(x=>{
    var res = window.prompt(que[y].q)
    console.log(res)
    if(res==que[y].a){
        alert('correct')
    }
})
</script>
</html>