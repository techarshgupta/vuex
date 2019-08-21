<template>
    <div class="container">
      <div>
        <comp-drawer/>
        <hr>
        <comp-profile/>
        <hr>
        <comp-name/>
        <hr>
        <comp-age/>
        <hr>
        <comp-state />
      </div>
      
    </div>
</template>

<script>
import compProfile from './components/Profile'; 
import compDrawer from './components/Drawer';
import compName from './components/Name';
import compAge from './components/Age';
import compState from './components/State';


export default {
    components:{
      compProfile,
      compDrawer,
      compName,
      compAge,
      compState
    }
}
</script>

<style>

body {
    padding:0;
    margin:0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
}

.container {
    width: 1100px;
    margin: 0 auto;
}

h1 {
  margin-top: 0px;
  margin-bottom: 50px;
}

.item {
  font-size: 20px;
  line-height: 30px;
  padding: 20px;
}

.item span {
  font-weight: 700;
}

input {
  font-size: 20px
}

.content {
  padding:20px 0px
}

</style>
