
import { onsubmit } from "../../actions/form";
export default function Home() {
  
  return (
    <div className=" flex justify-center items-center h-screen">
      <form action={onsubmit} >
        <div className="flex place-item-center flex-col gap-2">
          <h1>Form</h1>
          <span>Name:</span>
          <input type="text" name="name" id="name"  className="text-black"/>
          <span>Password:</span>
          <input type="password" name="pass" id="pass"  className="text-black"/>
          <span>Email:</span>
          <input type="email" name="email" id="email" className="text-black" />
        </div>
      
      <button>Submit</button>
      </form>
    </div>
  );
}
