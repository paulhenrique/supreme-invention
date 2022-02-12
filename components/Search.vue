<template>
  <ais-instant-search index-name="demo_ecommerce" :search-client="searchClient">
    <div class="left-panel">
      <ais-clear-refinements />
      <h2>Brands</h2>
      <ais-refinement-list attribute="brand" searchable />
      <ais-configure :hitsPerPage="8" />
    </div>
    <div class="right-panel">
      <ais-search-box />
      <ais-hits>
        <template v-slot:item="{ item }">
          <h2>{{ item.name }}</h2>
          <img :src="item.image" align="left" :alt="item.name" />
          <div class="hit-name">
            <ais-highlight attribute="name" :hit="item"></ais-highlight>
          </div>
          <div class="hit-description">
            <ais-highlight attribute="description" :hit="item"></ais-highlight>
          </div>
          <div class="hit-price">{{ item.price }}</div>
        </template>
      </ais-hits>
      <ais-pagination />
    </div>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'
import 'instantsearch.css/themes/satellite-min.css'
export default {
  data() {
    return {
      searchClient: algoliasearch(
        'B1G2GM9NG0',
        'aadef574be1f9252bb48d4ea09b5cfe5'
      ),
    }
  },
}
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
.ais-Hits-list {
  margin-top: 0;
  margin-bottom: 1em;
}
.ais-InstantSearch {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
}
.ais-Hits-item img {
  margin-right: 1em;
}
.hit-name {
  margin-bottom: 0.5em;
}
.hit-description {
  color: #888;
  font-size: 0.8em;
  margin-bottom: 0.5em;
}
</style>
