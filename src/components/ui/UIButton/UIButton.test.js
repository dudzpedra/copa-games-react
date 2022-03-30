import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../../../utils/test-utils";
//import userEvent from '@testing-library/user-event'
import UIButton from ".";

describe('UIButton testing', () => {
    const text = 'SELECT'
    render(<UIButton text={text} />)

    test('Button is loaded', () => {
        const btn = screen.getByText('SELECT')
        expect(btn).toBeDefined()
    })
    /* it('Button click works', () => {}) */
})