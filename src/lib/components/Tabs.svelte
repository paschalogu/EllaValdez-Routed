<script>
  import { createEventDispatcher } from "svelte"; 
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;  
  export let column = false;
  export let footer = false;
  export let services = false;

</script>

<div class="tabs">
  <ul class="tabs-list" class:column={column} class:footer={footer} class:services={services}>     
    {#each items as item}
      <li 
      on:click={() => dispatch('tabChange', item)}>
      <div class:active={item === activeItem} class="item">{item}</div>
      </li>
    {/each}
  </ul>

</div>

<style>  
  .tabs-list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 4.8rem;
    padding: 0;
  }

  li {
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }
  .item {
    transition: all 0.3s;
  }

  .item:hover {
    color: #ced5da;
    font-weight: 500;
  }

  .active {
    color: #ced5da; 
/* border-bottom: 2px solid gold; */
  } 

/********************************/
/* Tabs for MobileNavView Page */
/********************************/
  .column {
    flex-direction: column;
    gap: 4.8rem;
    align-items: center;
  }

  .column li {
    font-size: 3rem;
  } 

/*****************************/
/* Tabs for footer Page */
/*****************************/
.footer {
    flex-direction: column;
    gap: 1.8rem;
  }

  .footer li {
    font-size: 1.6rem;
    color: #767676;  
    transition: all 0.3s;  
  }

  .footer li .active{
    border-bottom: none;

  }

/*****************************/
/* Tabs for Services Page */
/*****************************/
.services {
  gap: 0;
}

.services li{
  color: #fff;
  background: #0C2D48;
  border: #fff solid 1px;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;
}


/***********************************/
/* Below 1200px (Landscape tablets)*/
/***********************************/
@media (max-width: 75em) {    
  .tabs-list {
    gap: 3.2rem;
  }

  .services {
  gap: 0;
  }  

  .footer {
    gap: 1.6rem;
  }

  .column {
    gap: 3.2rem;
  }

  .column li {
    font-size: 2.4rem;
  }
}


</style>
