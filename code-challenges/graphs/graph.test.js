'use strict'

let Graph = require('./graph.js')

describe('Create Graph', () => {
  test('Node can be successfully added to the graph', () => {
    let g = new Graph(10)
    expect(g.getNodes()).toStrictEqual({})
  });
  test('An edge can be successfully added to the graph', () => {

    expect().toStrictEqual()
  });
  test('A collection of all nodes can be properly retrieved from the graph', () => {

    expect().toStrictEqual()
  });
  test('All appropriate neighbors can be retrieved from the graph', () => {

    expect().toStrictEqual()
  });
  test('Neighbors are returned with the weight between nodes included', () => {

    expect().toStrictEqual()
  });
  test('The proper size is returned, representing the number of nodes in the graph', () => {

    expect().toStrictEqual()
  });
  test('A graph with only one node and edge can be properly returned', () => {

    expect().toStrictEqual()
  });
  test('An empty graph properly returns null', () => {
    let g = new Graph()
    console.log(g)
    expect(g.getNodes()).toStrictEqual({})
  });
});