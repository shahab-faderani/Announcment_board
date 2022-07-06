import {render, screen, cleanup} from "@testing-library/react";
import AnnouncementsFilter from "../AnnouncementsFilter";

afterEach(() =>{
    cleanup()
})

test('are announcement filter components rendered properly', () =>{
    render(<AnnouncementsFilter/>)

    const announcementContent = screen.getByTestId("announcementFilterWrapper");
    expect(announcementContent).toBeInTheDocument();
    expect(announcementContent).not.toHaveTextContent("")
    expect(announcementContent).toBeVisible()
    expect(announcementContent).toHaveStyle("margin-top:10px")

    const filterAll = screen.getByTestId("filterAll");
    expect(filterAll).toBeInTheDocument();
    expect(filterAll).toHaveTextContent("All")
    expect(filterAll).toBeVisible()
    
    const filterToday = screen.getByTestId("filterToday");
    expect(filterToday).toBeInTheDocument();
    expect(filterToday).toHaveTextContent("Today")
    expect(filterToday).toBeVisible()

    const filterWeek = screen.getByTestId("filterWeek");
    expect(filterWeek).toBeInTheDocument();
    expect(filterWeek).toHaveTextContent("Last 7 Days")
    expect(filterWeek).toBeVisible()

    const filterMonth = screen.getByTestId("filterMonth");
    expect(filterMonth).toBeInTheDocument();
    expect(filterMonth).toHaveTextContent("Last 30 Days")
    expect(filterMonth).toBeVisible()
   
})
