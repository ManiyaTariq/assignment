

const Hero = () =>{
    return(<div className="flex justify-start items-center mt-20 px-8 ">
        <div>
        <br/>
        <br/>
     <h1 className="font-bold text-lg">Hello,</h1>
        <h2 className="font-bold text-lg">My name is <span className="text-purple-700"> Maniya Tariq </span></h2>
        <h3 className="font-bold text-lg">I'm Learning <span className="text-purple-700">Frontend Development</span></h3>
        </div>

{/* Profile picture*/}
<div className="flex justify-between items-end ml--25 mr--28 mb-20 mt-5 pl-15  " >
      <img src="image 2.jpg" alt="profile picture width={200} height={200}" className="rounded-full"></img>
    </div>
    </div>)
}
export default Hero