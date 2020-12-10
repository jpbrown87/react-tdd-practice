import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './PersonList'


describe('PersonList', () => {
    const listOfPeople = [
        { id: 1, name: 'bob'},
        {id: 2,name: 'sally'},
        {id: 3,name: 'derik'},
        {id: 4,name: 'joe'},
        {id: 5,name: 'curly'},
        {id: 6,name: 'moe'},];

        let appWrapper

        describe('When there are people in the list',()=>{
            beforeEach(()=>{
                appWrapper = shallow(<PersonList listOfPeople={listOfPeople} />)
            })

            it('should render a list item element for every person in people', () => {
                // setup (from before each)
                // exercise
                const listItems = appWrapper.find('ul > li')
                // assert
                expect(listItems).toHaveLength(6)
              })

              it("should have the person's name in each person element", () => {
                // setup (from before each)
                // exercise
                const elementText = appWrapper.find('ul > li').first().text()
                // assert
                expect(elementText).toContain("bob")
              })

              it('should have a button in each person element', () => {
                // setup (from before each)
                // exercise
                const containsButton = appWrapper.find('ul > li').first().exists('button')
                // assert
                expect(containsButton).toBe(true)
              })

              it('should say "edit" in button in each person element', () => {
                // setup (from before each)
                // exercise
                const buttonText = appWrapper.find('ul > li > button').first().text()
                // assert
                expect(buttonText).toContain("Edit")
              })

              it('should not have a form', () => {
                // setup (from before each)
                const formExists = appWrapper.exists('form')
                // exercise
                // assert
                expect(formExists).toBe(false)
              })

              describe('when edit button is clicked',()=>{
                  beforeEach(()=>{
                    const button = appWrapper.find('ul > li > button').first()
                    button.simulate('click');
                  })

                  it('should open a form', () => {
                    // setup (from before each)
                    const formExists = appWrapper.exists('form')
                    // exercise
                    // assert
                    expect(formExists).toBe(true)
                  })

                  it('should open a form with first and last name fields', () => {
                    // setup (from before each)
                    const formLabels = appWrapper.find('form > label')
                    const formInputs = appWrapper.find('form > label > input')
                    // exercise
                    // assert
                    expect(formInputs).toHaveLength(2)
                    expect(formLabels).toHaveLength(2)
                    expect(formLabels[0].text()).toBe("First Name")
                    expect(formLabels[1].text()).toBe("Last Name")
                  })
              })
        })

        describe("When there aren't people in the list",()=>{
            beforeEach(()=>{
                appWrapper = shallow(<PersonList listOfPeople={[]} />)
            })

            it('should contain "There are no people to list" when there are no people', () => {
                // setup (from before each)
                // exercise
                const containsList = appWrapper.contains('ul')
                // assert
                expect(containsList).toBe(false)
                expect(appWrapper.text()).toBe('There are no people to list')
              }) 
        })
})