"use client"

import { useState } from "react"
const initialFromData = {
    title : "",
    description : ""
}

export default function AddBlog(){
    const[blogFromData,setBlogFromData] = useState(initialFromData);
    console.log(blogFromData);




    return<>
    <h1>hi add blog</h1>
    <div>
    <div>
        <label >Enter blog title</label>
        <input 
        name="title" 
        placeholder="Enter blog title"
        value={blogFromData['title']}
        onChange={(e)=>setBlogFromData({
            ...blogFromData,
            title : e.title.value
        })}
        />
    </div>
    <div>
        <label >Enter blog description</label>
        <textarea 
        name="description" 
        placeholder="Enter blog description"
        value={blogFromData['description']}
        onChange={(e)=>setBlogFromData({
            ...blogFromData,
            description : e.title.value
        })}
        />
    </div>
    <div>
        <button>Add blog</button>
    </div>
    </div>
    </>
}




