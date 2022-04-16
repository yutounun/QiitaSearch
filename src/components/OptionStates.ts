import { ref, InjectionKey } from 'vue';
import axios from 'axios';

export const isIncludingTitle = ref<boolean>(false)
export const isNotIncludingTitle = ref<boolean>(false)
export const isIncludingBody = ref<boolean>(false)
export const isIncludingCreated = ref<boolean>(false)
export const isIncludingUpdated = ref<boolean>(false)
export const focusInput = ref<any>(null)
// クリックされたらsearchKeywordに文字追加
export const onIncludingTitle = () => {
  isIncludingTitle.value = !isIncludingTitle.value
  if(isIncludingTitle.value){
    searchKeyword.value += ' title:'
  }
  focusInput.value.focus()
}
export const onNotIncludingTitle = () => {
  isNotIncludingTitle.value = !isNotIncludingTitle.value
  if(isNotIncludingTitle.value){
    searchKeyword.value +=' -title:'
  }
}
export const onIncludingBody = () => {
  isIncludingBody.value = !isIncludingBody.value
  if(isIncludingBody.value){
    searchKeyword.value += ' body:'
  }
}
export const onIncludingCreated = () => {
  isIncludingCreated.value = !isIncludingCreated.value
  if(isIncludingCreated.value){
    searchKeyword.value += 'title:'
  }
}
export const onIncludingUpdated = () => {
  isIncludingUpdated.value = !isIncludingUpdated.value  
  if(isIncludingUpdated.value){
    searchKeyword.value += 'title:'
  }
}


export const searchKeyword = ref<any>('')
type axiosParams = {
  page: number,
  per_page: number,
  query: string
}
export const data = ref()
export const loading = ref<string>('')

export const onSearch = () => {
  // show loading icon
  loading.value = 'loading. wait a sec'
  
  if (isIncludingTitle.value == true){
    searchKeyword.value = 'title:' + searchKeyword.value
  }
  if (isNotIncludingTitle.value == true){
    searchKeyword.value = '-title:' + searchKeyword.value
  }
  if (isIncludingBody.value == true){
    searchKeyword.value = 'body:' + searchKeyword.value
  }
  if (isIncludingCreated.value == true){
    searchKeyword.value = 'created:' + searchKeyword.value
  }
  if (isIncludingUpdated.value == true){
    searchKeyword.value = 'updated:' + searchKeyword.value
  }

  const params: axiosParams = { 
    page: 3,
    per_page: 20,
    query: searchKeyword.value
  };
  console.log(searchKeyword.value);
  // Call an API using axios
  axios.get('https://qiita.com/api/v2/items', {params})
    .then(function(res){
        // make sure if you get data from Qiita
        console.log(res)
        data.value = res.data
    })
    // Watch errors
    .catch(function(error){
      console.log('Error!' + error)
      loading.value = ''
    })
    // Once HTTP request end, loading icon will be hidden
    .finally(function(){
      loading.value = ''
    })
  searchKeyword.value = []
}
