import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import PersonList from '../PersonList/PersonList'


describe('App', () => {
  let appWrapper
  beforeEach(() => {
    appWrapper = shallow(<App />)
  })

  it('renders a PersonList', () => {
    // setup (from before each)
    // exercise
    const personList = appWrapper.find(PersonList)
    // assert
    expect(personList).toHaveLength(1)
  })

  it('has state', () => {
    // setup (from before each)
    // exercise
    const appState = appWrapper.state()
    // assert
    expect(appState).not.toBeNull()
  })

  it('has people property on state', () => {
    // setup (from before each)
    // exercise
    const appState = appWrapper.state()
    // assert
    expect(appState.people).not.toBeUndefined()
  })

  it('passes people to a PersonList', () => {
    const appState = appWrapper.state()
    const personList = appWrapper.find(PersonList)
    expect(personList.props().people).toEqual(appState.people)
  })

  
})