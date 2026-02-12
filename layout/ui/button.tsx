"use client";
import React from "react";
import Button from '@mui/material/Button'
import { FaCircleChevronRight } from "react-icons/fa6"

const ButtonUI: React.FC = () => {
    return (
        <div>
            <Button variant="contained">Submit<FaCircleChevronRight/></Button>
        </div>
    );
}
export default ButtonUI;