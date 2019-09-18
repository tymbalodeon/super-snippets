const testSeed = {
  makeProjects() {
    return [
      {
        id: 1,
        title: 'Project with Live Trumpet'
      },
      {
        id: 2,
        title: 'Example'
      }
    ];
  },
  makeSnippet() {
    return {
      id: 1,
      title: 'Test',
      info: 'testing stuff',
      content: 'test content',
      user_id: 1
    };
  }
};

export default testSeed;
