"use client";

import { useState } from "react";

export default function MenuCounter(){
    const [count, setCount] = useState(0);

    return (
        <div className="menu-counter">
            <p>Menu visits counter: {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increase counter
            </button>
        </div>
    );
}