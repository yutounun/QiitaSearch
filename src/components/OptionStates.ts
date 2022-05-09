// function related to options
import { ref, InjectionKey } from 'vue';
import axios from 'axios';
import { showResult } from './Search';

export const isIncludingTitle = ref<boolean>(false)
export const isNotIncludingTitle = ref<boolean>(false)
export const isIncludingBody = ref<boolean>(false)
export const focusInput = ref<any>(null)

// Insert words into searchKeyword when clicked
export const onIncludingTitle = () => {
  isIncludingTitle.value = !isIncludingTitle.value
  if(isIncludingTitle.value){
    searchKeyword.value += ' title:'
  }
  focusInput.value.focus()
}

// Insert words into searchKeyword when clicked
export const onNotIncludingTitle = () => {
  isNotIncludingTitle.value = !isNotIncludingTitle.value
  if(isNotIncludingTitle.value){
    searchKeyword.value +=' -title:'
  }
}

// Insert words into searchKeyword when clicked
export const onIncludingBody = () => {
  isIncludingBody.value = !isIncludingBody.value
  if(isIncludingBody.value){
    searchKeyword.value += ' body:'
  }
}

// search function
type axiosParams = {
  page: number,
  per_page: number,
  query: string
}
export const searchKeyword = ref<any>('')
export const data = ref()
export const loading = ref<string>('')

export const onSearch = () => {
  // show loading sentense
  loading.value = 'loading. wait a sec'
  
  // Add options when axios works if each values are true
  if (isIncludingTitle.value == true){
    searchKeyword.value = 'title:' + searchKeyword.value
  }
  if (isNotIncludingTitle.value == true){
    searchKeyword.value = '-title:' + searchKeyword.value
  }
  if (isIncludingBody.value == true){
    searchKeyword.value = 'body:' + searchKeyword.value
  }

  // params for data you get
  const params: axiosParams = { 
    page: 3,
    per_page: 20,
    query: searchKeyword.value
  };
  console.log(searchKeyword.value);
  
  // Call an API using axios
  axios.get('https://qiita.com/api/v2/items', { params })
    .then(function(res){
        // make sure if you get data from Qiita
        console.log(res)
        data.value = res.data
        showResult.value = true
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
