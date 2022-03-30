import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../../../utils/test-utils";
import UIButton from ".";

describe('UIButton testing', () => {
    const text = 'SELECT'
    render(<UIButton text={text} />)
    const btn = screen.getByText('SELECT')

    test('Button is defined and enabled', () => {
        expect(btn).toBeDefined()
        expect(btn).toBeEnabled()
    })
})