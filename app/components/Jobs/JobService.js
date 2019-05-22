import Job from "../../models/Job.js";


//Private
let _jobApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs'
})


let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}


//Public
export default class JobService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }

  getAllJobs() {
    _jobApi.get() // get the jobs
      .then(response => {
        let data = response.data.data.map(j => new Job(j))
        _setState('jobs', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addJob(jobData) {
    _jobApi.post('', jobData)
      .then(res => {
        this.getAllJobs()
      })
      .catch(err => console.error(err))
  }

  delete(id) {
    _jobApi.delete(id)
      .then(res => {
        this.getAllJobs()
      })
  }

}