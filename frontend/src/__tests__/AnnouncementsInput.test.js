import {render, screen, cleanup} from "@testing-library/react";
import AnnouncementsInput from "../AnnouncementsInput"

afterEach(() =>{
    cleanup()
})

test('is announcement input component rendered properly', () =>{
    render(<AnnouncementsInput/>)
    const InputWrapper = screen.getByTestId("announcementInput");
    expect(InputWrapper).toBeInTheDocument();

    const textbox = screen.getByTestId("announcementInputTextbox");
    expect(textbox).toBeInTheDocument()
    expect(textbox).toHaveTextContent("")
    expect(textbox).toHaveStyle("width: 230px")
    expect(textbox).toBeVisible()

    const usernameTextbox = screen.getByTestId("usernameInputTextbox");
    expect(usernameTextbox).toBeInTheDocument()
    expect(usernameTextbox).toHaveTextContent("")
    expect(usernameTextbox).toHaveStyle("width: 100px")
    expect(usernameTextbox).toBeVisible()

    const createButton = screen.getByTestId("createButton");
    expect(createButton).toBeInTheDocument()
    expect(createButton).toHaveTextContent("Create")
    expect(createButton).toHaveStyle("width: 60px")
    expect(createButton).toBeVisible()
})
