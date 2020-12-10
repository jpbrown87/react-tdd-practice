import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './PersonList'


describe('PersonList', () => {
  let appWrapper
  beforeEach(() => {
    appWrapper = shallow(<PersonList />)
  })

  it('does things', () => {
    // setup (from before each)
    // exercise
    // const personList = appWrapper.find(PersonList)
    // assert
    // expect(personList).toHaveLength(1)
  }) 
})