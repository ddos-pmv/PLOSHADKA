<script setup>
console.log(document.getElementById('map'))
// defineProps({ mapWidth: Number, mapHeight: Number })
initMap()

async function initMap() {
  await ymaps3.ready

  const { YMap, YMapDefaultSchemeLayer } = ymaps3
  const map = new YMap(document.getElementById('map'), {
    location: {
      center: [59.93741806330418, 30.321187833889923],

      zoom: 13
    }
  })

  map.addChild(new YMapDefaultSchemeLayer())
}
let placeMark = new ymaps3.placemark([59.91932403769578, 30.274839262112565], {})
console.log(document.getElementById('map'))

let sportType
function setSport(event) {
  sportType = event.target.value
}

function findGrounds() {}
</script>

<template>
  <div id="map" style="width: 600px; height: 400px"></div>
  <div class="filter_wrapper">
    <input type="text" @input="setSport" placeholder="Вид спорта" />
    <button class="btn" @click="findGrounds">Искать</button>
  </div>
</template>

<style scoped>
.filter_wrapper {
  width: 100%;
}
</style>
