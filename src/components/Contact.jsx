/* eslint-disable react/jsx-no-comment-textnodes */

const Contact = () => {
  return (
    <div name="contact" className="h-screen w-full bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] h-full flex flex-col justify-center items-center mx-auto">
            <div className="p-4 w-full">
                <h1 className="text-3xl font-bold border-b-4 inline border-pink-600 rounded-sm">Contact Me</h1>
                <p className="font-bold mt-2">//Do you have any query, let&apos;s discuss</p>
            </div>
            <div className="w-full pt-8 mx-auto">
                <form action="https://getform.io/f/de3ecb3d-e83d-4ff2-b6c8-d77c02aba260" method="POST" className="flex flex-col w-full max-w-[600px] mx-auto px-4">
                    <input className="bg-[rgb(204,214,246)] text-gray-600 p-3 my-3 " type="text" name="Name" placeholder="Name" />
                    <input type="email" name="Email" placeholder="Email" className="bg-[#ccd6f6] text-gray-600 p-3 my-3 " />
                    <textarea className=" bg-[#ccd6f6] text-gray-600 p-3 my-3" name="Message" cols="30" rows="10" placeholder="Message..."></textarea>
                    <button className="bg-[#0a192f] text-center text-white py-3 px-4 rounded my-3 flex items-center mx-auto border-2 hover:bg-pink-600 hover:border-pink-600" type="submit">Let&apos;s Collaborate</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact