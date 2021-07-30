import React from "react"
import { fireEvent, render } from '@testing-library/react'
import Counter from '../Counter'
import "@testing-library/jest-dom/extend-expect"

let component
beforeEach(() => {
    const c = render(<Counter />)
    component = c
})
test("header renders with correct text", () => {
    const header = component.getByRole('heading', { level: 1 })
    expect(header.textContent).toBe("Counter")
})

test("Counter initally starts at zero", () => {
    const counterElement = component.getByRole('heading', { level: 2 })
    expect(counterElement.textContent).toBe("0")
})

test("input contains intial value of 1", () => {
    const inputElement = component.getByTestId("input")
    expect(inputElement).toHaveAttribute('value', "1")
})

test("add button renders with +", () => {
    const addBtn = component.getByTestId("add-btn")
    expect(addBtn.textContent).toBe("+")
})
test("subtract button renders with -", () => {
    const subtractBtn = component.getByTestId("subtract-btn")
    expect(subtractBtn.textContent).toBe("-")
})

test("change value of input works correctly", () => {
    const inputElement = component.getByTestId("input")
    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })
    expect(inputElement.value).toBe("5")
})
test("click on + btn to add 1 to counter", () => {
    const addBtn = component.getByTestId("add-btn")
    const counterElement = component.getByRole('heading', { level: 2 })
    expect(counterElement.textContent).toBe("0")

    fireEvent.click(addBtn)
    expect(counterElement.textContent).toBe("1")
})

test("click on - btn to add 1 to counter", () => {
    const subtractBtn = component.getByTestId("subtract-btn")
    const counterElement = component.getByRole('heading', { level: 2 })
    expect(counterElement.textContent).toBe("0")

    fireEvent.click(subtractBtn)
    expect(counterElement.textContent).toBe("-1")
})

test("changing input value and click on btns", () => {
    const subtractBtn = component.getByTestId("subtract-btn")
    const counterElement = component.getByRole('heading', { level: 2 })
    const inputElement = component.getByTestId("input")
    const addBtn = component.getByTestId("add-btn")

    fireEvent.change(inputElement, {
        target: {
            value: 5
        }
    })
    fireEvent.click(addBtn)
    expect(counterElement.textContent).toBe("5")
    fireEvent.change(inputElement, {
        target: {
            value: 2
        }
    })
    fireEvent.click(subtractBtn)
    expect(counterElement.textContent).toBe("3")
})

test("expect color change to green if counter value over 100", () => {
    const subtractBtn = component.getByTestId("subtract-btn")
    const counterElement = component.getByRole('heading', { level: 2 })
    const inputElement = component.getByTestId("input")
    const addBtn = component.getByTestId("add-btn")
    fireEvent.change(inputElement, {
        target: {
            value: 100
        }
    })
    fireEvent.click(addBtn)
    expect(counterElement).toHaveStyle("color:green;")
    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterElement).toHaveStyle("color:red;")
    fireEvent.change(inputElement, {
        target: {
            value: 50
        }
    })
    fireEvent.click(addBtn)
    expect(counterElement).toHaveStyle("color:black;")
    fireEvent.click(subtractBtn)
    expect(counterElement).toHaveStyle("color:red;")
    fireEvent.change(inputElement, {
        target: {
            value: 200
        }
    })
    fireEvent.click(addBtn)
    fireEvent.change(inputElement, {
        target: {
            value: 900
        }
    })
    fireEvent.click(subtractBtn)
    expect(counterElement).toHaveStyle("color:red;")

})