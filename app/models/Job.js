export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || 'No Description Provided'
  }

  get Template() {
    return `
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.jobTitle} - ${this.company}</h5>
                    <h5 class="card-title">Hours: ${this.hours.toFixed()} Rate: ${this.rate}</h5>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-danger" onclick="app.controllers.jobController.delete('${this._id}')">Delete</button>
                </div>
            </div>
        </div>
        `
  }
}