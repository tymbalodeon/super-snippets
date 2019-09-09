import React, { Component } from 'react';

export default class AddProject extends Component {
  render() {
    return (
      <section className="AddProject">
        <h2>Create a project</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="project-name-input">Name</label>
            <input
              type="text"
              id="project-name-input"
              name="project-name"
              required
            />
          </div>
          <div className="buttons">
            <button type="submit">Add project</button>
          </div>
        </form>
      </section>
    );
  }
}
