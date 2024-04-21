<script setup>
import axios from 'axios'
import { ref } from 'vue'
// defineProps({ mapWidth: Number, mapHeight: Number })

let request = { type: '', season: 'Все', light: '' }
let groundsArr = ref([])

let setRequest = (event) => {
  console.log(event.target.value, event.target.name)
  request[event.target.name] = event.target.value
}

let formQuery = () => {
  let queryString = 'https://egs.gate.petersburg.ru/egs/sportgrounds/?'
  if (request.type != '') {
    queryString += 'type=' + encodeURI(request.type) + '&'
  }
  if (request.light != '') queryString += 'light=' + request.light + '&'
  queryString += 'season=' + encodeURI(request.season) + '&'
  queryString += 'page=1&count=100000'
  sendRequest(queryString)
}

const ymaps3Vue = await ymaps3.import('@yandex/ymaps3-vuefy')
const vuefy = ymaps3Vue.vuefy.bindTo(Vue)
const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = vuefy.module(ymaps3)

async function sendRequest(requestUrl) {
  // try {
  //   axios({
  //     method: 'get',
  //     url: requestUrl,
  //     headers: {
  //       Authorization:
  //         'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhU1RaZm42bHpTdURYcUttRkg1SzN5UDFhT0FxUkhTNm9OendMUExaTXhFIn0.eyJleHAiOjE4MDgxMDI4NjQsImlhdCI6MTcxMzQwODQ2NCwianRpIjoiMGYyMmFlYTMtZTExZi00MzQ0LWIwMzgtMmEzZmRjZGZhYjBmIiwiaXNzIjoiaHR0cHM6Ly9rYy5wZXRlcnNidXJnLnJ1L3JlYWxtcy9lZ3MtYXBpIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjQ2Yjg3ZmU2LThmYTItNGUwOS1iZjM1LTcxMTU5YjhiNzc0YyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluLXJlc3QtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjM1YjRhZGQ5LWU1MzUtNDhmNC1hZTkxLWY3ODlmOTUxN2U5NSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZWdzLWFwaSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiIzNWI0YWRkOS1lNTM1LTQ4ZjQtYWU5MS1mNzg5Zjk1MTdlOTUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiLQodC10YDQs9C10Lkg0J_QtdGA0LvQuNC9IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNDdkZmUzYzIzMGE1MWRlMDgwYzM5ZmRiOTIzZjRiNmYiLCJnaXZlbl9uYW1lIjoi0KHQtdGA0LPQtdC5IiwiZmFtaWx5X25hbWUiOiLQn9C10YDQu9C40L0ifQ.LlIl0m11XHKNN0AZEsc9rJSHJwoBC7QAB_KJB0tidrepYkbwq_URLyY_wh6oi53pVt98NwSfPAw5rUeKl3CSJYKdd1EyaxZCG1sH-hUP082C2rxtj1U_OGm7bthlN7oGxzaGURlLZWuGyN3GWh2vsyQfcy5YpAmw2OxYf4jo_PKeYxHo5IjeFIxQic6Bbio80gPzULCohycmoIZVhN9aBcK79HcgTT7oNRx3PZ7HG5hRYZ272YuJU8zJ0V7-nyCMQddzCEISAodOQ8KSkBwrxNLMy73kKu51TI7l23HKErhD2ppg8lP82C6o051-5F7DbGTIaz6B4be4ujwWqU3nng'
  //     }
  //   }).then((resp) => {
  //     sportGrounds.value = resp.data.data
  //     console.log(sportGrounds.value)
  //   })
  // } catch (er) {
  //   console.log(er)
  // }
  try {
    axios({
      method: 'get',
      url: requestUrl,
      headers: {
        Authorization:
          'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhU1RaZm42bHpTdURYcUttRkg1SzN5UDFhT0FxUkhTNm9OendMUExaTXhFIn0.eyJleHAiOjE4MDgxMDI4NjQsImlhdCI6MTcxMzQwODQ2NCwianRpIjoiMGYyMmFlYTMtZTExZi00MzQ0LWIwMzgtMmEzZmRjZGZhYjBmIiwiaXNzIjoiaHR0cHM6Ly9rYy5wZXRlcnNidXJnLnJ1L3JlYWxtcy9lZ3MtYXBpIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjQ2Yjg3ZmU2LThmYTItNGUwOS1iZjM1LTcxMTU5YjhiNzc0YyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluLXJlc3QtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjM1YjRhZGQ5LWU1MzUtNDhmNC1hZTkxLWY3ODlmOTUxN2U5NSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZWdzLWFwaSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiIzNWI0YWRkOS1lNTM1LTQ4ZjQtYWU5MS1mNzg5Zjk1MTdlOTUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiLQodC10YDQs9C10Lkg0J_QtdGA0LvQuNC9IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNDdkZmUzYzIzMGE1MWRlMDgwYzM5ZmRiOTIzZjRiNmYiLCJnaXZlbl9uYW1lIjoi0KHQtdGA0LPQtdC5IiwiZmFtaWx5X25hbWUiOiLQn9C10YDQu9C40L0ifQ.LlIl0m11XHKNN0AZEsc9rJSHJwoBC7QAB_KJB0tidrepYkbwq_URLyY_wh6oi53pVt98NwSfPAw5rUeKl3CSJYKdd1EyaxZCG1sH-hUP082C2rxtj1U_OGm7bthlN7oGxzaGURlLZWuGyN3GWh2vsyQfcy5YpAmw2OxYf4jo_PKeYxHo5IjeFIxQic6Bbio80gPzULCohycmoIZVhN9aBcK79HcgTT7oNRx3PZ7HG5hRYZ272YuJU8zJ0V7-nyCMQddzCEISAodOQ8KSkBwrxNLMy73kKu51TI7l23HKErhD2ppg8lP82C6o051-5F7DbGTIaz6B4be4ujwWqU3nng'
      }
    }).then((resp) => {
      groundsArr.value = resp.data.data
      console.log(groundsArr.value)
    })
  } catch (er) {
    console.log(er)
  }
}
</script>

<template>
  <YMap :location="location">
    <YMapDefaultSchemeLayer />
    <YMapDefaultFeaturesLayer />
    <YMapMarker :coordinates="[34, 57]" draggable>
      <div class="marker marker_pill">I'm marker!</div>
    </YMapMarker>
  </YMap>
</template>
<!-- 
<template>
  <div class="filter_wrapper">
    <input type="text" @input="setRequest" placeholder="Вид спорта" />
    <select name="light" @input="setRequest">
      <option value="''">Не важно</option>
      <option value="true">Есть</option>
      <option value="false">Нет</option>
    </select>
    <select name="season" value="Все" @input="setRequest">
      <option value="Все">Не важно</option>
      <option value="Лето">Есть</option>
      <option value="Зима">Нет</option>
    </select>
    <button class="btn" @click="formQuery">Искать</button>
  </div>

</template> -->

<style scoped>
.filter_wrapper {
  width: 100%;
}
</style>
