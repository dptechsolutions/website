import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'



function DragNDrop() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
          setUploadedFiles(acceptedFiles);
        },
      });
 return (
    <div
      name="dragndrop"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center px-20"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            About
          </p>
        </div>
        <div className='flex flex-row justify-between items-center '>


        <div className=''>
            <p className="text-xl mt-20 text-white">
            AI-driven solutions for businesses, including chatbots, customer profiling, logistics, and interface compatibility. Key highlights include chatbots for instant responses, customer profiling through data collection and clustering, classification models, and recommendation systems, as well as logistics solutions for order processing, traffic analysis, and warehouse automation. These technologies can elevate businesses by improving customer experiences, optimizing processes, and enhancing efficiency
            </p>
        </div>

        <div
          {...getRootProps()}
          className="bg-gray-900 p-6 rounded-md shadow-lg w-full sm:w-2/3 lg:w-1/2 xl:w-2/5 ml-20"
        >
            <input {...getInputProps()} />
            <p className="text-center">Drag or drop files from your computer</p>
            <ul className="mt-4 space-y-2">
            {uploadedFiles.map((file) => (
            <li key={file.name} className="bg-gray-800 p-2 rounded-md">{file.name}</li>
            ))}
            </ul>
        </div>
        </div>
        </div>
    </div>
 )
}

export default DragNDrop