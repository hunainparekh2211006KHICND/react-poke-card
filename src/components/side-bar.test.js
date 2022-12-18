import SideBar from "./side-bar";
import { mockData } from "../mockData";
import {render, screen} from '@testing-library/react';

describe('Side Bar Tests',()=>{
    it('should render <SideBar>',async ()=>{
        render(<SideBar placeholders={mockData}></SideBar>)
    });

    it('should have logo',async()=>{
        render(<SideBar placeholders={mockData}></SideBar>);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    it('should have a pokemon name list',async()=>{
        render(<SideBar placeholders={mockData}></SideBar>);
        mockData.results.forEach((d) => expect(screen.getByText(d.name)).toBeInTheDocument());
    });

    it('should have a next button first',async()=>{
        render(<SideBar placeholders={mockData}></SideBar>);
        expect(screen.getByText(/Next/i)).toBeInTheDocument();
    });
});
