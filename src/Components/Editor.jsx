import React, { useState } from 'react';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import { FaMinimize, FaMaximize } from "react-icons/fa6";

const Editor = () => {
    const [markedDown, setMarkedDown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, <div></div>, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '' && lastLine == '') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);
    const [checkButton, setCheckButton] = useState(false);

    const handleChange = (e) => {
        setMarkedDown(e.target.value);
    };

    const handleButtonPositionForEditor = () => {
        setCheckButton(!checkButton);
    };

    return (
        <>
            <div className='w-full h-[100%] flex-col bg-[#88b5b5] flex items-center justify-center pt-6 px-4'>
                <div className={`border-[1px] border-black shadow-md shadow-black bg-[#f9f9f9] w-full sm:w-1/3`}>
                    <div className='w-full flex items-center justify-between border-[1px] border-black shadow-md shadow-black/30 px-4 bg-[#49a3a3]'>
                        <div>
                            <h1 className='text-start font-bold text-lg  my-1'>Editor</h1>
                        </div>
                        <button onClick={handleButtonPositionForEditor}>
                            {checkButton ? <FaMinimize /> : <FaMaximize />}
                        </button>
                    </div>
                    <textarea
                        className={`border-[1px] p-1 focus:outline-none resize-none h-[12rem] w-full ${checkButton ? "h-[30rem]" : "h-[12rem]"}`}
                        value={markedDown}
                        onChange={handleChange}
                    />
                </div>

                <div className={`my-5 border-[1px] w-full sm:w-11/12 md:w-3/4 lg:w-2/3 h-[13rem] border-black bg-white shadow-md shadow-black ${checkButton ? "-z-10" : ""}`}>
                    <div className='w-full border-[1px] border-black shadow-md shadow-black/30 bg-[#49a3a3]'>
                        <h1 className='text-start ml-3 my-1 font-bold text-lg md:text-xl'>Preview</h1>
                    </div>
                    <div className='markdown-body p-3 text-left h-[calc(100%-3rem)] overflow-auto'>
                        <ReactMarkDown remarkPlugins={[remarkGfm]}>
                            {markedDown}
                        </ReactMarkDown>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Editor;
